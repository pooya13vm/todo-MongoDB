const Todo = require("../model/todo");

exports.addTodo = async (req, res) => {
  if (!req.body.todo) return res.redirect("/");
  try {
    await Todo.create({ text: req.body.todo });
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndRemove(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.completedTodo = async (req, res) => {
  try {
    const item = await Todo.findById(req.params.id);
    item.completed = true;
    await item.save();
    res.redirect("/");
  } catch (error) {
    (error) => console.log(error);
  }
};
