import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config";
import Models from "../interfaces/models";

class Activity extends Model {
  public idActivity!: number;
  public name!: string;
  public description!: string;
  public initialDate!: Date;
  public endDate!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: Models) {
    this.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "users",
    });
  }
}

Activity.init(
  {
    idActivity: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    initialDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "idUser",
      },
    },
  },
  {
    sequelize,
    tableName: "Activities",
    timestamps: true,
  }
);

Activity.sync();

export default Activity;
