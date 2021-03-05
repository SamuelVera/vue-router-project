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
  <!--Vue router special tag, used for dynamically inject the route components-->
  <router-view />
</template>

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
</style>
