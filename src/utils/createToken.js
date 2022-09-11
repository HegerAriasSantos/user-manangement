import Jwt from "jsonwebtoken";
import { error, success } from "./response";

export default (req, res) => {
	const obj = {
		valid: true,
		message: "Token is valid",
	};
	try {
		const token = Jwt.sign(obj, process.env.TOKEN_KEY, {
			expiresIn: "1h",
		});
		return success(res, token, 200);
	} catch (err) {
		return error(res, "Cannot create token", 401);
	}
};
