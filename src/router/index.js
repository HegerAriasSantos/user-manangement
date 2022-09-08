import studentRouter from "../views/studentView";
import teacherRouter from "../views/teacherView";
import daysRouter from "../views/daysView";
import sessionRouter from "../views/sessionView";

export default (app) => {
  app.use("/student", studentRouter);
  app.use("/teacher", teacherRouter);
  app.use("/days", daysRouter);
  app.use("/session", sessionRouter);
};
