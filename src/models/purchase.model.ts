import { DataTypes } from "sequelize";

const PurchaseModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  supplier_id: {
    type: DataTypes.INTEGER,
  },
  reference: {
    type: DataTypes.STRING(20),
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.ENUM('pendiente', 'abrobada','rechazada'),
    allowNull: false,
    defaultValue: 'pendiente'
  },
};

export { PurchaseModel };
