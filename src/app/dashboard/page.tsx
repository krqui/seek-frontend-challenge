import { TaskList } from "@/components/task/TaskList";
import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-[#c73838] shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl h-full py-5 mt-12 px-5 max-w-[1280px] mx-auto">
      <h1 className="text-[30px] text-center font-bold">Lista de Tareas</h1>
      <TaskList />
    </div>
  );
}
