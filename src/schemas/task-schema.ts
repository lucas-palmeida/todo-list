import Joi from "joi";
import { CreateTask, Task } from "@/protocols/task-protocol";

export const createTaskSchema = Joi.object<CreateTask>({
    description: Joi.string().min(1).max(50).required(),
});

export const taskSchema = Joi.object<Task>({
    id: Joi.number().required(),
    description: Joi.string().min(1).max(50).required(),
    isDone: Joi.boolean(),
    createdAt: Joi.date(),
});
