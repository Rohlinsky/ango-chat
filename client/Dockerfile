FROM node:12.13-alpine AS dev

WORKDIR /opt/app

COPY package.json package.json

RUN npm install --silent
RUN npm install -g @angular/cli --silent

COPY src src
COPY angular.json angular.json
COPY karma.conf.js karma.conf.js
COPY tsconfig.json tsconfig.json
COPY tsconfig.app.json tsconfig.app.json
COPY tsconfig.spec.json tsconfig.spec.json
COPY tslint.json tslint.json

EXPOSE 4200/tcp
CMD ng serve --host 0.0.0.0
