FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
CMD [ "node", "./dist/index.js" ]
