import db from "../db";
function getAll() {
	return new Promise((resolve, reject) => {
		db.query("SELECT * FROM student", (err, result) => {
			console.log(result, err);
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
}

function create({ name, code }) {
	return new Promise((resolve, reject) => {
		db.query(
			"INSERT INTO student (name, code) VALUES (?,?)",
			[name, code],
			(err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			},
		);
	});
}
function getOne(id) {
	return new Promise((resolve, reject) => {
		db.query("SELECT * FROM student WHERE id = ?", [id], (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
}

function update({ name, code }, id) {
	return new Promise((resolve, reject) => {
		db.query(
			"UPDATE student SET name = ?, code = ? WHERE id = ?",
			[name, code, id],
			(err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			},
		);
	});
}
function Delete(id) {
	return new Promise((resolve, reject) => {
		db.query("DELETE FROM student WHERE id = ?", [id], (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
}
export default {
	getAll,
	create,
	getOne,
	update,
	Delete,
};
