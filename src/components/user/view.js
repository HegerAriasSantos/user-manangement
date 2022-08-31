import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello World!");
});
router.get("/admin", (req, res) => {
	res.send("Hello Admin!");
});

export default router;
