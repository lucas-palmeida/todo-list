import { CreateTask, Task } from "@/protocols/task-protocol";
import taskRepository from "@/repositories/tasks-repository";
import { QueryResult } from "pg";

async function getTasks(): Promise<Task[]> {
    const tasks = await taskRepository.getTasks();

    return tasks.rows;
}

async function createTask(task: CreateTask) {
    return taskRepository.createTask(task);
}

async function updateTask(task: Task) {
    const checkTask = taskRepository.findTaskById(task.id);

    if(!checkTask) throw {
        type: "NotFound",
        message: "Not found task with informed id",
    }

    return taskRepository.updateTask(task);
};

async function deleteTask(id: string) {
    const checkTask = await taskRepository.findTaskById(Number(id));

    if(checkTask.rowCount === 0) throw {
        type: "NotFound",
        message: "Not found task with informed id",
    }

    return taskRepository.deleteTask(Number(id));
};

const taskService = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
}

export default taskService;