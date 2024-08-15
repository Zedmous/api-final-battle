import { body } from "express-validator";

class TaxValidator {
  public validateTax = [
    body("name").notEmpty().withMessage("Name is required"),
    body("name").isString().withMessage("Name must be string"),
    body("percentage").notEmpty().withMessage("Percentage is required"),
    body("percentage").isFloat().withMessage("Percentage must be a decimal number (double)"),
  ];
}
export { TaxValidator };