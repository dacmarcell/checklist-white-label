import type { Task } from "@/lib/tasks";
import { CheckCircle } from "lucide-react";

interface TaskProps {
  task: Task;
}

export default function Task({ task }: TaskProps) {
  return (
    <div
      key={task.id}
      className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-teal-500 hover:shadow-lg transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-center mb-3">
          <CheckCircle className="text-teal-500 mr-2" size={20} />
          <h3 className="font-semibold text-lg text-gray-800">{task.name}</h3>
        </div>

        <p className="text-gray-600 mb-4">{task.description}</p>
      </div>
    </div>
  );
}
