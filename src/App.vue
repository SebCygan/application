<template>
  <div id="app">

    <router-link to="/" class="home">
    
      <img src="./assets/Newcastle_University_logo.png" class="logo" />
    </router-link>   

    <b-navbar class="header" sticky="true" id="nav">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
      <router-link to="/Support" id="support"
        >Support for Academics</router-link
      >
      <router-link to="/resources" id="support"
        >Resources for Students</router-link
      >
      <router-link id="support" v-if="loggedIn" to="/logout"
        >Log out</router-link
      >
      <router-link id="support" v-if="!loggedIn" to="/login"
        >Log in</router-link
      >
    </b-navbar>
<div id="emergency"> <a class="btn btn-border-4" href="/emergency">EMERGENCY</a></div>
<a class="btn btn-border-4" href="https://www.ncl.ac.uk/wellbeing/">Student Wellbeing Access</a>

    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? "in" : "out" }}</p>
    </template>
    <div class="footer">
      <hr />
      Produced by Sebastien Cygan | Integrated Masters Dissertation 2021
    </div>
  </div>
</template>
<script>
import auth from "./auth";
export default {
  data() {
    return {
      loggedIn: auth.loggedIn(),
    };
  },
  created() {
    auth.onChange = (loggedIn) => {
      this.loggedIn = loggedIn;
    };
  },
};
</script>
<style>
.footer {
  margin-top: 2px;
  padding-bottom: 10px;
}

.btn {
  position: relative;
    margin: 8px;
    padding: 10px 10px;
    text-align: center;
    font-size: 14px;
    letter-spacing: 1px;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    transition: ease-out 0.5s;
    -webkit-transition: ease-out 0.5s;
    -moz-transition: ease-out 0.5s;
}
#emergency {
  margin-left: 0;
  margin-right:30%;
  width: 20%;
  display: inline-flex;
}
.btn.btn-border-4::after,
.btn.btn-border-4::before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    transition: .5s;
}
p {
  font-family: 'Montserrat', sans-serif;
}
.btn.btn-border-4::after {
    top: -5px;
    left: -5px;
    border-top: 3px solid transparent;
    border-left: 3px solid transparent;
}

.btn.btn-border-4::before {
    bottom: -5px;
    right: -5px;
    border-bottom: 3px solid transparent;
    border-right: 3px solid transparent;
}

.btn.btn-border-4:hover {
    color: #000;
}

.btn.btn-border-4:hover::after,
.btn.btn-border-4:hover::before {
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-color: #000;
}

#app {
  font-family: "Montserrat", sans-serif;
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


@media screen and (max-width: 968px) {
  #support {
    margin-right: 0;
    font-size: 80%;
  }
  #nav {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 70%;
  }
  #support{
    margin-left:5%;
    margin-right:5%;
  }
  #emergency {
    margin-right:auto;
    margin-left:auto;
    width:50%;
    display:block;
  }
  .logo {
    width:40%;
  }
}
</style>
