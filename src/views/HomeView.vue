<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";

export default {
  name: "HomeView",
  components: {
    SingleProject,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects") //this function will get all the projects
      .then((res) => res.json()) //since fetch() is asynchronous so it will take some time and returns a promise, then we will parse the response json
      .then((data) => (this.projects = data)) //updating the projects array with the data array we get from the json-server
      .catch((err) => console.log(err.message));
  },
  methods: {
    //handleDelete and handleComplete are written to maintain the temp/display projects array with db array
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id; //if true: We keep the item in, false: we filter it out
      });
    },
    handleComplete(id) {
      let temp = this.projects.find((project) => {
        return project.id === id; //if true: then store that project
      });
      temp.complete = !temp.complete;
    },
  },
};
</script>
