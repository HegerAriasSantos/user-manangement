import express from "express";
import {
	getAll,
	getOne,
	create,
	update,
	remove,
} from "../controllers/studentController";
import { success, error } from "../utils/response";
const router = express.Router();

router.get("/", (req, res) => {
	getAll()
		.then(users => success(res, users, 200))
		.catch(err => error(res, err, 404));
});
