import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("./pages/home.vue");
const Login = () => import("./pages/login.vue");
const Docs = () => import("./pages/docs/index.vue");
const Install = () => import("./pages/docs/install.vue");
const Usage = () => import("./pages/docs/usage.vue");
const Version = () => import("./pages/version/first.vue");

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "login", path: "/login", component: Login },
  {
    name: "Docs",
    path: "/docs",
    component: Docs,
    children: [
      { name: "install", path: "", component: Install },
      {
        name: "usage",
        path: "usage",
        component: Usage,
      },
    ],
  },
  {
    name: "first",
    path: "/version/:versionID", // 命名路由
    component: Version,
  },
];

const Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default Router;
