<template>
  <div>
    <ul>
      <li v-for="(name) in names" :key="name.id" @click="$emit('get-section', name.id)">{{name.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      names: [
       { id: 'depression', title: 'Depression' }
            
      ]
    }
  }
}
</script>