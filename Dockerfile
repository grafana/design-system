FROM node:lts@sha256:bb20cf73b3ad7212834ec48e2174cdcb5775f6550510a5336b842ae32741ce6c as base

COPY . /app/

WORKDIR /app

RUN npm install
RUN npm run build

FROM nginx:stable-alpine@sha256:a8b39bd9cf0f83869a2162827a0caf6137ddf759d50a171451b335cecc87d236
WORKDIR /app
# Copy what we've installed/built from production
COPY --from=base /app/build /usr/share/nginx/html/
