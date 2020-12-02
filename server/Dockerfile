FROM node:12.13-alpine AS dev

WORKDIR /opt/app

COPY package*.json ./

RUN npm install --silent

COPY tsconfig.json tsconfig.json
COPY tsconfig.build.json tsconfig.build.json
COPY src src

CMD ["npm", "run", "start:debug"]
