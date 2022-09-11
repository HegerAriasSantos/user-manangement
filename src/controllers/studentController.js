import { filter } from "../models/filter";
import studentTable from "../entities/student";
import Model from "../models/studentModel";
import checkProperties from "../utils/checkProperties";

export function get(req) {
	return new Promise(async (resolve, reject) => {
		const { query } = req;
		const queriesWrong = checkProperties(studentTable.columns, query);
		if (queriesWrong.length >= 1) {
			return reject({
				error: {
					message: "Theses queries are wrong",
					queriesWrong,
				},
				code: 400,
			});
		}
		const students = await filter(studentTable.tableName, query);
		if (students.length >= 1) {
			resolve(students);
		} else {
			reject({
				error: {
					message: "Not students found",
				},
				code: 404,
			});
		}
	});
}
export function create(body) {
	return new Promise(async (resolve, reject) => {
		if (!body.name) {
			return reject("Name is required");
		}

		const student = {
			name: body.name,
			code: Date.now(),
		};
		const studentCreated = await Model.create(student);
		if (student) {
			resolve(student);
		} else {
			reject("Error creating student");
		}
	});
}
export function update(req) {
	return new Promise(async (resolve, reject) => {
		const { body, query } = req;
		if (!body.name && !body.class_room_id) return reject("data is required");
		if (!query.id) return reject("id is required");

		const studentFound = await filter(studentTable.tableName, {
			id: query.id,
		});

		if (!studentFound) return reject("Student not found");

		const student = { ...studentFound[0] };
		if (body.name) student.name = body.name;
		if (body.class_room_id) student.class_room_id = body.class_room_id;

		const studentUpdated = await Model.update(student, query.id);
		if (studentUpdated) {
			resolve(student);
		} else {
			reject("Error updating student");
		}
	});
}
export function Delete(req) {
	return new Promise(async (resolve, reject) => {
		const { params } = req;
		if (!params.id) return reject("id is required");

		const studentFound = await Model.getOne(params.id);

		if (!studentFound) return reject("Student not found");

		const studentDeleted = await Model.Delete(params.id);

		if (studentDeleted) {
			resolve(studentFound);
		} else {
			reject("Error deleting student");
		}
	});
}
