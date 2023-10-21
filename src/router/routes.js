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
      { path: "login", component: () => import("pages/LoginPage.vue") },
      { path: "signup", component: () => import("pages/SignupPage.vue") },
      { path: "test", component: () => import("pages/TestPage.vue") },
      { path: "testfetch", component: () => import("pages/TestPageFetch.vue") },
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
