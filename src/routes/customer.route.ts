import { Router } from "express";
import { validateFields } from "../middlewares";
import { CustomerController } from "../controllers";
import { CustomerValidator } from "../validators";
const customerValidator = new CustomerValidator();
const router = Router();
const customerController=new CustomerController();
router.get("/", customerController.all);//http://localhost:3800/api/customers
router.get("/:id", customerController.one);//http://localhost:3800/api/users/1
router.post("/",customerValidator.validateCustomer,validateFields, customerController.create);//http://localhost:3800/api/customers
router.put("/:id",customerValidator.validateCustomer,validateFields, customerController.update);//http://localhost:3800/api/customers/1
router.delete("/:id", customerController.delete);//http://localhost:3800/api/customers/1

export default router;