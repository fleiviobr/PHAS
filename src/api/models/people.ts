import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config";
import Models from "../interfaces/models";

class People extends Model {
  public idPerson!: number;
  public name!: string;
  public phone!: string;
  public email!: string;
  public addressId!: number;
  public userId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: Models) {
    this.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "users",
    });
    this.belongsTo(models.Address, {
      foreignKey: "addressId",
      as: "address",
    });
  }
}

People.init(
  {
    idPerson: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Addresses",
        key: "idAddress",
      },
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
    tableName: "People",
    timestamps: true,
  }
);

People.sync();

export default People;
