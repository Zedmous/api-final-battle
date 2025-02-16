import express from "express";
import cors from "cors";
import {
  customerRoute,
  journalRoute,
  productRoute,
  purchaseRoute,
  roleRoute,
  saleRoute,
  taxRoute,
  userRoute,
} from "../routes/index.route";
import { db } from "../config/sequelize.config";
import { swaggerOptions } from "../config";
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
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
      customers: this.pre + "/customers",
      purchases: this.pre + "/purchases",
      products: this.pre + "/products",
      roles: this.pre + "/roles",
      sales: this.pre + "/sales",
      taxes: this.pre + "/taxes",
      users: this.pre + "/users",
      journals: this.pre + "/journals",
    };

    this.connectDB();
    this.middlewares();
    this.routes();
    this.swaggerSetup();
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
    this.app.use(this.paths.sales, saleRoute);
    this.app.use(this.paths.purchases, purchaseRoute);
    this.app.use(this.paths.taxes, taxRoute);
    this.app.use(this.paths.users, userRoute);
    this.app.use(this.paths.journals, journalRoute);
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
  swaggerSetup() {
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }
}
