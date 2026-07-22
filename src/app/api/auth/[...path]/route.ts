import { auth } from "@/src/services/auth/server";

export const { GET, POST } = auth.handler();
