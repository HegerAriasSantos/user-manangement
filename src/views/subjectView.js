import express from "express";
import {
	get,
	create,
	update,
	Delete,
	getOne,
} from "../controllers/subjectController";
import { success, error } from "../utils/response";

const router = express.Router();

router.get("/", (req, res) => {
	get(req)
		.then(session => success(res, session, 200))
		.catch(err => error(res, err.error, err.code));
});

router.get("/", (req, res) => {
	getOne(req)
		.then(session => success(res, session, 200))
		.catch(err => error(res, err, 404));
});

router.post("/", (req, res) => {
	create(req.body)
		.then(session => success(res, session, 201))
		.catch(err => error(res, err, 500));
});

router.patch("/:id", (req, res) => {
	update(req)
		.then(session => success(res, session, 201))
		.catch(err => error(res, err, 500));
});
router.delete("/:id", (req, res) => {
	Delete(req)
		.then(session => success(res, session, 201))
		.catch(err => error(res, err, 500));
});

//filter
export default router;
