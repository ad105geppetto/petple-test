FROM node:16

WORKDIR /petple/
COPY . /petple/

RUN yarn install
RUN yarn build
CMD yarn start