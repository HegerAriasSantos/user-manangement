import express from "express";
import { get, create, update, Delete } from "../controllers/studentController";
import { success, error } from "../utils/response";

const router = express.Router();
/**
 * @swagger
 * /student:
 *  get:
 *   summary: Get all students
 *   description: Use to request all students
 *   produces:
 *   - application/json
 *
 *  responses:
 *   200:
 *    description: A successful response
 *    schema:
 *    type: json
 *
 *
 *
 */
router.get("/", (req, res) => {
	get(req)
		.then(users => success(res, users, 200))
		.catch(err => error(res, err.error, err.code));
});

router.post("/", (req, res) => {
	create(req.body)
		.then(user => success(res, user, 201))
		.catch(err => error(res, err, 500));
});

router.patch("/", (req, res) => {
	update(req)
		.then(user => success(res, user, 201))
		.catch(err => error(res, err, 500));
});
router.delete("/:id", (req, res) => {
	Delete(req)
		.then(user => success(res, user, 201))
		.catch(err => error(res, err, 500));
});
export default router;
