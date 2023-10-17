const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") }, // "/"
      { path: "home", component: () => import("pages/...?") },
      { path: "projects", component: () => import("pages/ProjectsPage.vue") }, // /projects
      {
        path: "project/:name",
        component: () => import("pages/ProjectPage.vue"),
      },

      {
        path: "article/:title",
        component: () => import("pages/ArticlePage.vue"),
      },
    ],
  },

  // Always leave this as last one,"
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
