// src/app/api/tasks/route.ts
import { Task } from "@/types/task";
import { NextResponse } from "next/server";

export async function GET() {
  const tasks: Task[] = [
    {
      id: "abcdefghijklmnp0",
      title: "Preparar el desayuno",
      description: "Preparar el desayuno para toda la familia",
      status: "inProgress",
    },
    {
      id: "abcdefghijklmnp1",
      title: "Comprar alimentos",
      description: "Ir al supermercado para comprar alimentos para la semana",
      status: "inProgress",
    },
    {
      id: "abcdefghijklmnp2",
      title: "Estudiar Next.js",
      description: "Repasar documentación y construir una aplicación básica",
      status: "completed",
    },
    {
      id: "abcdefghijklmnp3",
      title: "Hacer ejercicio",
      description: "Hacer 30 minutos de ejercicio en casa",
      status: "pending",
    },
    {
      id: "abcdefghijklmnp4",
      title: "Ir al cumpleaños de mi amigo",
      description:
        "Reunirme con mi grupo cercano de amigos y luego ir en grupo a la fiesta de cumpleaños",
      status: "pending",
    },
  ];

  return NextResponse.json(tasks);
}
