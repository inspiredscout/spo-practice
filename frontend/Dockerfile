FROM node:latest
LABEL authors="sirok1"
WORKDIR /app
COPY . .
RUN npm install
ENTRYPOINT ["npm", "run", "build"]