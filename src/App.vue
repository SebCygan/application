<template>
  <div id="app">
    <router-link to="/" class="home">
      <img src="./assets/Newcastle_University_logo.png" class="logo" />
    </router-link>
    <b-navbar class="header" sticky=true id="nav">
<router-link to="/Support" id="support"
        >Support for Academics</router-link
      >
      <router-link to="/resources" id="support"
        >Resources for Students</router-link
      >    
<router-link id="support" v-if="loggedIn" to="/logout">Log out</router-link>
        <router-link id="support" v-if="!loggedIn" to="/login">Log in</router-link>
    </b-navbar>
 

      
    
     <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    </template><div class="footer">
      <hr />
      Produced by Sebastien Cygan | Integrated Masters Dissertation 2021
    </div>
  </div>
</template>
<script>
import auth from './auth'
export default {
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>
<style>
.footer {
  margin-top: 2px;
  padding-bottom: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #003a65;
  margin: 0;
}
.logo {
  height: 20%;
  margin-top: 20px;
  width: 20%;
  margin-bottom: 5px;
}
body {
  margin: 0;
}
#nav {
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;  
  border-bottom: solid #00000010 1px;
  margin-bottom: 10px;
  background-color: #003a65;
  color: #fff;
  justify-content: center;

}
#support {
  font-size: 1.3rem;
  padding: 2px;
  color: #fff;
  margin-right: 60px;
  margin-left: 60px;
  justify-content: center;
}

@media screen and (max-width: 992px) {
  #support {
    margin-right: 0;
    font-size: 80%;

  }
  #nav {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 80%;
  }
  .logo {
    height: 50%;
  }
}
</style>
