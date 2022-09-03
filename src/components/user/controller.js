import { getAll } from "./model";

export function getUsers() {
	return new Promise(async (resolve, reject) => {
		const users = await getAll();
		if (users) return resolve(users);
		reject("No users found");
	});
}
