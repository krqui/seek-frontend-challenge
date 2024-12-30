"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { TaskCard } from "./TaskCard";
import { Task } from "@/types/task";
import { FormTask } from "../form/FormTask";

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<Task>({
    title: "",
    description: "",
    status: "pending",
    id: "",
    isSelected: false,
  });

  const [isFormEditing, setisFormEditing] = useState<boolean>(false);

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

  const cleanCurrentTask = () => {
    setCurrentTask({
      title: "",
      description: "",
      status: "pending",
      isSelected: false,
      id: "",
    });
  };

  const handleNewButton = () => {
    setisFormEditing(false);
    const tasksFormatted = tasks.map((e) => {
      return {
        ...e,
        isSelected: false,
      };
    });
    setTasks(tasksFormatted);
    cleanCurrentTask();
  };

  const handleCardAction = (action: "edit" | "delete", id: string) => {
    if (action === "delete") {
      deleteTask(id);
    } else if (action === "edit") {
      const taskSelected = tasks.find((e) => e.id === id);
      const updatedTasks = tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isSelected: true,
            }
          : {
              ...task,
              isSelected: false,
            }
      );
      setTasks(updatedTasks);

      if (taskSelected) {
        setCurrentTask({ ...taskSelected });
      }
      setisFormEditing(true);
    }
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((e) => e.id !== id));
    alert("Task deleted");
  };

  const createTask = (e: {
    title: string;
    description: string;
    status: string;
  }) => {
    setTasks((prev) => [
      ...prev,
      {
        title: e.title,
        description: e.description,
        status: e.status,
        isSelected: false,
        id: `id-${e.title}`,
      },
    ]);
    cleanCurrentTask();
  };

  const updateTask = (e: {
    title: string;
    description: string;
    status: string;
  }) => {
    if (!currentTask.id) return;

    const updatedTasks = tasks.map((task) =>
      task.id === currentTask.id
        ? {
            ...task,
            title: e.title,
            description: e.description,
            status: e.status,
            isSelected: false,
          }
        : task
    );

    setTasks(updatedTasks);
    setisFormEditing(false);
    cleanCurrentTask();
  };

  const handleSend = (e: {
    title: string;
    description: string;
    status: string;
  }) => {
    if (isFormEditing) {
      updateTask(e);
    } else {
      createTask(e);
    }
  };
  return (
    <div className="flex flex-col gap-y-5">
      <div className="relative max-h-[320px] mt-4 h-full overflow-y-auto scrollbar-custom">
        <div className="flex flex-col gap-y-4 mr-1">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
              focused={task.isSelected}
              onActionCard={(action: "edit" | "delete") =>
                handleCardAction(action, task.id)
              }
            />
          ))}
        </div>
      </div>
      <div className="flex w-full justify-between">
        <p className="text-orange-500 font-bold text-[28px]">
          {isFormEditing ? "Editando la tarea ..." : "Crear nueva tarea:"}
        </p>

        <button
          type="button"
          className="bg-orange-500 items-center flex gap-x-2 w-max px-4 py-1.5 rounded-xl text-[20px]"
          onClick={() => handleNewButton()}
        >
          <PlusIcon className="h-6 w-6" />
          <span>Nuevo</span>
        </button>
      </div>

      <FormTask
        title={currentTask.title}
        description={currentTask.description}
        status={currentTask.status}
        isEditing={isFormEditing}
        onSend={(e) => handleSend(e)}
      />
    </div>
  );
};
