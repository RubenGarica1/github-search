FROM node:alpine

ENV VIRTUAL_HOST=github.rubengarcia.me
ENV LETSENCRYPT_HOST=github.rubengarcia.me
ENV LETSENCRYPT_EMAIL=rubengarcia182@gmail.com

COPY package*.json ./
RUN npm install
RUN npm install --global pm2
COPY ./ ./
RUN npm run build

EXPOSE 3002

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]