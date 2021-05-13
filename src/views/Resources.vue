<template>
  <!-- eslint-disable  -->

  <!-- Use json-server data.json inside assets first then run serve the app to access the json data  -->

  <div id="app">
    
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-0 variant="info" id="accordion-buttons" >
            General
<hr>            
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
             <h6> {{ resource.name }} </h6>
            
                  <a :href="'http://' + resource.url">{{ resource.url }}</a>
                  <br>                {{resource.description}} 
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
          <b-button block v-b-toggle.accordion-1 variant="info" id="accordion-buttons"
            >Depression <hr></b-button
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
                 <h6> {{ resource.name }} </h6>
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
            >Anxiety<hr></b-button
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
                 <h6> {{ resource.name }} </h6>
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
            >Addiction<hr></b-button
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
                 <h6> {{ resource.name }} </h6>
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
hr {
  width: 50%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
h6 {
  font-weight: 600;
}
.card-body {
  padding: 0;
}
#accordion-buttons {
  background-color: #003a65;
  justify-content: center;
  margin-left: 0%;
  margin-right: 0%;
}
#accordion-buttons.active {
  background-image: url=(
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjQwLjgzNSAyNDAuODM1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNDAuODM1IDI0MC44MzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGlkPSJFeHBhbmRfTGVzcyIgZD0iTTEyOS4wMDcsNTcuODE5Yy00LjY4LTQuNjgtMTIuNDk5LTQuNjgtMTcuMTkxLDBMMy41NTUsMTY1LjgwM2MtNC43NCw0Ljc0LTQuNzQsMTIuNDI3LDAsMTcuMTU1DQoJCWM0Ljc0LDQuNzQsMTIuNDM5LDQuNzQsMTcuMTc5LDBsOTkuNjgzLTk5LjQwNmw5OS42NzEsOTkuNDE4YzQuNzUyLDQuNzQsMTIuNDM5LDQuNzQsMTcuMTkxLDBjNC43NC00Ljc0LDQuNzQtMTIuNDI3LDAtMTcuMTU1DQoJCUwxMjkuMDA3LDU3LjgxOXoiLz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
  );
}
header {
  margin-left: 20%;
  margin-right: 20%;
}
.card-header {
  background-color: #fff;
  margin-bottom: 0;
  padding: 0;
}
p {
  margin-left: 20%;
  margin-right: 20%;
}
#accordion-buttons {
  background-color: #fff;
  border: none;
  color: #000;
}
.card-header,
.card,
#accordion-buttons {
  border: none;
}

@media screen and (max-width: 1400px) {
  p {
    margin-right: 10%;
    margin-left: 10%;
  }
}
</style>