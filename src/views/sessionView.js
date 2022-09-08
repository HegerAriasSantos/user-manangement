import express from "express";
import {
  getAll,
  create,
  update,
  Delete,
} from "../controllers/sessionController";
import { success, error } from "../utils/response";

const router = express.Router();

router.get("/", (req, res) => {
  getAll()
    .then((session) => success(res, session, 200))
    .catch((err) => error(res, err, 404));
});

router.post("/", (req, res) => {
  create(req.body)
    .then((session) => success(res, session, 201))
    .catch((err) => err(res, err, 500));
});

router.patch("/:id", (req, res) => {
  update(req)
    .then((session) => success(res, session, 201))
    .catch((err) => error(res, err, 500));
});
router.delete("/:id", (req, res) => {
  Delete(req)
    .then((session) => success(res, session, 201))
    .catch((err) => error(res, err, 500));
});

export default router;
