import express from"express";
import { createTask, getTasks } from "../controller/task.controller.js";


const taskRouter = express.Router();
taskRouter.post("/create-task", createTask);
taskRouter.get("/get-tasks",getTasks);

export default taskRouter;