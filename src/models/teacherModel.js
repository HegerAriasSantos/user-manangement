import { DataTypes } from "sequelize";
import sequelize from "../db";

const Teacher = sequelize.define("teacher", {
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

export default Teacher;
