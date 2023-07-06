import taskController from "@/controllers/tasks-controller";
import { validateSchemaMiddleware } from "@/middlewares/validate-middleware";
import { taskSchema, createTaskSchema } from "@/schemas/task-schema";
import { Router } from "express";

const tasksRouter = Router();

tasksRouter.get("/health", () => console.log("I'm OK"));
tasksRouter.get("/tasks", taskController.getTasks);
tasksRouter.post("/tasks", validateSchemaMiddleware(createTaskSchema), taskController.createTask);
tasksRouter.put("/tasks", validateSchemaMiddleware(taskSchema), taskController.updateTask);
tasksRouter.delete("/tasks/:id", taskController.deleteTask);

export default tasksRouter;