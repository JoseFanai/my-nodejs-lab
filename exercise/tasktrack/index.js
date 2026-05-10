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
    res.json(todosArr);
})

app.get("/todos/:id", (req, res) => {
    const todoId = parseInt(req.params.id);

    const todo = todosArr.find((t) => t.id === todoId);

    res.json(todo);
});

app.post('/todos', (req, res) => {
    const todo = req.body;

    if(!todo.task){
        return res.status(400).json({message: "Task is required!"});
    }
    if(!todo.tags){
        return res.status(400).json({message: "Tags are required!"});
    }
    if(!todo.status){
        return res.status(400).json({message: "status is required!"});
    }

    const newTodo = {
        id: todosArr[todosArr.length - 1].id + 1,
        task: todo.task,
        tags: todo.tags,
        status: todo.status
    }
    todosArr.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/todos/:id' , (req,res) => {
    const id = parseInt(req.params.id);
    const {task,tags,status} = req.body

    const todoIndex = todosArr.findIndex((t) => t.id === id);

    if(todoIndex === -1){
        return res.status(404).json({message: "Todo not found!"});
    }

    if(task){
        todosArr[todoIndex].task = task;
    }
    if(tags){
        todosArr[todoIndex].tags= tags;
    }
    if(status){
        todosArr[todoIndex].status = status;
    }
    res.json(todosArr[todoIndex]);

});

app.delete('/todos/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todosArr.findIndex((t) => t.id === id);

    if(todoIndex === -1){
        return res.status(404).json({message: "Todo not found!"});
    }

    todosArr.splice(todoIndex,1);
    res.json({message: "Todo deleted successfully!"});

})



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})