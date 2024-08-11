import { Router } from "express";
import { validateFields } from "../middlewares";
import { CustomerController } from "../controllers";
import { UserValidator } from "../validators";
const userValidator = new UserValidator();
const router = Router();
const userController=new CustomerController();
router.get("/", userController.all);//http://localhost:3800/api/customers
router.get("/:id", userController.one);//http://localhost:3800/api/users/1
router.post("/",userValidator.validateUser,validateFields, userController.create);//http://localhost:3800/api/customers
router.put("/:id",userValidator.validateUser,validateFields, userController.update);//http://localhost:3800/api/customers/1
router.delete("/:id", userController.delete);//http://localhost:3800/api/customers/1

export default router;