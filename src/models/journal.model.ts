import { DataTypes } from "sequelize";

const JournalModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  request_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  account_record_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'account_records',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

export { JournalModel };
