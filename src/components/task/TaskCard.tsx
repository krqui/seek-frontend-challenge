"use client";

import { Task } from "@/types/task";
import { MainDropdownMenu } from "../main/MainDropdownMenu";

export const TaskCard: React.FC<
  Task & { onActionCard: (action: "edit" | "delete") => void }
> = ({ title, description, status, onActionCard }) => {
  const handleAction = (action: "edit" | "delete") => {
    onActionCard(action);
  };

  return (
    <div className="flex relative w-full border-2 border-gray-100 bg-white justify-between px-3 rounded-xl py-2">
      <div className="flex flex-col">
        <p className="text-[22px] font-bold text-black underline underline-offset-2">
          {title}
        </p>
        <p className="text-[18px] font-medium text-black">{description}</p>
      </div>
      <div className="flex justify-center items-center gap-x-5">
        <div
          className={`px-4 py-1 rounded-xl w-max ${
            status === "completed"
              ? "bg-[#1bb63c]"
              : status === "inProgress"
              ? "bg-[#ffba18]"
              : "bg-red-500"
          }`}
        >
          <p className="text-[18px] font-semibold text-white">
            {status === "inProgress"
              ? "En progreso"
              : status === "completed"
              ? "Completada"
              : "Por hacer"}
          </p>
        </div>
        <MainDropdownMenu onAction={handleAction} />
      </div>
    </div>
  );
};
