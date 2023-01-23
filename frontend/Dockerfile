FROM node:16-alpine as builder

COPY . /build
COPY .env /build
WORKDIR /build
RUN npm run build

FROM caddy:latest

COPY --from=builder /build/Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /build/dist /srv
