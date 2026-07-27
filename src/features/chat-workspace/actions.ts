"use server";

import { auth } from "@/services/auth/server";
import { prisma } from "@/services/db/client";
import { nanoid } from "nanoid";

export async function createChat(firstMessage?: string) {
  const { data: session } = await auth.getSession();

  return { id: nanoid(), persisted: false as const };
  //   if (!session?.user) {
  //     return { id: nanoid(), persisted: false as const };
  //   }

  //   const chat = await prisma.chat.create({
  //     data: {
  //       userId: session.user.id,
  //       title: firstMessage?.slice(0, 80) ?? "New chat",
  //     },
  //   });
  //   return {
  //     id: chat.id,
  //     persisted: true as const,
  //   };
}
