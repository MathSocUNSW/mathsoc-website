FROM node:14-alpine

WORKDIR /app

# Install dependencies
COPY package.json /app
RUN yarn install

# Copy source files
# COPY . /app

# TODO: https://geshan.com.np/blog/2020/11/nodejs-with-docker/#2.2-multi-stage-docker-file-to-support-nodejs-docker-in-production

EXPOSE 8080

ENTRYPOINT yarn run dev
