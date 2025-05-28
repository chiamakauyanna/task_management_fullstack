import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Create = () => {
  const context = useContext(FormContext);

  if (!context) {
    return <p>Loading context...</p>;
  }
  const { newTask, handleChange, handleCreateTask } = context;

  return (
    <div>
      <h2 className="pt-12 pl-8 text-2xl text-rose-400 font-semibold">
        Create Task
      </h2>
      <div className="bg-slate-700 h-0.5 mb-12 mt-4"></div>

      <form
        className="flex flex-col mt-12 bg-slate-800 mx-10 p-4 max-w-lg"
        onSubmit={handleCreateTask}
      >
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={newTask.title}
          onChange={handleChange}
          className="border mt-2 mb-4 rounded p-2 border-slate-600 focus:outline-0 "
          required
        />

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={newTask.description}
          onChange={handleChange}
          className="border mt-2 mb-4 rounded p-2 border-slate-600 focus:outline-0"
        />

        <label htmlFor="date">Due Date: </label>
        <input
          type="date"
          name="due_date"
          id="date"
          value={newTask.due_date}
          onChange={handleChange}
          className="border mt-2 mb-4 rounded p-2 border-slate-600 focus:outline-0 "
          required
        />
        <div>
          <button
            className="bg-emerald-700 py-2 px-4 my-2 rounded text-white"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
