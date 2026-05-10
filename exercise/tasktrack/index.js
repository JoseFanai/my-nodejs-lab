const express = require('express');
const app = express();

const todosArr = [
    {
        id: 1,
        task: "Create all APIs for Project 01",
        tags: ["NodeJS", "JavaScript"],
        status: "Todo"
    },
    {
        id: 2,
        task: "Create APIs for list of all todos",
        tags: ["NodeJS"],
        status: "Doing"
    },
    {
        id: 3,
        task: "Plan Project 01",
        tags: ["JavaScript"],
        status: "Done"
    }
];

app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is Task Track API project!");
});

app.get("/todos", (req, res) => {
    res.send(todosArr);
})

app.get("/todos/:id", (req, res) => {
    const todoId = parseInt(req.params.id);

    const todo = todosArr.find((t) => t.id === todoId);

    res.send(todo);
});

app.post('/todos', (req, res) => {
    const todo = req.body;

    const newTodo = {
        id: todosArr[todosArr.length - 1].id + 1,
        task: todo.task,
        tags: todo.tags,
        status: todo.status
    }
    todosArr.push(newTodo);
    res.send(newTodo);
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})