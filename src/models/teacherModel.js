import { DataTypes } from "sequelize";
import sequelize from "../db";

const Model = sequelize.define("teacher", {
	name: DataTypes.TEXT,
	active: {
		type: DataTypes.BOOLEAN,
		defaultValue: true,
	},
	date_created: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
	},
	date_deleted: {
		type: DataTypes.TEXT,
		defaultValue: "Aun activo",
	},
});
Model.columns = Object.keys(Model.prototype.rawAttributes);

export default Model;
