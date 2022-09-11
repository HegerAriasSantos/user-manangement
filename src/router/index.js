import studentRouter from "../views/studentView";
import teacherRouter from "../views/teacherView";
import sessionRouter from "../views/sessionView";
import subjectRouter from "../views/subjectView";

export default (app) => {
  app.use("/student", studentRouter);
  app.use("/teacher", teacherRouter);
  app.use("/session", sessionRouter);
  app.use("/subject", subjectRouter);
};
