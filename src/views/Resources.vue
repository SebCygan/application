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
                id="general"
                v-for="resource of resources"
                :key="resource.id"
              >
                <div id="inner-text" v-if= "resource.condition=='all'">
                <br><h4> {{ resource.name }} </h4>
                <p>Link:
                  <a :href="'http://' + resource.url">{{ resource.url }}</a>
                  <br>                {{resource.description}}<hr>  
                  
                 </p>
                  
                </div>
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
               <div id="inner text" v-if= "resource.condition=='depression'">
                 <h4> {{ resource.name }} </h4> <br />Link:
                  <a :href="'http://' + resource.url">{{ resource.url }}</a>
                  <br>                  {{resource.description}}
                  <br>                  <hr>

                </div>
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
                <div id="inner text" v-if= "resource.condition=='anxiety'">
                 <h4> {{ resource.name }} </h4> <br />Link:
                  <a :href="'http://' + resource.url">{{ resource.url }}</a>
                  <br>                  {{resource.description}}
                  <br>
                  <hr>
                </div>
              </div> 
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info" id="accordion-buttons"
            >Addiction Resources</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <div
                id="addiction"
                v-for="resource of resources"
                :key="resource.id"
              >
                <div id="inner text" v-if= "resource.condition=='addiction'">
                 <h4> {{ resource.name }} </h4> <br />Link:
                  <a :href="'http://' + resource.url">{{ resource.url }}</a>
                  <br>                  {{resource.description}}
                  <br>
                  <hr>
                </div>
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
  background-color: #003a65;
  justify-content: center;
  margin-left: 0%;
  margin-right: 0%;
}
header {
  margin-left: 20%;
  margin-right: 20%;
}
p {
  margin-left: 10%;
  margin-right: 10%;
}
.card-header {
  border: none;
}
.card {
  border: none;
}
@media screen and (max-width: 1400px) {
  p {
    margin-right: 10%;
    margin-left: 10%;
  }
}
</style>