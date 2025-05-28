import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Task } from "../interfaces/context";
import { FormContext } from "../context/FormContext";

const Update = () => {
  const { id } = useParams();
  const context = useContext(FormContext);

  const [editTask, setEditTask] = useState({
    title: "",
    description: "",
    due_date: "",
  });

  
  const handleUpdate = context?.handleUpdate ?? (() => {});

  useEffect(() => {
    const tasks = context?.tasks ?? [];
    const currentTask = tasks.find((task: Task) => task.id === Number(id));
    if (currentTask) {
      setEditTask({
        title: currentTask.title,
        description: currentTask.description,
        due_date: currentTask.due_date.split("T")[0],
      });
    }
  }, [id, context]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdate(editTask, Number(id));
  };

  return (
    <div>
      <h2 className="pt-12 pl-8 text-2xl text-rose-400 font-semibold">
        Update Task
      </h2>
      <div className="bg-slate-700 h-0.5 mb-12 mt-4"></div>

      <form
        className="flex flex-col mt-12 bg-slate-800 mx-10 p-4 max-w-lg"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={editTask.title}
          onChange={handleChange}
          className="border mt-2 mb-4 rounded p-2 border-slate-600 focus:outline-0 "
        />

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={editTask.description}
          onChange={handleChange}
          className="border mt-2 mb-4 rounded p-2 border-slate-600 focus:outline-0"
        />

        <label htmlFor="date">Due Date: </label>
        <input
          type="date"
          name="due_date"
          id="date"
          value={editTask.due_date}
          onChange={handleChange}
          className="border mt-2 mb-4 rounded p-2 border-slate-600 focus:outline-0 "
        />
        <div>
          <button
            className="bg-emerald-700 py-2 px-4 my-2 rounded text-white"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
