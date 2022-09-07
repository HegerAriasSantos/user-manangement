import studentRouter from "../views/studentView";
import teacherRouter from "../views/teacherView"

export default app => {
	app.use("/student", studentRouter);
	app.use("/teacher", teacherRouter);
};
