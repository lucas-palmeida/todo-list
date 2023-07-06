export type Task = {
    id: number;
    description: string;
    isDone: boolean;
    createdAt: Date;
};

export type CreateTask = Omit<Task, "id" | "isDone" | "createdAt">;