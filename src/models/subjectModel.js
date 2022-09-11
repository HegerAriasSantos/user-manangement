import db from "../db";

const getAll = () => {
	return new Promise((resolve, reject) => {
		db.query("SELECT * from subject", (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
};

const create = ({name}) => {
	return new Promise((resolve, reject) => {
		db.query(
			"INSERT INTO subject (name) VALUES (?)",
			[name],
			(err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			},
		);
	});
};

const update = ({ name }, id) => {
	return new Promise((resolve, reject) => {
		db.query(
			"UPDATE subject SET name = ? WHERE id = ?",
			[name,id],
			(err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			},
		);
	});
};

const Delete = id => {
	return new Promise((resolve, reject) => {
		db.query("DELETE FROM subject WHERE id = ?", [id], (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
};

const getOne = id => {
	return new Promise((resolve, reject) => {
		db.query("SELECT * FROM subject WHERE id = ?", [id], (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
};

export default {
	getAll,
	create,
	update,
	Delete,
  getOne,
};
