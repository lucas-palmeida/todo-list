import connection from "@/database/database";

async function getTasks() {
    return connection.query("SELECT * FROM tasks");
}

const taskRepository = {
    getTasks,
}

export default taskRepository;