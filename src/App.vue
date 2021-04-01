<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="home">
        <img src="./assets/Newcastle_University_logo.png" class="logo"/>
        </router-link><router-link to="/Emergency" class="emergency">EMERGENCY
      </router-link>
        <router-link to="/Support" id="support">Support for Academics</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #003A65;
  margin: 0;
}
.logo {
  float: left;
  height: 75%;
  margin-top: 20px;
}
body{
  margin: 0;
}
#nav {
  background-color: #003A65;
  padding-left: 20px;
  padding-right: 20px;
  height: 120px;
}
#nav #support{
  margin-top: 40px;
  display: flex;
  float: right;
  font-size: 1rem;
  padding: 2px;
  color: #fff;
  margin-right: 30px;
  justify-content: center;
  text-decoration: underline;
width: 100px;}
#nav .emergency{
  margin-top: 40px;
  color: #CF0020;
  display: flex;
  background-color: #fff;
  width: 160px;
  float: right;
  font-size: 1.5rem;
  padding: 2px;
  justify-content: center;
  border: #CF0020 solid 2px;
  }
 @media screen and (max-width: 992px) {
  #nav .emergency {
    width: 30%;
    font-size: 75%;
    margin-right: 0;
    margin-top: 5%;
  }
  #nav #support{
    margin-top: 5%;
      margin-right: 0;

  }
  #nav {
  padding-left: 10px;
  padding-right: 10px;
  }
  .logo{
    height:50%;
  }

}
</style>
