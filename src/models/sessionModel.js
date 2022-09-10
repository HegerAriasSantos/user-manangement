import db from "../db";

const getAll = () => {
	return new Promise((resolve, reject) => {
		db.query("SELECT * from session", (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
};

const create = ({
	//   day,
	//   teacher_id,
	//   subject,
	//   class_room_id,
	hour_start,
	hour_end,
}) => {
	return new Promise((resolve, reject) => {
		db.query(
			"INSERT INTO session (hour_start, hour_end) VALUES (?,?)",
			[hour_start, hour_end],
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

const getOne = id => {
	return new Promise((resolve, reject) => {
		db.query("SELECT * FROM session WHERE id = ?", [id], (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
};

const update = ({ hour_start, hour_end }, id) => {
	return new Promise((resolve, reject) => {
		db.query(
			"UPDATE session SET hour_start = ?, hour_end = ? WHERE id = ?",
			[hour_start, hour_end, id],
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
		db.query("DELETE FROM session WHERE id = ?", [id], (err, result) => {
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
	getOne,
	update,
	Delete,
};
