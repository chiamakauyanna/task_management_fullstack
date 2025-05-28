import axios from "axios";
import type { NewTask } from "../interfaces/context";
const BASE_URL = "http://localhost:5000/tasks";

export const retrieveTasks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("task not found", error);
  }
};

export const retrieveTasksById = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("task not found", error);
  }
};

export const createTask = async (taskData: NewTask) => {
  try {
    const response = await axios.post(BASE_URL, taskData);
    console.log("Task created sucessfully", response.data);
    return response.data;
  } catch (error) {
    console.error("task creation error", error);
  }
};

export const updateTask = async (updatedTask: NewTask, id: number) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error("task update error", error);
  }
};

export const deleteTask = async (id: number) => {
  try {
    const response = axios.delete(`${BASE_URL}/${id}`);
    return response;
  } catch (error) {
    console.error("task update error", error);
  }
};
