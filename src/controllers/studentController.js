import Model from "../models/studentModel";

export function getAll() {
	return new Promise(async (resolve, reject) => {
		const students = await Model.getAll();
		if (students.length > 0) {
			resolve(students);
		} else {
			reject("Not students found");
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

		const studentFound = await Model.getOne(query.id);

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
