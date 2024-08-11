import { body } from "express-validator";

class CustomerValidator {
  public validateCustomer = [
    body("name").notEmpty().withMessage("Name is required"),
    body("name").isString().withMessage("Name must be string"),
    body("email").notEmpty().withMessage("Email is required"),
    body("email").isEmail().withMessage("Email must be email"),
    body("telephone").isString().withMessage("Telephone must be string"),
    body("address").notEmpty().withMessage("Address is required"),
    body("address").isNumeric().withMessage("Address must be numeric"),
  ];
}
export { CustomerValidator };