import type { ReactNode } from "react";

export interface ChildrenProp {
  children: ReactNode
} 

export interface NewTask {
  title: string;
  description: string;
  due_date: string;
}

export interface Task extends NewTask {
  id: number;
}

export interface FormContextType {
  tasks: Task[];
  newTask: NewTask;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCreateTask: (e: React.FormEvent<HTMLFormElement>) => void;
  handleUpdate: (updatedTask: NewTask, id: number) => void;
  handleDelete: (id: number) => void;
}
