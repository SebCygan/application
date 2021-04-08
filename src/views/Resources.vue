<template>
  <!-- eslint-disable  -->

  <!-- Use json-server data.json inside assets first then run serve the app to access the json data  -->

  <div id="app">
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info"
            >Depression Resources</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <div
                id="depression"
                v-for="resource of resources"
                :key="resource.id"
              >
                <p v-if="resource.condition == 'depression'">
                  Name : {{ resource.name }} URL : {{ resource.url }}
                </p>
              </div>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info"
            >Anxiety Resources</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text
              ><div
                id="anxiety"
                v-for="resource of resources"
                :key="resource.id"
              >
                <p v-if="resource.condition == 'anxiety'">
                  Name : {{ resource.name }} URL : {{ resource.url }}
                </p>
              </div></b-card-text
            >
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info"
            >Accordion 3</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text></b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

    <div></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Resources",
  data() {
    return {
      resources: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/resources`);

      this.resources = res.data;
    } catch (e) {
      console.error(e);
    }
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