BUILD_USER       ?= $(shell whoami)@$(shell hostname)
BUILD_DATE       ?= $(shell date -u +"%Y-%m-%dT%H:%M:%SZ")
BUILD_DATE_SHORT ?= $(shell date -u +"%Y%m%d")

GIT_VERSION ?= $(shell git describe --tags --always --dirty)
IMAGE_PREFIX ?= us.gcr.io/kubernetes-dev

.PHONY: clean
clean:
	rm -rf build/

.PHONY: build
build: clean
	yarn install
	yarn build

.PHONY: sign
drone:
	drone lint .drone.yml --trusted
	drone sign grafana/design-system --save

.PHONY: docker
docker:
	docker build --build-arg=GIT_VERSION=$(GIT_VERSION) -t $(IMAGE_PREFIX)/design-system -f Dockerfile .
	docker tag $(IMAGE_PREFIX)/design-system $(IMAGE_PREFIX)/design-system:$(GIT_VERSION)

.PHONY: push
push: docker
	docker push $(IMAGE_PREFIX)/design-system:$(GIT_VERSION)
	docker push $(IMAGE_PREFIX)/design-system:latest