// routes/app.ts
export const appRoutes = {
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
