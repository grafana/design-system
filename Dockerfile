FROM node:16-alpine

COPY . /app/

WORKDIR /app

RUN npm install
RUN npm run build
EXPOSE 8000
CMD [ "npx", "serve", "build" ]