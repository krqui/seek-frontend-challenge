"use client";

import { Task } from "@/types/task";
import { MainDropdownMenu } from "../main/MainDropdownMenu";
import { useEffect, useState } from "react";

export const TaskCard: React.FC<
  Task & {
    onActionCard: (action: "edit" | "delete") => void;
    focused?: boolean;
  }
> = ({ title, description, status, onActionCard, focused }) => {
  const handleAction = (action: "edit" | "delete") => {
    onActionCard(action);
  };

  const [isFocused, setIsFocused] = useState<boolean>(focused ?? false);

  useEffect(() => {
    setIsFocused(focused ?? false);
  }, [focused]);

  return (
    <div
      className={`${
        isFocused ? "border-orange-500" : "border-primary-200"
      } flex relative w-full border-2 bg-black flex-col gap-y-2.5 lg:gap-y-0 lg:flex-row justify-between px-3 rounded-xl py-2.5`}
    >
      <div className="flex flex-col gap-y-1.5">
        <p className="text-[22px] font-bold text-gray-300 underline underline-offset-4">
          {title}
        </p>
        <p className="text-[18px] font-medium text-gray-300">{description}</p>
      </div>
      <div className="flex justify-center items-center gap-x-5 ">
        <div
          className={`px-4 py-1 rounded-xl w-max pointer-events-none ${
            status === "completed"
              ? "bg-[#1bb63c]"
              : status === "inProgress"
              ? "bg-[#ffba18]"
              : "bg-red-500"
          }`}
        >
          <p className="text-[18px] font-semibold text-black">
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
