// routes/app.ts
export const appRoutes = {
  signin: "/sign-in",
  signup: "/sign-up",
  home: "/",
  search: "/search",
  chat: {
    root: "/chat",
    detail: (id: string) => `/chat/${id}`,
  },
  notebook: {
    create: "/notebooks/create",
    view: "/notebooks/view",
    detail: (id: string) => `/notebooks/${id}`,
  },
};
