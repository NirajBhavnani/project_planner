<template>
  <nav class="filter-nav">
    <button
      @click="applyFilter('all')"
      :class="{ active: currentFilter === 'all' }"
    >
      View All
    </button>
    <button
      @click="applyFilter('completed')"
      :class="{ active: currentFilter === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="applyFilter('ongoing')"
      :class="{ active: currentFilter === 'ongoing' }"
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  props: ["currentFilter"],
  methods: {
    applyFilter(type) {
      this.$emit("applyFilter", type);
    },
  },
};
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>