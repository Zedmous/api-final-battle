import { DataTypes } from "sequelize";

const AccountRecordModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('debe', 'haber'),
    allowNull: false
  },
  amount: {
    type: DataTypes.DOUBLE,
  },
  account_id: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

export { AccountRecordModel };
