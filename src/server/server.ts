import express from "express";
import cors from "cors";
import {
  customerRoute,
  productRoute,
  roleRoute,
  taxRoute,
  userRoute,
} from "../routes/index.route";

import { db } from "../config/sequelize.config";
export class Server {
  private app: any;
  private port: string | number;
  private pre: string;
  private paths: any;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3800;
    this.pre = "/api";
    this.paths = {
      customers: this.pre + "/roles",
      products: this.pre + "/products",
      roles: this.pre + "/roles",
      taxes: this.pre + "/taxes",
      users: this.pre + "/users",
    };

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.customers, customerRoute);
    this.app.use(this.paths.products, productRoute);
    this.app.use(this.paths.roles, roleRoute);
    this.app.use(this.paths.taxes, taxRoute);
    this.app.use(this.paths.users, userRoute);
  }
  async connectDB() {
    await db
      .authenticate()
      .then(() => {
        console.log("Conexión exitosa a la base de datos");
      })
      .catch((error: any) => {
        console.log("No se pudo conectar a la base de datos");
      });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en localhost:${this.port}`);
    });
  }
}
