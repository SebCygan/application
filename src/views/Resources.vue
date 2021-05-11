<template>
  <!-- eslint-disable  -->

  <!-- Use json-server data.json inside assets first then run serve the app to access the json data  -->

  <div id="app">
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-0 variant="info" id="accordion-buttons"
            >General <img style="width:2%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwLjY4OCA0OTAuNjg4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuNjg4IDQ5MC42ODg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkMxMDc7IiBkPSJNNDcyLjMyOCwxMjAuNTI5TDI0NS4yMTMsMzQ3LjY2NUwxOC4wOTgsMTIwLjUyOWMtNC4yMzctNC4wOTMtMTAuOTktMy45NzUtMTUuMDgzLDAuMjYyDQoJYy0zLjk5Miw0LjEzNC0zLjk5MiwxMC42ODcsMCwxNC44MmwyMzQuNjY3LDIzNC42NjdjNC4xNjUsNC4xNjQsMTAuOTE3LDQuMTY0LDE1LjA4MywwbDIzNC42NjctMjM0LjY2Nw0KCWM0LjIzNy00LjA5Myw0LjM1NC0xMC44NDUsMC4yNjItMTUuMDgzYy00LjA5My00LjIzNy0xMC44NDUtNC4zNTQtMTUuMDgzLTAuMjYyYy0wLjA4OSwwLjA4Ni0wLjE3NiwwLjE3My0wLjI2MiwwLjI2Mg0KCUw0NzIuMzI4LDEyMC41Mjl6Ii8+DQo8cGF0aCBkPSJNMjQ1LjIxMywzNzMuNDE1Yy0yLjgzMSwwLjAwNS01LjU0OC0xLjExNS03LjU1Mi0zLjExNUwyLjk5NCwxMzUuNjMzYy00LjA5My00LjIzNy0zLjk3NS0xMC45OSwwLjI2Mi0xNS4wODMNCgljNC4xMzQtMy45OTIsMTAuNjg3LTMuOTkyLDE0LjgyLDBsMjI3LjEzNiwyMjcuMTE1bDIyNy4xMTUtMjI3LjEzNmM0LjA5My00LjIzNywxMC44NDUtNC4zNTQsMTUuMDgzLTAuMjYyDQoJYzQuMjM3LDQuMDkzLDQuMzU0LDEwLjg0NSwwLjI2MiwxNS4wODNjLTAuMDg2LDAuMDg5LTAuMTczLDAuMTc2LTAuMjYyLDAuMjYyTDI1Mi43NDQsMzcwLjI3OQ0KCUMyNTAuNzQ4LDM3Mi4yODEsMjQ4LjAzOSwzNzMuNDA4LDI0NS4yMTMsMzczLjQxNXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
          </b-button
          >         </b-card-header>
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
            >Depression</b-button
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
            >Anxiety</b-button
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
            >Addiction</b-button
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
#accordion-buttons.active{
  background-image: url=("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjQwLjgzNSAyNDAuODM1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNDAuODM1IDI0MC44MzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGlkPSJFeHBhbmRfTGVzcyIgZD0iTTEyOS4wMDcsNTcuODE5Yy00LjY4LTQuNjgtMTIuNDk5LTQuNjgtMTcuMTkxLDBMMy41NTUsMTY1LjgwM2MtNC43NCw0Ljc0LTQuNzQsMTIuNDI3LDAsMTcuMTU1DQoJCWM0Ljc0LDQuNzQsMTIuNDM5LDQuNzQsMTcuMTc5LDBsOTkuNjgzLTk5LjQwNmw5OS42NzEsOTkuNDE4YzQuNzUyLDQuNzQsMTIuNDM5LDQuNzQsMTcuMTkxLDBjNC43NC00Ljc0LDQuNzQtMTIuNDI3LDAtMTcuMTU1DQoJCUwxMjkuMDA3LDU3LjgxOXoiLz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
}
header {
  margin-left: 20%;
  margin-right: 20%;
}
.card-header {
background-color:#fff;
}
p {
  margin-left: 10%;
  margin-right: 10%;
}
#accordion-buttons{
  background-color:#fff;
  border:none;
  color:#000;
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