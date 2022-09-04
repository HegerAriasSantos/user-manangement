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
export default {
	getAll,
};
