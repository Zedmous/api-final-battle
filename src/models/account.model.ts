import { DataTypes } from "sequelize";

const AccountModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  type_account: {
    type: DataTypes.ENUM('activo', 'pasivo', 'capital', 'ingreso', 'egreso'),
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

export { AccountModel };
