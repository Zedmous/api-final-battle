import { Router } from "express";
import { validateFields } from "../middlewares";
import { ProductController } from "../controllers";
import { ProductValidator } from "../validators";
const productValidator = new ProductValidator();
const router = Router();
const productController=new ProductController();
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtener todas los productos
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get("/", productController.all);//http://localhost:3800/api/customers
router.get("/:id", productController.one);//http://localhost:3800/api/users/1
router.post("/",productValidator.validateProduct,validateFields, productController.create);//http://localhost:3800/api/customers
router.put("/:id",productValidator.validateProduct,validateFields, productController.update);//http://localhost:3800/api/customers/1
router.delete("/:id", productController.delete);//http://localhost:3800/api/customers/1

export default router;