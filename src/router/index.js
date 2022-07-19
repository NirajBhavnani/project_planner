import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddProjectView from "../views/AddProjectView.vue";
import EditProjectView from "../views/EditProjectView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "add",
    component: AddProjectView,
  },
  {
    path: "/edit/:projectId",
    name: "edit",
    component: EditProjectView,
    props: true, //in order to access the route parameter i.e projectId in the component
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
