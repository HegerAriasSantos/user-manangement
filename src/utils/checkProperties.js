export default (columns, query) => {
	const queries = Object.entries(query);
	const queriesWrong = [];
	queries.forEach(e => {
		if (!columns.hasOwnProperty(e[0])) {
			queriesWrong.push(e[0]);
		}
	});
	return queriesWrong;
};
