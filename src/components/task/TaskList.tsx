"use client";

import { useEffect, useState } from "react";
import { TaskCard } from "./TaskCard";
import { Task } from "@/types/task";

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      } else {
        console.error("Failed to fetch tasks");
      }
    };

    fetchTasks();
  }, []);

  const handleCardAction = (action: "edit" | "delete", id: string) => {
    if (action === "delete") {
      deleteCard(id);
    } else if (action === "edit") {
      updateCard(id);
    }
  };

  const deleteCard = (id: string) => {
    setTasks(tasks.filter((e) => e.id !== id));
    alert("Task deleted");
  };

  const updateCard = (id: string) => {};

  return (
    <div className="flex flex-col gap-y-4 mt-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          onActionCard={(action: "edit" | "delete") =>
            handleCardAction(action, task.id)
          }
        />
      ))}
    </div>
  );
};
