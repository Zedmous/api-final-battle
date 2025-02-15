import { DataTypes } from "sequelize";

const RequestModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  request_type_id: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.TEXT
  },
  amount: {
    type: DataTypes.DOUBLE,
  },
  status: {
    type: DataTypes.ENUM('pendiente', 'aprobada', 'rechazada'),
    allowNull: false
  },
};

export { RequestModel };
