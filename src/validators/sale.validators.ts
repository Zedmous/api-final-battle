import { body } from "express-validator";

class SaleValidator {
  public validateSale = [
    body("customer_id").notEmpty().withMessage("Customer Id is required"),
    body("customer_id").isNumeric().withMessage("Customer Id must be numeric"),
    body("discount").notEmpty().withMessage("Discount is required"),
    body("discount").isFloat().withMessage("Discount must be a decimal number (double)"),
    body("tax_id").notEmpty().withMessage("Tax Id is required"),
    body("tax_id").isNumeric().withMessage("Tax Id must be numeric"),
  ];
}
export { SaleValidator };