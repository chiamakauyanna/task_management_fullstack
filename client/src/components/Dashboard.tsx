import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { format } from "date-fns";
import FormCard from "./FormCard";
import { FormContext } from "../context/FormContext";

const Dashboard = () => {
  const context = useContext(FormContext);
  const [toast, setToast] = useState<string | null>(null);
  
  if (!context) {
    return <p className="text-center mt-20 text-gray-400">Loading tasks...</p>;
  }

  const { tasks, handleDelete } = context;

   const confirmDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      handleDelete(id);
      setToast("Task deleted successfully!");
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
  <div className="min-h-screen w-full max-w-6xl mx-auto px-6 py-14 relative">
    {/* Toast Notification */}
    {toast && (
      <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 animate-fadeIn">
        {toast}
      </div>
    )}

    {/* Header Section */}
    <header className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
      <h1 className="text-3xl font-extrabold text-amber-400 tracking-wide">
        Tasks Manager
      </h1>
      <Link
        to="/create"
        className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 transition-colors text-white px-5 py-3 rounded-full font-semibold shadow-md shadow-sky-700"
        aria-label="Create new task"
      >
        Create <FaPlus size={18} />
      </Link>
    </header>

    <hr className="border-slate-700 mb-10" />

    {/* Main Task Content */}
    <main className="flex flex-col gap-6">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-400 italic">No tasks created yet.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="bg-slate-800 rounded-lg p-5 flex justify-between items-center max-w-4xl shadow-md shadow-black/50"
          >
            <FormCard
              title={task.title}
              description={task.description}
              dueDate={format(new Date(task.due_date), "yyyy-MM-dd")}
            />

            {/* Button Section */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <button
                onClick={() => confirmDelete(task.id)}
                className="px-3 py-2 rounded-md bg-rose-600 hover:bg-rose-700 text-white font-medium transition-colors shadow-sm shadow-rose-800"
                aria-label={`Delete task ${task.title}`}
              >
                Delete
              </button>
              <Link
                to={`/update/${task.id}`}
                className="px-3 py-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors shadow-sm shadow-amber-800"
                aria-label={`Update task ${task.title}`}
              >
                Update
              </Link>
            </div>
          </div>
        ))
      )}
    </main>
  </div>
);

};

export default Dashboard;
