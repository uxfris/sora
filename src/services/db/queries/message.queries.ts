import { UIMessage } from "ai";
import { prisma } from "../client";
import { Prisma } from "@/generated/prisma/client";

export async function createMessage({
  externalId,
  parts,
  chatId,
  role,
}: {
  chatId: string;
  externalId: string;
  parts: UIMessage["parts"];
  role: string;
}) {
  await prisma.message.create({
    data: {
      chatId,
      externalId: externalId,
      attachments: [],
      parts: parts as Prisma.InputJsonValue,
      role: role,
    },
  });
}

export async function createManyMessage({
  data,
}: {
  data: Prisma.MessageCreateManyInput[];
}) {
  await prisma.message.createMany({
    data: data,
  });
}
