FROM node:14.16.0-alpine

WORKDIR /app

# Install dependencies
COPY package.json /app
RUN yarn install

# Copy source files
COPY . /app

EXPOSE 3000

ENTRYPOINT yarn run dev
