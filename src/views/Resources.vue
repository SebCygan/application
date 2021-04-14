<template>
  <!-- eslint-disable  -->

  <!-- Use json-server data.json inside assets first then run serve the app to access the json data  -->

  <div id="app">
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-0 variant="info" id="accordion-buttons"
            >General Resources</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-0"
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
                <p v-if="resource.condition == 'all'">
                  {{ resource.name }} <br />Link:
                  <a :href="'http://' + resource.url">{{ resource.url }}</a>
                </p>
              </div>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info" id="accordion-buttons"
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
                  {{ resource.name }} <br />Link:
                  <a :href="'http://' + resource.url">{{ resource.url }}</a>
                </p>
              </div>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info" id="accordion-buttons"
            >Anxiety Resources</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <div
                id="anxiety"
                v-for="resource of resources"
                :key="resource.id"
              >
                <p v-if="resource.condition == 'anxiety'">
                  {{ resource.name }} <br />Link:
                  <a :href="'http://' + resource.url">{{ resource.url }}</a>
                </p>
              </div>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info" id="accordion-buttons"
            >Abuse Resources</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <div
                id="abuse"
                v-for="resource of resources"
                :key="resource.id"
              >
                <p v-if="resource.condition == 'drugAbuse'">
                  {{ resource.name }} <br />Link:
                  <a :href="'http://' + resource.url">{{ resource.url }}</a>
                </p>
              </div>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-4 variant="info" id="accordion-buttons"
            >Stress Resources</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <div
                id="stress"
                v-for="resource of resources"
                :key="resource.id"
              >
                <p v-if="resource.condition == 'stress'">
                  {{ resource.name }} <br />Link:
                  <a :href="'http://' + resource.url">{{ resource.url }}</a>
                </p>
              </div>
            </b-card-text>
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
#accordion-buttons {
  background-color:#003A65;
  justify-content: center;
  margin-left: 0%;
  margin-right: 0%;
}

</style>