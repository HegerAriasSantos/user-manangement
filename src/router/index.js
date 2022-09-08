import studentRouter from "../views/studentView";
import teacherRouter from "../views/teacherView";
import sessionRouter from "../views/sessionView";

export default (app) => {
  app.use("/student", studentRouter);
  app.use("/teacher", teacherRouter);
  app.use("/session", sessionRouter);
};
