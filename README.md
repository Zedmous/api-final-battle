# DATLESA 0.0.1

# Repositorio Backend. Aplicación de Ventas 2024

Backend para una aplicacion web sobre ventas de productos de un local o tienda.


## Integrantes de Equipo

- Eduardo Nieves Email: zedmous@gmail.com

### Especificaciones técnicas / Referencias

- Documentación oficial `https://expressjs.com/` 

#### Requerimientos previos:

- NodeJS
- Npm

#### Branches

- master -> Production Service`https://example.com/api`
- master -> Production Local `http://localhost:3800/api`
- develop -> Develop Service `https://example.com/api`
- develop -> Develop Local `http://localhost:3800/api`

### Configurar el entorno de desarrollo

#### Comandos para desplegar funciones.

| °   | Comando         | Descripción                                      | Notas |
| --- | --------------- | ------------------------------------------------ | ----- |
| 1   | `npm run dev`   | Compilación de la aplicación para el desarrollo  |
| 2   | `npm run start` | Ejecutar la aplicación en producción             |


### Folder Structure

```
├──src:
|   ├──config:
|   │   ├── index.ts
|   │   ├── *.config.ts
|   ├──controllers:
|   │   ├──index.ts
|   │   ├── *.controller.ts
|   ├──helpers:
|   │   ├── ...
|   ├──interfaces:
|   │   ├──index.ts
|   │   ├── *.interface.ts
|   ├──middlewares:
|   │   ├── ...
|   ├──models:
|   │   ├──index.ts
|   │   ├── *.model.ts
|   ├──routes:
|   │   ├──index.ts
|   │   ├── *.route.ts
|   ├──server:
|   │   ├──server.ts
|   ├──services:
|   │   ├── *.service.ts
|   ├─validators:
|   │   ├──index.ts
|   │   ├── *.validator.ts
|   ├──app.ts
├──.env.example
├──.gitignore
├──package-lock.json
├──package.json
├──README.md
├──tsconfig.json
├──tslint.json
```

### Notas

- La aplicación fue creada por medio de express.
- Se debe crear la base de datos previeamente antes de ejecutar el comando npm run dev, y el nombre que se crea debe usarse en los env.
- Se debe crear el archivo .env

| °   | Paquete                            | Versión         |
| --- | ---------------------------------- | --------------- |
|  1  | `cors`                             | `^2.8.5`        |
|  2  | `dotenv`                           | `^16.4.5`       |
|  3  | `express`                          | `^4.19.2`       |
|  4  | `express-validator`                | `^7.1.0`        |
|  5  | `mysql2`                           | `^3.10.1`       |
|  6  | `sequelize`                        | `^6.37.3`       |
|  7  | `swagger-jsdoc`                    | `^6.2.8`        |
|  8  | `swagger-ui-express`               | `^5.0.1`        |


### Documentacion de la Api y Pruebas en Swagger

```
- local -> http://localhost:3800/swagger
```
