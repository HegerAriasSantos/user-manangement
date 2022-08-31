import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router";
dotenv.config({ path: ".env" });

const app = express();
app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT || 4000);
router(app);

export default app;
