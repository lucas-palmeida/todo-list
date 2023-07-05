import { validateSchemaMiddleware } from "@/middlewares/validate-middleware";
import taskSchema from "@/schemas/task-schema";
import { Router } from "express";

const tasksRouter = Router();

tasksRouter.get("/health", (req: Request, res: Response) => {
    console.log("I'm OK");
    res.sendStatus(200);
});
tasksRouter.get("/tasks", (req: Request, res: Response) => {});
tasksRouter.post("/tasks", validateSchemaMiddleware(taskSchema), (req: Request, res: Response) => {});
tasksRouter.put("/tasks", (req: Request, res: Response) => {});
tasksRouter.delete("/tasks", (req: Request, res: Response) => {});

export default tasksRouter;