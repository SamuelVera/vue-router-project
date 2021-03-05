//Utilities to create the router
import { createRouter, createWebHistory } from "vue-router";
//Routes views
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/jobs/Jobs";

/**Routes to be used in the application */
const routes = [
  {
    path: "/", //Path of the route (relative to the root)
    name: "Home", //Name of the route
    component: Home, //Component of the route
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
];

/**Instanciation of the Vue JS router */
const router = createRouter({
  //Use Web history API with the base url of the webpage
  history: createWebHistory(process.env.BASE_URL),
  //Routes array
  routes,
});

export default router;
