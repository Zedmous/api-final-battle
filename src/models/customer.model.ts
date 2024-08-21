import { DataTypes } from "sequelize";

const CustomerModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  identification:{
    type: DataTypes.STRING(20),
    unique: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    validate: {
      isEmail: true
    },
  },
  telephone: {
    type: DataTypes.STRING(20),
  },
  address: {
    type: DataTypes.STRING(50),
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

export { CustomerModel };
