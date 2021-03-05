<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <!--Dynamic routes with params passing through the params object-->
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //Initial jobs property (will be filled with external data)
      jobs: [],
    };
  },
  //When the component has been mounted to the DOM
  mounted() {
    //Good moment on the lifecycle to fetch from API
    //Fetch the data from the end point
    fetch("http://localhost:3000/jobs")
      //Track response and transform from JSON to data
      .then((res) => res.json())
      //Get data as JS
      .then((data) => (this.jobs = data))
      //Catch the errors and log them
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
  transition: 0.3s;
  border-radius: 10px;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>
