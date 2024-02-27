FROM node:latest
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
ENTRYPOINT [ "npm","start" ]