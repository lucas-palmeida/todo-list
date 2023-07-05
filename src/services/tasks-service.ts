import taskRepository from "@/repositories/tasks-repository";

// tipar o retorno da promise
async function getTasks() {
    const tasks = await taskRepository.getTasks();

    return tasks;
}

const taskService = {
    getTasks,
}

export default taskService;