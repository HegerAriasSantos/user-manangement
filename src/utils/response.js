export const success = function (res, data, status, token = null) {
	if (token) res.setHeader("Token", token);

	res.setHeader("Content-Type", "application/json");
	res.status(status).send({
		body: data,
	});
};

export const error = function (res, data, status) {
	res.setHeader("Content-Type", "application/json");
	res.status(status).send({
		error: data,
	});
};
