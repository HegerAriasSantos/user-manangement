import db from "../db";
export const filter = (table, obj = {}) => {
	return new Promise((resolve, reject) => {
		let query = `SELECT * FROM ${table}`;
		const keys = Object.entries(obj);

		if (keys.length >= 1) {
			query = `SELECT * FROM ${table} WHERE ${keys[0][0]} = '${keys[0][1]}'`;
			for (let index = 1; index < keys.length; index++) {
				const key = keys[index][0];
				const value = keys[index][1];
				query += ` AND ${key} = ${value}`;
				console.log(query);
			}
		}

		try {
			db.query(query, [], (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		} catch (error) {
			reject(error);
		}
	});
};
