# DATLESA 0.0.1

# Repositorio Backend. Aplicacion de Ventas 2024

Backend para una aplicacion web sobre ventas de productos de un local o tienda.


## Integrantes de Equipo

- Eduardo Nieves

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
| 1   | `@google-cloud/storage`            | `^5.8.5`        |
| 2   | `bcryptjs`                         | `^2.4.3`        |
| 3   | `cors`                             | `^2.8.5`        |
| 4   | `dotenv`                           | `^10.0.0`       |
| 5   | `email-templates`                  | `^8.0.7`        |
| 6   | `express`                          | `^4.17.1`       |
| 7   | `express-validator`                | `^6.6.0`        |
| 8   | `fs-extra`                         | `^10.0.0`       |
| 9   | `jsonwebtoken`                     | `^8.5.1`        |
| 10  | `morgan`                           | `^1.10.0`       |
| 11  | `multer`                           | `^1.4.2`        |
| 12  | `nanoid`                           | `^3.1.23`       |
| 13  | `nodemailer`                       | `^6.6.1`        |
| 14  | `pg`                               | `^8.6.0`        |
| 15  | `pg-hstore`                        | `^2.3.3`        |
| 16  | `sequelize`                        | `^6.6.2`        |
| 17  | `swagger-jsdoc`                    | `6`             |
| 18  | `swagger-ui-express`               | `^4.1.6`        |
| 19  | `util`                             | `^0.12.4`       |
| 20  | `uuid`                             | `^8.3.2`        |

### Documentacion de la Api y Pruebas en Swagger

```
- local -> http://localhost:3800/swagger
```
