// routes/app.ts
export const appRoutes = {
  home: "/",
  history: "/history",
  chat: {
    root: "/chat",
    detail: (id: string) => `/chat/${id}`,
  },
};
