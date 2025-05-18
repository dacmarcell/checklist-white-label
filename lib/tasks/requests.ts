export const fetchFinishedTasks = async () => {
  const response = await fetch("/api/tasks/finished");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.message;
};
