const { mongoose } = require("./db");
const express = require("express");
const cors = require("cors");
const { checkJwt } = require("./util/middlewares");
const boardRouter = require("./routers/board.router");
const toDoListRouter = require("./routers/toDoList.router");
const toDoRouter = require("./routers/toDo.router");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/board", boardRouter);
app.use("/todolist", toDoListRouter);
app.use("/board/:boardId", toDoRouter);

app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!",
  });
});

module.exports = { mongoose, app };
