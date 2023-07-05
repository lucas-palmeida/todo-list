import Joi from "joi";
import { Task } from "@/protocols/task-protocol";

const taskSchema = Joi.object<Task>({
    id: Joi.number(),
    description: Joi.string().required(),
    isDone: Joi.boolean().required(),
    createdAt: Joi.date().required(),
});

export default taskSchema;