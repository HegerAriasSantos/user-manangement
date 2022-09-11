import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router";
import verifyToken from "./middleware/apiKeyCheck";
import createToken from "./utils/createToken";
import swagger from "./swagger";
dotenv.config({ path: ".env" });
const app = express();
app.use(cors());
app.use(express.json());
app.get("/create-token", createToken);
swagger(app);
// app.use(verifyToken);
app.set("port", process.env.PORT || 4000);
router(app);

export default app;
