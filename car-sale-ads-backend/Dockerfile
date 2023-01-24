FROM node:16-alpine
WORKDIR /usr/app
COPY package*.json ./
COPY prisma ./prisma/
COPY tsconfig.json ./
RUN npm install
RUN npx prisma generate
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]