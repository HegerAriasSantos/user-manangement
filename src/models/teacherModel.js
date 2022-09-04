const users = [];

/*
  promises status {
    pending: 0,
    resolved: 1,
    rejected: 2
  }
 */

export async function getAll() {
	const allUsers = users;
	if (allUsers) return allUsers;
	return [];
}
