import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { TASKS_STORAGE_KEY } from "../utils";
export const TaskContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const tasksCarregadas = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
        const data = tasksCarregadas != null ? JSON.parse(tasksCarregadas) : [];
        setTasks(data);
        setIsLoaded(true);
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const storeData = async () => {
      try {
        const convertTojson = JSON.stringify(tasks);
        await AsyncStorage.setItem(TASKS_STORAGE_KEY, convertTojson);
      } catch (error) {
        console.error(error.message);
      }
    };
    if (isLoaded) storeData();
  }, [tasks]);

  const addTask = (description) => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          description,
          id: tasks.length + 1,
          completed: false,
        },
      ];
    });
  };

  const toggleTaskCompleted = (id) => {
    const findTask = tasks.find((task) => task.id === id);
    if (findTask) {
      setTasks((prevTask) => {
        return prevTask.map((pt) =>
          pt.id === findTask.id ? { ...pt, completed: !findTask.completed } : pt
        );
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
