"use client";

import { fetchFinishedTasks, type Task } from "@/lib/tasks";
import { useEffect, useState } from "react";
import TaskComponent from "@/components/Task";

export default function Finalizadas() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFinishedTasks()
      .then((data) => {
        setTasks(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar tarefas:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Tarefas Finalizadas</h1>
          <p className="text-teal-100 mt-2">
            Visualize todas as tarefas que você concluiu
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex-grow">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Carregando tarefas...</p>
          </div>
        ) : tasks.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg">
              Você ainda não possui tarefas finalizadas.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <TaskComponent key={task.id} task={task} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          Sistema de Gerenciamento de Tarefas &copy; 2025
        </div>
      </footer>
    </div>
  );
}
