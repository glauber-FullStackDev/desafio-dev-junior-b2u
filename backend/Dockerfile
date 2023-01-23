FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ENV NODE_ENV production
RUN npx prisma generate
EXPOSE 3000
CMD npx prisma db push && node ./dist/index.js
