<template>
  <!--Layout of the webpage-->
  <div id="nav">
    <!--Vue router special tag, allows the Vue router to intercept the requests for new URLs -->
    <router-link to="/">Home</router-link> |
    <!--When a route is exactly the one of the router-link some dynamic classes are added to the a tag-->
    <!--The to atribute can be databinded with :to and an object and match it by name (Allows easier edition)-->
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>

  <!--Buttons for programmatic navigation-->
  <!--Attach click events and use handlers -->
  <button @click="redirect">Redirect</button>
  <button @click="goBack">Go Back</button>
  <button @click="goForward">Go Forward</button>
  <!--Vue router special tag, used for dynamically inject the route components-->
  <router-view />
</template>

<script>
export default {
  methods: {
    /**Do redirection */
    redirect() {
      //Reference the router object
      //Push an extra route with the router-link :to object
      //this.$router.push({ name: "Home" }); //Push leaves a history record
      this.$router.replace({ name: "Home" }); //Replace doesn't leave a history record
    },
    /**Go back on history */
    goBack() {
      //Reference the router object
      //Use go methods with -1 to go back 1 in the history
      this.$router.go(-1);
    },
    /**Go forward on history */
    goForward() {
      //Reference the router object
      //Use go methods with 1 to go forward 1 in the history
      this.$router.go(1); //Doesn't execute if there's nothing to go forward
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button {
  cursor: pointer;
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  transition: 0.3s;
}

button:hover {
  opacity: 0.7;
}
</style>
