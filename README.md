# Aplicación de publicaciones tipo twitter

Esta aplicación nos permite crear, listar publicaciones, añadir comentarios a dichas publicaciones y agregar me gusta o no me gusta a las publicaciones.


## Empecemos 🚀

_Esta aplicación se puede ejecutar con docker-compose o ejecutar cada aplicación manualmente._


### Desplegar el proyecto con docker-compose


### Pre-requisitos 📋

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

_5) Ejecutar la aplicación en el navegador con la siguiente ruta_

```
http://localhost:3000/
```

_6) Abrir la documentación del API Rest con swagger_

```
http://localhost:5000/api/docs
```

## Ejecutando las pruebas ⚙️

### Backend

_Para las pruebas del backend se utilizó:_
* [Jest](https://jestjs.io/)
* [SuperTest](https://www.npmjs.com/package/supertest)

_Para ejecutar las pruebas del backend, dentro de la carpeta de este proyecto se ejecutan los siguientes comandos:_ 


_Este comando ejecutará las pruebas unitarias que estan dentro de la carpeta ./src/__TEST__ ._

```
npm run test
```

_Este comando generará un informe detallando un porcentaje de usabilidad del código, dicho informe se genera en la carpeta coverage._
```
npm run jest-coverage
```

### Frontend

_Para las pruebas del frontend se utilizó:_
* [Mock Service Worker](https://mswjs.io/)
* [Testing Library](https://testing-library.com/)

_Para ejecutar las pruebas del frontend, dentro de la carpeta de este proyecto se ejecuta el siguiente comando:_ 

```
npm test
```

## Construido con 🛠️

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
⌨️ con ❤️ por [juanlopezjs](https://github.com/juanlopezjs) 😊