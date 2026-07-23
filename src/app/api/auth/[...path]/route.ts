import { auth } from "@/services/auth/server";

export const { GET, POST } = auth.handler();
