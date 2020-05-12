### MariaDB
```
docker run -p 3306:3306 --rm -d --name api-db -eMARIADB_ROOT_PASSWORD=123mudar mariadb/server:10.4
docker ps -l
docker kill api-db
```

### PostgreSQL
```
docker run -p 5432:5432 --rm -d --name api-db -e POSTGRES_PASSWORD=123mudar postgres
docker ps -l
docker kill api-db
```

### Mongo
```
docker run -p 27017:27017 --rm -d --name api-db mongo
docker ps -l
docker kill api-db
```

