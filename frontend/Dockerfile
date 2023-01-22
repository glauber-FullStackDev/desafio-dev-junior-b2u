FROM node:16-alpine as builder

COPY . /build
WORKDIR /build
CMD [ "npm", "run", "build" ]

FROM caddy:latest

COPY --from=builder /build/Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /build/dist /srv

# COPY Caddyfile /etc/caddy/Caddyfile
# COPY dist/ /srv