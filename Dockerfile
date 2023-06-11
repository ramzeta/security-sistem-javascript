FROM node:14-alpine

WORKDIR /

COPY package.json package-lock.json ./
RUN npm install

COPY reverse-proxy.js .
ENV HOST=0.0.0.0 PORT=8080

EXPOSE ${PORT}
CMD [ "node", "reverse-proxy.js" ]