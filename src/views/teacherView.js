import express from "express";
import { getUsers } from "../controllers/teacherController";
import { success, error } from "../../utils/response";

const router = express.Router();
router.get("/", (req, res) => {
	getUsers()
		.then(users => success(res, users, 202))
		.catch(err => error(res, err, 404));
});

router.get("/admin", (req, res) => {
	res.send("Hello Admin!");
});

export default router;
