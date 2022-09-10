import express from "express";
import {
	get,
	create,
	update,
	Delete,
	getOne,
} from "../controllers/teacherController";
import { success, error } from "../utils/response";

const router = express.Router();
router.get("/", (req, res) => {
	get(req)
		.then(data => success(res, data, 200))
		.catch(err => error(res, err.error, err.code));
});
router.post("/", (req, res) => {
	create(req.body)
		.then(data => success(res, data, 201))
		.catch(err => error(res, err, 500));
});

router.patch("/", (req, res) => {
	update(req)
		.then(data => success(res, data, 201))
		.catch(err => error(res, err, 500));
});
router.delete("/:id", (req, res) => {
	Delete(req)
		.then(data => success(res, data, 204))
		.catch(err => error(res, err, 500));
});

router.get("/:id", (req, res) => {
	getOne(req)
		.then(data => success(res, data, 200))
		.catch(err => error(res, err, 500));
});

export default router;
