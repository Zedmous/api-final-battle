import { Router } from "express";
import { validateFields } from "../middlewares";
import { SaleController } from "../controllers";
import { SaleValidator } from "../validators";
const saleValidator = new SaleValidator();
const router = Router();
const saleController=new SaleController();
/**
 * @swagger
 * /sales:
 *   get:
 *     summary: Obtener todas las ventas
 *     tags:
 *       - Sales
 *     responses:
 *       200:
 *         description: Lista de ventas
 */
router.get("/", saleController.all);
router.get("/:id", saleController.one);
router.post("/",saleValidator.validateSale,validateFields, saleController.create);
router.put("/:id",saleValidator.validateSale,validateFields, saleController.update);
router.delete("/:id", saleController.delete);

export default router;