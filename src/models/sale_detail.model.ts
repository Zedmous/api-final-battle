import { DataTypes } from "sequelize";

const SaleDetailModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
  sale_id: {
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

export { SaleDetailModel };
