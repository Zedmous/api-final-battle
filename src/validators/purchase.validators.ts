import { body } from "express-validator";

class PurchaseValidator {
  public validatePurchase = [
    body("supplier_id").notEmpty().withMessage("Supplier Id is required"),
    body("supplier_id").isNumeric().withMessage("Supplier Id must be numeric"),
    body("reference").notEmpty().withMessage("Reference is required"),
    body("reference").isString().withMessage("Reference must be string"),
  ];
}
export { PurchaseValidator };