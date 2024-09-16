import express from "express";
import studentsRouter from "./routers/students-router";
import groupsRouter from "./routers/groups-router";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/students", studentsRouter);
app.use("/groups", groupsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
