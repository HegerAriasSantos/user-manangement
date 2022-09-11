import Model from "../models/sessionModel";
import sessionTable from "../entities/session";
import checkProperties from "../utils/checkProperties";
import { filter } from "../models/filter";

export function get(req) {
	return new Promise(async (resolve, reject) => {
		const { query } = req;
		const queriesWrong = checkProperties(sessionTable.columns, query);
		if (queriesWrong.length >= 1) {
			return reject({
				error: {
					message: "Theses queries are wrong",
					queriesWrong,
				},
				code: 400,
			});
		}
		const sessions = filter(sessionTable.tableName, query);
		console.log(sessions);
		if (sessions.length > 0) {
			resolve(sessions);
		} else {
			reject("Sessions not found");
		}
	});
}

export function create(body) {
	return new Promise(async (resolve, reject) => {
		if (!body.hour_start) {
			return reject("Hour Start is required");
		}
		if (!body.hour_end) {
			return reject("Hour End is required");
		}

		const session = {
			hour_start: body.hour_start,
			hour_end: body.hour_end,
		};
		const sessionCreated = await Model.create(session);
		if (sessionCreated) {
			resolve(session);
		} else {
			reject(" Error while creating a Session");
		}
	});
}

export function update(req) {
	return new Promise(async (resolve, reject) => {
		const { body, query, params } = req;
		if (!body.hour_start && !body.hour_end) {
			return reject("Data is required");
		}
		if (!params.id && !body.id) {
			return reject("id is required");
		}

		const sessionFound = await Model.getOne(params.id);

		if (!sessionFound) return reject({ message: "Session not Found" });

		const session = { ...sessionFound[0] };
		if (body.hour_start) {
			session.hour_start = body.hour_start;
		}
		if (body.hour_end) {
			session.hour_end = body.hour_end;
		}

		const sessionUpdated = await Model.update(session, params.id);
		if (sessionUpdated) {
			resolve(session);
		} else {
			reject("Error updating session");
		}
	});
}

export function Delete(req) {
	return new Promise(async (resolve, reject) => {
		const { params } = req;
		if (!params.id) return reject("id is required");

		const sessionFound = await Model.getOne(params.id);

		if (!sessionFound) return reject("Session not found");

		const sessionDeleted = await Model.Delete(params.id);

		if (sessionDeleted) {
			resolve(sessionFound);
		} else {
			reject("Error deleting student");
		}
	});
}

export function getOne(req) {
	return new Promise(async (resolve, reject) => {
		const { params, query } = req;
		const session = await Model.getOne(params.id);

		if (session) {
			resolve(session);
		} else {
			reject("Not session founds ");
		}
	});
}

export function Filter(req) {
	return new Promise(async (resolve, reject) => {
		const { body, query, params } = req;

		const tableName = query => {
			return query.toString().split("/")[1];
		};

		const dataToFilter = await Model.filter(tableName(req.url), query);

		if (dataToFilter) {
			resolve(dataToFilter);
		} else {
			reject("Error filtering datas");
		}
	});
}
