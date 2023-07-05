import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.get("/health", (req, res) => {
    console.log("I'm OK");
    res.sendStatus(200);
});
app.get("/tasks", (req, res) => {});
app.post("/tasks", (req, res) => {});
app.put("/tasks", (req, res) => {});
app.delete("/tasks", (req, res) => {});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server is up and running on port ${PORT}`);
});