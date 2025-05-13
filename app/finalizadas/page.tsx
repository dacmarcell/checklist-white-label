"use client";

import { fetchTasks } from "@/lib/tasks";
import { useEffect, useState } from "react";

export default function Finalizadas() {
  const [tasks, setTasks] = useState<{ name: string }[]>([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Tarefas Finalizadas</h1>
      <p className="text-lg">Aqui estão as tarefas que você finalizou.</p>
      {tasks.map((task) => task.name)}
    </div>
  );
}
