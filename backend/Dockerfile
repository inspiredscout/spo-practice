FROM node:latest
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build:doc
RUN npm run prisma:generate-prisma-client
RUN npm run build
ENTRYPOINT [ "npm","start" ]