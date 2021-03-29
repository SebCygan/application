<template>
  <div id="app">
        <router-link to="/" class="home">  <img src="./assets/Newcastle_University_logo.png"></router-link>
<div id="nav">
       <router-link to="/Emergency" class="emergency">Emergency</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  width: 25%;
  
}
#nav {
  padding-top: 30px;
  font-size: 2rem; 
  margin-bottom: 5rem;

}

#nav a {
  font-weight: bold;
  color: #003a65;
  
}
#nav a.router-link-exact-active:last-child{
  color: #d91a35;
}
</style>
