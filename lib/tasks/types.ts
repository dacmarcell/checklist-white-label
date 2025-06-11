export type Task = {
  id: number;
  name: string;
  description: string;
  status: TaskStatus;
};

export type TaskStatus = "pendente" | "em_andamento" | "finalizada";
