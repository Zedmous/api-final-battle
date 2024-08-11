import { body } from "express-validator";

class ProductValidator {
  public validateProduct = [
    body("name").notEmpty().withMessage("Name is required"),
    body("name").isString().withMessage("Name must be string"),
    body("price").isFloat().withMessage("Price must be a decimal number (double)"),
    body("quantity").isInt().withMessage("Quantity must be an integer"),
    body("minimum_stock").isInt().withMessage("Minimum stock must be an integer"),
  ];
}
export { ProductValidator };