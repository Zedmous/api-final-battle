import { DataTypes } from "sequelize";

const PurchaseDetailModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
  purchase_id: {
    type: DataTypes.INTEGER,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.DOUBLE,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
};

export { PurchaseDetailModel };
