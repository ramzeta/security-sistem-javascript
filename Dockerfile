FROM node:18-slim

WORKDIR /

COPY package.json package-lock.json ./
RUN npm install

COPY reverse-proxy.js .
ENV HOST=0.0.0.0 PORT=8080

EXPOSE ${PORT}
CMD [ "node", "reverse-proxy.js" ]