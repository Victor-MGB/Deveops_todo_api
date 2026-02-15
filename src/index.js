const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todo");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRouter);

app.get("/health", (req, res) => res.json({ status: "ok good vic i love you" }));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

