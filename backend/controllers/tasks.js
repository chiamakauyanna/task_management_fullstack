import con from "../db.js";

export const getTasks = async (req, res) => {
  const getQuery = "SELECT * FROM tasks";
  try {
    const result = await con.query(getQuery);
    res.json(result.rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch task", details: error.message });
  }
};

export const getTaskById = async (req, res) => {
  const id = req.params.id;
  const getQueryById = "SELECT * FROM tasks WHERE id=$1";

  try {
    const result = await con.query(getQueryById, [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Task not found" });
    }
    res.json(result.rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch task", details: error.message });
  }
};

export const createTask = async (req, res) => {
  const { title, description, due_date } = req.body;

  if (!title || !description || !due_date) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const insertQuery =
    "INSERT INTO tasks (title, description, due_date) VALUES ($1, $2, $3)";

  try {
    await con.query(insertQuery, [title, description, due_date]);
    res.status(201).json({ message: "Task added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create task", details: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, due_date } = req.body;

  if (!title || !description || !due_date) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const updateQuery =
    "UPDATE tasks SET title=$1, description=$2, due_date=$3 WHERE id=$4";

  try {
    const result = await con.query(updateQuery, [
      title,
      description,
      due_date,
      id,
    ]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update task", details: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  const deleteQueryById = "DELETE FROM tasks WHERE id=$1";

  try {
    const result = await con.query(deleteQueryById, [id]);
    if (result.rowCount === 0) {
      return res
        .status(404)
        .json({ error: "Task not found or already deleted" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete task", details: error.message });
  }
};
