FROM node:lts as base

COPY . /app/

WORKDIR /app

RUN npm install
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /app
# Copy what we've installed/built from production
COPY --from=base /app/build /usr/share/nginx/html/
