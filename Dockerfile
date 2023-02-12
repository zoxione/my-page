FROM node

WORKDIR /app

COPY . .

RUN yarn

# EXPOSE 3000

RUN yarn run build 

CMD ["yarn", "run", "preview"]