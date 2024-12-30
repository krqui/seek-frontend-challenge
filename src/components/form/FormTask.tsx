"use client";

import { FormEvent, useEffect, useState } from "react";
import MainInput from "@/components/main/MainInput";
import { MainOption } from "@/components/main/MainOption";

interface IFormTask {
  title?: string;
  description?: string;
  status?: string;
  isEditing?: boolean;
  onSend: (form: {
    title: string;
    description: string;
    status: string;
  }) => void;
}

export const FormTask = ({
  title,
  description,
  status,
  isEditing,
  onSend,
}: IFormTask) => {
  const [form, setForm] = useState<{
    title: string;
    description: string;
    status: string;
  }>({
    title: title ?? "",
    description: description ?? "",
    status: status ?? "pending",
  });

  const [edit, isEdit] = useState<boolean>(isEditing ?? false);

  // Synchronize props with local state
  useEffect(() => {
    setForm({
      title: title ?? "",
      description: description ?? "",
      status: status ?? "pending",
    });
  }, [title, description, status]);

  useEffect(() => {
    isEdit(isEditing ?? false);
  }, [isEditing]);

  const statusList: {
    option: string;
    text: string;
  }[] = [
    {
      option: "pending",
      text: "Por hacer",
    },
    {
      option: "inProgress",
      text: `En progreso`,
    },
    {
      option: "completed",
      text: `Completada`,
    },
  ];

  const handleTitleChange = (value: string) => {
    setForm((prev) => ({ ...prev, title: value }));
  };

  const handleDescriptionChange = (value: string) => {
    setForm((prev) => ({ ...prev, description: value }));
  };

  const handleSetOption = (value: string) => {
    setForm((prev) => ({ ...prev, status: value }));
  };

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    onSend(form);
    setTimeout(() => {
      setForm({
        title: "",
        description: "",
        status: "pending",
      });
    }, 800);
  };

  return (
    <div>
      <form
        id="loginForm"
        className="w-full rounded-[11px] border-2 border-solid border-primary-200 bg-black px-8 py-7"
        onSubmit={submitForm}
      >
        <div className="flex flex-col gap-y-5">
          <MainInput
            modelValue={form.title}
            name="task_title"
            type="text"
            onUpdateModelValue={handleTitleChange}
            placeholder="Insertar el título ..."
            inputClass="bg-transparent border-t-0 border-x-0 border-b-[1.2px] rounded-none outline-none focus:border-primary-400 py-2 text-[18px] !pl-1"
            className="h-full"
          />
          <MainInput
            modelValue={form.description}
            name="task_description"
            type="text"
            onUpdateModelValue={handleDescriptionChange}
            placeholder="Insertar la descripción"
            inputClass="bg-transparent border-t-0 border-x-0 border-b-[1.2px] rounded-none outline-none focus:border-primary-400 py-2 text-[18px] !pl-1"
            className="h-full"
          />
          <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4">
            {statusList.map((e) => (
              <MainOption
                key={e.option}
                current={form.status === e.option}
                value={e.option}
                text={e.text}
                setOption={handleSetOption}
              />
            ))}
          </div>

          <button className="bg-orange-500 text-white font-medium text-[20px] px-4 py-2 rounded-xl">
            {edit ? "Guardar cambios" : "Crear tarea"}
          </button>
        </div>
      </form>
    </div>
  );
};
