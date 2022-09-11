import Model from "../models/subjectModel";
import subjectTable from "../entities/subject";
import checkProperties from "../utils/checkProperties";
import { filter } from "../models/filter";

export function get(req) {
	return new Promise(async (resolve, reject) => {
		const { query } = req;

		const wrongQuery = checkProperties(subjectTable.columns, query);
		if (wrongQuery.length > 0) {
			return reject({
				error: {
					message: "Theses queries are wrong",
					wrongQuery,
				},
				code: 400,
			});
		}

		const subject = await filter(subjectTable.tableName, query);
		if (subject.length > 0) {
			resolve(subject);
		} else {
			reject({
				error: {
					message: "Subject not found",
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

		const subject = {
			name: body.name,
		};
		const subjectCreated = await Model.create(subject);
		if (subjectCreated) {
			resolve(subject);
		} else {
			reject(" Error while creating a subject");
		}
	});
}

export function update(req) {
	return new Promise(async (resolve, reject) => {
		const { body, params } = req;
		if (!body.name) {
			return reject("Name is required");
		}
		if (!params.id && !body.id) {
			return reject("id is required");
		}

		const subjectFound = await Model.getOne(params.id);

		if (!subjectFound) return reject("subject not Found");

		const subject = { ...subjectFound[0] };
		if (body.name) {
			subject.name = body.name;
		}

		const subjectUpdated = await Model.update(subject, params.id);
		if (subjectUpdated) {
			resolve(subject);
		} else {
			reject("Error updating subject");
		}
	});
}

export function Delete(req) {
	return new Promise(async (resolve, reject) => {
		const { params } = req;
		if (!params.id) return reject("id is required");

		const subjectFound = await Model.getOne(params.id);

		if (!subjectFound) return reject("subject not found");

		const subjectDeleted = await Model.Delete(params.id);

		if (subjectDeleted) {
			resolve(subjectFound);
		} else {
			reject("Error deleting subject");
		}
	});
}

export function getOne(req) {
	return new Promise(async (resolve, reject) => {
		const { params, query } = req;
		const subject = await Model.getOne(params.id);

		if (subject) {
			resolve(subject);
		} else {
			reject("Not subject founds ");
		}
	});
}
