import { TaskList } from "@/components/task/TaskList";
import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-[#202020] shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl h-full py-5 mt-12 px-5 max-w-[1280px] mx-auto">
      <h1 className="text-[30px] text-primary-200 text-center font-bold underline underline-offset-4">
        Lista de Tareas
      </h1>
      <TaskList />
    </div>
  );
}
