import { useContext } from "react";
import { TaskContext } from "../context/TaskProvider";

const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error(
      "Erro ao acessar o contexto de TaskContext, verificar se o comp está dentro do provider: TasksProvider"
    );
  return context;
};

export default useTaskContext;
