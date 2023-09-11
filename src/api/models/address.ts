import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config";

class Address extends Model {
  public idAddress!: number;
  public street!: string;
  public number!: string;
  public complement!: string;
  public neighborhood!: string;
  public city!: string;
  public country!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Address.init(
  {
    idAddress: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Addresses",
    timestamps: true,
  }
);

export default Address;
