FROM node:16-alpine3.16
WORKDIR /app

RUN apk add --no-cache tini

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build
RUN chmod +x /app/run.sh

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["sh", "-c", "/app/run.sh"]
