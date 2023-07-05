
import { Request, Response } from "express";
import taskService from "@/services/tasks-service";

async function getTasks(req: Request, res: Response) {
    try {
        const tasks = await taskService.getTasks();

        return res.status(200).send(tasks);
    } catch (error) {
        return res.status(500).send(error);
    }
};