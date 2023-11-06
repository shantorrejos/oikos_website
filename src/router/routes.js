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
      {
        path: "testprojects",
        component: () => import("pages/TestProjects.vue"),
      },
      {
        path: "testusers",
        component: () => import("pages/TestUsers.vue"),
      },
      {
        path: "testarticles",
        component: () => import("pages/TestArticles.vue"),
      },
      {
        path: "testfeatured",
        component: () => import("pages/TestFeatured.vue"),
      },
      {
        path: "userprofile/:userId",
        component: () => import("pages/UserProfilePage.vue"),
      },
      {
        path: "volunteerpage",
        component: () => import("pages/VolunteerPage.vue"),
      },
      {
        path: "donatepage",
        component: () => import("pages/DonatePage.vue"),
      },
      {
        path: "testvuefire",
        component: () => import("pages/testVueFire.vue"),
      },
      {
        path: "aboutus",
        component: () => import("pages/AboutUsPage.vue"),
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
