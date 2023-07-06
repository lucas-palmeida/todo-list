import { Request, Response } from "express";
import taskService from "@/services/tasks-service";
import { CreateTask, Task } from "@/protocols/task-protocol";

async function getTasks(req: Request, res: Response) {
    try {
        const tasks = await taskService.getTasks();

        return res.status(200).send(tasks);
    } catch (error) {
        return res.status(500).send(error);
    }
};

async function createTask(req: Request, res: Response) {
    try {
        const task = req.body as CreateTask;
        
        await taskService.createTask(task);

        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error);
    }
};

async function updateTask(req: Request, res: Response) {
    try {
        const task = req.body as Task;

        await taskService.updateTask(task);

        return res.sendStatus(202);
    } catch (error) {
        if(error.type === "NotFound") return res.status(404).send(error.message);
        return res.status(500).send(error);
    }
};

async function deleteTask(req: Request, res: Response) {
    try {
        const id = req.params.id;

        await taskService.deleteTask(id);

        return res.sendStatus(202);
    } catch (error) {
        if(error.type === "NotFound") return res.status(404).send(error.message);
        return res.status(500).send(error);
    }
};

const taskController = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
};

export default taskController;