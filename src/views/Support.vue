<template>
  <div class="support">
    
          <div id="but">
          <router-link to="/WhatToSay"><h2>What to say</h2></router-link>
          </div>
          <div id="but">
          <router-link to="#"><h2>What to do</h2></router-link>
</div>
    <h5></h5>
  </div>
</template>
<style scoped>
.support h2{
  font-weight: bold;
  color: #003a65;
  text-decoration: none;
  padding-top: 1.5rem;
}
a {
  text-decoration: none;
}
#but {
  background-color: #cfcfcf;
  height: 5rem;
  width: 50%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  }
  #but:hover h2{
    color: #cfcfcf;
  }
  #but:hover{
    background-color: #003a65;
  }
  

</style>
