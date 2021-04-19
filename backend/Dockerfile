FROM node:14-alpine

WORKDIR /app

# Install dependencies
COPY package.json /app
RUN yarn install

# Copy source files
# COPY . /app

EXPOSE 8080

ENTRYPOINT yarn run dev
