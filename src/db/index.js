const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("technical_test", "root", "", {
	host: "localhost",
	dialect: "mysql",
});

const connect = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};
connect();
(async () => {
	await sequelize.sync();
})();
export default sequelize;
