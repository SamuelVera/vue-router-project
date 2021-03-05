import { createApp } from "vue";
//Root component
import App from "./App.vue";
//Use of the router
import router from "./router";

//Create app using router and mount it on div#app
createApp(App)
  .use(router)
  .mount("#app");
