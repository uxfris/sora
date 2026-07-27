"use server";

import { auth } from "@/services/auth/server";
import { prisma } from "@/services/db/client";
import { redirect } from "next/navigation";

export async function signInWithEmail(
  _prevState: { error: string } | null,
  formData: FormData,
) {
  const { data, error } = await auth.signIn.email({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    return { error: error.message || "Failed to sign in. Try again" };
  }

  await prisma.user.create({
    data: {
      id: data.user.id,
    },
  });

  redirect("/");
}
