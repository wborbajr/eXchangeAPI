## Build Setup

```bash
# install dependencies
npm install

# seed mongodb
node ./src/helpers/seed.js

# serve with hot reload at localhost:5050
npm start
```

## Prerequisites

- Nodejs
- MongoDB

### Mongo
```
docker run -p 27017:27017 --rm -d --name api-db mvertes/alpine-mongo
or
docker run -p 27017:27017 --rm -d --name api-db mongo
docker ps -l
docker kill api-db
```

### TO-DO
1. 