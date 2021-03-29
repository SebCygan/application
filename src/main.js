import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  created () {
    this.fetchData()
  },
  components: { App },
  data: {
    results: []
  },
  methods: {
    fetchData () {
      axios.get('testing.json').then(response => {
        this.results = response.data
      })
    }
  },
  template: '<App :results="results" />',
  render: h => h(App)
}).$mount('#app')

  

