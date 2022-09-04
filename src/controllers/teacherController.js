import { getAll } from "../models/model";

export function getAll() {
	return new Promise(async (resolve, reject) => {
		const users = await getAll();
		if (users) return resolve(users);
		reject("No users found");
	});
}
