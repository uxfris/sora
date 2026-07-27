import { prisma } from "../client";

export async function getChatWithMessages({ id }: { id: string }) {
  return await prisma.chat.findUnique({
    where: { id: id },
    include: {
      messages: {
        orderBy: { createdAt: "asc" },
      },
    },
  });
}

export async function upsertChat({
  id,
  userId,
  title,
}: {
  id: string;
  userId: string;
  title: string;
}) {
  await prisma.chat.upsert({
    where: { id },
    update: {},
    create: {
      id: id,
      userId: userId,
      title: title,
    },
  });
}
