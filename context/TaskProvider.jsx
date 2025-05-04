import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          description,
          id: tasks.length + 1,
        },
      ];
    });
  };

  const toggleTaskCompleted = (id) => {
    const findTask = tasks.find((task) => task.id === id);
    if (findTask) {
      setTasks((prevTask) => {
        return prevTask.map((pt) => {
          if (findTask.id === pt.id) {
            pt.completed = !pt.completed;
          }
          return pt;
        });
      });
    }
  };

  const deleteTasks = (id) => {
    const findTask = tasks.find((task) => task.id === id);
    if (findTask) {
      setTasks((prevTask) => {
        return prevTask.filter((pt) => pt.id !== findTask.id);
      });
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTaskCompleted,
        deleteTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
