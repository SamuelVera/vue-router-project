//Utilities to create the router
import { createRouter, createWebHistory } from "vue-router";
//Routes views
/**Home page */
import Home from "../views/Home.vue";
/**About page */
import About from "../views/About.vue";
/**Jobs list page */
import Jobs from "../views/jobs/Jobs";
/**Job Details page */
import JobDetails from "../views/jobs/JobDetails";

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
  //Route with parameter
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    //Allow accepting route params as props
    props: true,
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
