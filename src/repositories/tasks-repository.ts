import connection from "@/database/database";
import { CreateTask, Task } from "@/protocols/task-protocol";

async function getTasks() {
    return connection.query("SELECT * FROM tasks");
}

async function findTaskById(id: number) {
    return connection.query<Task>(`SELECT * FROM tasks WHERE id = $1`, [id]);
}

async function createTask(task: CreateTask) {
    return connection.query(`INSERT INTO tasks (description) VALUES ($1)`, [task.description]);
}

async function updateTask(task: Task) {
    return connection.query(`UPDATE tasks SET description = $1, is_done = $2 WHERE id = $3`, [task.description, task.isDone, task.id]);
}

async function deleteTask(id: number) {
    return connection.query(`DELETE FROM tasks WHERE id = $1`, [id]);
}

const taskRepository = {
    getTasks,
    findTaskById,
    createTask,
    updateTask,
    deleteTask,
}

export default taskRepository;