<template>
  <div class="app">
    <div id="filteredResults">
      <h2>This is a box</h2>
      <ul id="example-1">
          <li v-for="condition in name" v-bind:key="condition">
            {{ condition }}
          </li>

      </ul>
    </div>
  </div>
</template>

<script>
import states from "../assets/data.json";
export default {
  name: "Resources",
  computed: {
    condition() {
      return states.resources.map((item) => {
        return item.condition;
      });
    },
    name() {
      return states.resources.map((item) => {
        return item.name;
      });
    },
  },
};
</script>
<style scoped>
#filteredResults {
  border: solid #000000 2px;
  height: 80%;
  margin: 10%;
}
</style>