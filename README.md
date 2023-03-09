<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar repositorio
2. Ejecutar

```
yarn install
```

3. Tener nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la BDD

```
docker-compose up -d
```

5. Colocar el archivo **.env.template** y renombrar la copia a **.env**

6. Llenar las variables de entorno definidas en el **.env**

7. Ejecutar la app con:

```
yarn start:dev
```

8. Construir la BDD con la semilla

```
http://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- NestJS
