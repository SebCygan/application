<template>
  <div>
  <div class="hello" v-if="results">
    <h1>all</h1>
    <mininav :key="1" @get-section="section" />
  </div>
  <div class="main" v-if="results[this.category]">
    <p>{{results[this.category]}}</p>
  </div>
</div>
</template>

<script>
import mininav from './mininav'

export default {
  name: 'page',
  props: ['results'],
  data () {
    return {
      category: 'depression'
    }
  },
  components: {
    mininav
  },
  methods: {
    section (id) {
      this.category = id
    }
  }
}
</script>