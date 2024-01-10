FROM node:lts-alpine

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

# DB port
EXPOSE 12345

# Server port
EXPOSE 5000

ENTRYPOINT [ "yarn", "start" ]