const Todo = require("../model/todo");

exports.getIndex = async (req, res) => {
  const completed = await Todo.countDocuments({ completed: true });
  const todoList = await Todo.find();
  res.render("index", {
    pageTitle: "To do list",
    todoList,
    completed,
    notCompleted: todoList.length - completed,
  });
};
