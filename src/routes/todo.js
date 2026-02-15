const express = require("express");
const router = express.Router();

let todos = [];
let idCounter = 1;

router.get("/", (req, res) => {
    res.json({ todos });
});

router.get("/:id", (req, res) => {
    const todo = todos.find(t => t.id === Number(req.params.id));
    if (!todo) return res.status(404).json({ error: "Not Found" });

    res.json(todo);
});

router.post("/", (req, res) => {
    const { title, completed = false } = req.body;
    if (!title) return res.status(400).json({ error: "Title Required" });

    const newTodo = { id: idCounter++, title, completed };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

router.put("/:id", (req, res) => {
    const todo = todos.find(t => t.id === Number(req.params.id));
    if (!todo) return res.status(404).json({ error: "Not found" });

    todo.completed = !todo.completed;
    res.json(todo);
});

router.delete("/:id", (req, res) => {
    const index = todos.findIndex(t => t.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Not found" });

    todos.splice(index, 1);
    res.status(200).send();
});

module.exports = router;
