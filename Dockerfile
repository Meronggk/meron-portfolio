FROM node:16
ADD . /app
WORKDIR /app
RUN npm ci
RUN npm run build
RUN npm install -g serve
ENTRYPOINT serve /app/build -p 3000