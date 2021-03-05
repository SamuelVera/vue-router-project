<template>
  <h1>Job Details Page</h1>
  <!--Can be done using the route object to extract params with databinding ($route.params.id)-->
  <p>The job id is: {{ id }}</p>
  <p v-if="job === null">Loading...</p>
  <div v-else>
    <h2>{{ job.title }}</h2>
    <h3>{{ job.details }}</h3>
  </div>
</template>

<script>
export default {
  //Accepting route params as props
  props: ["id"],
  //Data
  data() {
    return {
      job: null,
    };
  },
  //On mounted to DOM
  mounted() {
    //Get a single job
    fetch(`http://localhost:3000/jobs/${this.id}`)
      //Track response and transform from JSON to data
      .then((res) => res.json())
      //Get data as JS
      .then((data) => (this.job = data))
      //Catch the errors and log them
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
