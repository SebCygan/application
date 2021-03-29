<template>
  <div class="resources">
    <div>
        <div v-for="data in myJson" :key="data">{{data}}</div>
    </div>
  </div>
</template>
<script>
import json from '../assets/testing.json'
      export default{
          data(){
              return{
                  myJson:json
            }
      }
      }
      
</script>

<style scoped>


</style>
