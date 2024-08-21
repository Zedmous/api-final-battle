import { body } from "express-validator";

class CustomerValidator {
  public validateCustomer = [
    body("name").notEmpty().withMessage("Name is required"),
    body("name").isString().withMessage("Name must be string"),
    body("identification").notEmpty().withMessage("Identification is required"),
    body("identification").isString().withMessage("Identification must be string"),
    body("email").isEmail().withMessage("Email must be email"),
    body("telephone").isString().withMessage("Telephone must be string"),
    body("address").isString().withMessage("Address must be string"),
  ];
}//identification
export { CustomerValidator };