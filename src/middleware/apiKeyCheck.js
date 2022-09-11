import { verify } from "jsonwebtoken";
import { error } from "../utils/response";

const verifyToken = (req, res, next) => {
	const { token } = req.headers;

	if (!token) {
		return error(res, "Token is required", 401);
	}
	try {
		const decoded = verify(token, process.env.TOKEN_KEY);
		console.log(decoded);
	} catch (err) {
		return error(res, "Invalid Token", 401);
	}
	return next();
};

export default verifyToken;
