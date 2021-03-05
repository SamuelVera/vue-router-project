<template>
  <h1>Job Details Page</h1>
  <!--Can be done using the route object to extract params with databinding ($route.params.id)-->
  <p>The job id is: {{ id }}</p>
</template>

<script>
export default {
  data() {
    return {
      /**Id from the route object */
      id: this.$route.params.id,
    };
  },
};
</script>

<style></style>
