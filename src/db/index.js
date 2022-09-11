import mysql from "mysql";

const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "technical_test",
});

con.connect(err => {
	if (err) throw err;
	console.log("Connected!");
});

export default con;
