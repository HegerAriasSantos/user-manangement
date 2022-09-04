import Model from "../models/studentModel";

export function getAll() {
	return new Promise(async (resolve, reject) => {
		const students = await Model.getAll();
		if (students) {
			resolve(students);
		} else {
			reject("Not students found");
		}
	});
}
