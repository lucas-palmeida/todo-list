import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import tasksRouter from "@/routers/tasks-router";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(tasksRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server is up and running on port ${PORT}`);
});

// npm i -D tsconfig-paths
// usar @/ para imports