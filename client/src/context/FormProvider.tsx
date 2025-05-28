import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ChildrenProp, NewTask, Task } from "../interfaces/context";

import {
  createTask,
  deleteTask,
  retrieveTasks,
  updateTask,
} from "../services/apiFetch";
import { FormContext } from "./FormContext";

const FormProvider = ({ children }: ChildrenProp) => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    due_date: "",
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await retrieveTasks();
      setTasks(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createTask(newTask);
      await fetchTasks();
      alert("Task created successfully");
      navigate("/");
    } catch (error) {
      console.error("failed to create task", error);
    }
  };

  const handleUpdate = async (updatedTask: NewTask, id: number) => {
    try {
      await updateTask(updatedTask, id);
      await fetchTasks();
      alert("Task updated successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);
      await fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormContext.Provider
      value={{
        handleChange,
        handleCreateTask,
        handleUpdate,
        handleDelete,
        newTask,
        tasks,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
