// CREATE
export const addTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, completed } = req.body;
    const user = await User.findById(id);
    const newTodo = new Todo({
      userId: id,
      task,
      completed,
    });
    const savedTodo = await newTodo.save();
    user.todos.push(savedTodo);
    res.status(201).json(user.todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
export const getTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const todos = await Todo.find({ userId: id });
    res.status(200).json(todos);
  } catch (error) {
    console.log(id);
    res.send({
      message:
        error.message + `something is wrong with the id: ${id} in req params`,
    });
  }
};

// UPDATE
export const updateTodo = async (req, res) => {
  try {
    const { id, todoId } = req.params;
    const { task, completed } = req.body;
    // const user = await User.findById(id);
    const todo = await Todo.findOneAndUpdate(
      { userId: id, _id: todoId },
      { userId: id, task, completed },
      {
        new: true,
        runValidators: true,
        overwrite: true,
      }
    );
    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// DELETE
export const deleteTodo = async (req, res) => {
  try {
    const { id, todoId } = req.params;
    await Todo.deleteOne({ userId: id, _id: todoId });
    const todos = await Todo.find({ userId: id });
    await User.findOneAndUpdate({_id: id}, {todos})
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
