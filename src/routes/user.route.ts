import { Router } from "express";
import { validateFields } from "../middlewares";
import { UserController } from "../controllers";
import { UserValidator } from "../validators";
const userValidator = new UserValidator();
const router = Router();
const userController=new UserController();
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todas los usuarios
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */

router.get("/", userController.all);//http://localhost:3800/api/users

router.get("/:id", userController.one);//http://localhost:3800/api/users/1

router.post("/",userValidator.validateUser,validateFields, userController.create);//http://localhost:3800/api/users

router.put("/:id",userValidator.validateUser,validateFields, userController.update);//http://localhost:3800/api/users/1

router.delete("/:id", userController.delete);//http://localhost:3800/api/users/1

router.post("/login",userValidator.validateLogin,validateFields, userController.login);//http://localhost:3800/api/users

export default router;