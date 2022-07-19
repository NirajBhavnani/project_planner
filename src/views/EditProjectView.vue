<template>
  <form @submit.prevent="handleUpdate">
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: ["projectId"], //in order to access the route parameter i.e projectId in the component
  data() {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3000/projects/" + this.projectId,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        // retrieving the project info from db in inputs
        (this.title = data.title), (this.details = data.details);
      });
  },
  methods: {
    handleUpdate() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, details: this.details }),
      })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>