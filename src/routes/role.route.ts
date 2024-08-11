import { Router } from "express";
import { validateFields } from "../middlewares";
import { RoleController } from "../controllers";
import { RoleValidator } from "../validators";
const roleValidator = new RoleValidator();
const router = Router();
const roleController=new RoleController();
router.get("/", roleController.all);//http://localhost:3800/api/roles
router.get("/:id", roleController.one);//http://localhost:3800/api/roles/1
router.post("/",roleValidator.validateRole,validateFields, roleController.create);//http://localhost:3800/api/roles
router.put("/:id",roleValidator.validateRole,validateFields, roleController.update);//http://localhost:3800/api/roles/1
router.delete("/:id", roleController.delete);//http://localhost:3800/api/roles/1
export default router;