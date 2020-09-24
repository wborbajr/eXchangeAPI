## eXchangeAPI

[![MobAPI](https://img.shields.io/badge/wborbajr-MobAPI-red)]()
[![License](https://img.shields.io/github/license/wborbajr/eXchangeAPI)]()
[![Code Size](https://img.shields.io/github/languages/code-size/wborbajr/eXchangeAPI)]()
[![Repo Size](https://img.shields.io/github/repo-size/wborbajr/eXchangeAPI)]()
[![Issue](https://img.shields.io/github/issues/wborbajr/eXchangeAPI)]()
[![Languages](https://img.shields.io/github/languages/count/wborbajr/eXchangeAPI)]()
[![Build](https://img.shields.io/github/workflow/status/wborbajr/eXchangeAPI/Go)]()
[![Docker Build](https://img.shields.io/docker/build/wborbajr/eXchangeAPI)]()
[![Stars](https://img.shields.io/github/stars/wborbajr/eXchangeAPI)]()
[![Forks](https://img.shields.io/github/forks/wborbajr/eXchangeAPI)]()
[![Library](https://img.shields.io/librariesio/github/wborbajr/eXchangeAPI)]()



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
