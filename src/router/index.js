import studentRouter from "../views/studentView";

export default app => {
	app.use("/student", studentRouter);
};
