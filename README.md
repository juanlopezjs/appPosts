# Aplicaci贸n de publicaciones tipo twitter

Esta aplicaci贸n nos permite crear, listar publicaciones, a帽adir comentarios a dichas publicaciones y agregar me gusta o no me gusta a las publicaciones.


## Empecemos 馃殌

_Esta aplicaci贸n se puede ejecutar con docker-compose o ejecutar cada aplicaci贸n manualmente._


### Desplegar el proyecto con docker-compose


### Pre-requisitos 馃搵

_1) Se genera el build de las imagenes del frontend, del backend y de la base de datos_

```
docker-compose build
```

_2) Se desplegan los servicios_

```
docker-compose up -d 
```

_3) Se ejecutan las migraciones de las tablas en la base de datos_

```
docker-compose run backend npm run devMigrate
```

_4) Se insertan algunos datos predeterminados (Opcional)_

```
docker-compose run backend npx sequelize-cli db:seed:all
```

_5) Ejecutar la aplicaci贸n en el navegador con la siguiente ruta_

```
http://localhost:3000/
```

_6) Abrir la documentaci贸n del API Rest con swagger_

```
http://localhost:5000/api/docs
```

## Ejecutando las pruebas 鈿欙笍

### Backend

_Para las pruebas del backend se utiliz贸:_
* [Jest](https://jestjs.io/)
* [SuperTest](https://www.npmjs.com/package/supertest)

_Para ejecutar las pruebas del backend, dentro de la carpeta de este proyecto se ejecutan los siguientes comandos:_ 


_Este comando ejecutar谩 las pruebas unitarias que estan dentro de la carpeta ./src/__TEST__ ._

```
npm run test
```

_Este comando generar谩 un informe detallando un porcentaje de usabilidad del c贸digo, dicho informe se genera en la carpeta coverage._
```
npm run jest-coverage
```

### Frontend

_Para las pruebas del frontend se utiliz贸:_
* [Mock Service Worker](https://mswjs.io/)
* [Testing Library](https://testing-library.com/)

_Para ejecutar las pruebas del frontend, dentro de la carpeta de este proyecto se ejecuta el siguiente comando:_ 

```
npm test
```

## Construido con 馃洜锔?

* [React](https://es.reactjs.org/)
* [Bootstrap 5](https://getbootstrap.com/)
* [Redux toolkit](https://redux-toolkit.js.org/)
* [Node.js](https://nodejs.org/es/)
* [Express.js](https://expressjs.com/es/)
* [Sequalize](https://sequelize.org/master/)
* [Postgres SQL](https://www.postgresql.org/)
* [Docker](https://www.docker.com/)

## Arquitectura utilizada para el backend
![Implementation](https://codely.tv/wp-content/uploads/2016/05/clean-architecture.jpg)


---
鈱笍 con 鉂わ笍 por [juanlopezjs](https://github.com/juanlopezjs) 馃槉