import { filter } from "../models/filter.js";
import Model from "../models/teacherModel.js";
import teacherTable from "../entities/teacher";
import checkProperties from "../utils/checkProperties.js";

export function get(req) {
	return new Promise(async (resolve, reject) => {
		const { query } = req;
		const queriesWrong = checkProperties(teacherTable.columns, query);
		if (queriesWrong.length >= 1) {
			return reject({
				error: {
					message: "Theses queries are wrong",
					queriesWrong,
				},
				code: 400,
			});
		}
		const teachers = await Model.findAll({
			where: query,
		});
		if (teachers) {
			resolve(teachers);
		} else {
			reject("not teacher found");
		}
	});
}

export function create(body) {
	return new Promise(async (resolve, reject) => {
		if (!body.name) {
			return reject("Name is required");
		}
		const teacherCreate = await Model.create({
			name: body.name,
		});

		if (teacherCreate) {
			resolve(teacherCreate.toJSON());
		} else {
			reject("Error creating student");
		}
	});
}
export function update(req) {
	return new Promise(async (resolve, reject) => {
		const { body, query } = req;

		if (!body.name) return reject("data is required");
		if (!query.id) return reject("id is required");

		const teacherUpdated = await Model.update(
			{ name: body.name },
			{ where: { id: query.id } },
		);
		const teacherFound = await Model.findOne({ where: { id: query.id } });

		if (teacherUpdated) {
			resolve(teacherFound);
		} else {
			reject("Error updating teacher");
		}
	});
}

export function Delete(req) {
	return new Promise(async (resolve, reject) => {
		const { params } = req;
		if (!params) {
			return reject("id is required");
		}
		const teacherDelete = await Model.update(
			{ date_deleted: Date.now().toString(), active: 0 },
			{
				where: {
					id: params.id,
				},
			},
		);
		console.log(teacherDelete);

		if (teacherDelete) {
			resolve(teacherDelete);
		} else {
			reject("Error deleting teacher");
		}
	});
}
