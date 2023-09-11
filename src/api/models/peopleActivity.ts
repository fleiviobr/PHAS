import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config";
import Models from "../interfaces/models";

class PeopleActivity extends Model {
  public personId!: number;
  public activityId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  static associate(models: Models) {
    this.belongsTo(models.Activity, {
      foreignKey: "activityId",
      as: "activities",
    });
    this.belongsTo(models.Person, {
      foreignKey: "personId",
      as: "people",
    });
  }
}

PeopleActivity.init(
  {
    personId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "People",
        key: "idPerson",
      },
      primaryKey: true,
    },
    activityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Activities",
        key: "idActivity",
      },
      primaryKey: true,
    },
  },
  {
    sequelize,
    tableName: "PeopleActivity",
    timestamps: true,
  }
);

PeopleActivity.sync();

export default PeopleActivity;
