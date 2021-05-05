<template>
  <div id="app">
    <div id="topbanner">
        <img src="../assets/examstress.jpg" />
        <div id="text">
          <h1>5 tips for coping with exam stress at University</h1>
          <hr class="hrtest"/>
         <section class="buttons">
  <div class="container"> <h3>By Student Minds</h3> <a href="https://www.studentminds.org.uk/examstress.html"><button class="btn btn-2"> <h3>Read More</h3>
</button></a></div></section>
        </div>     
      
    </div>
    <div id="topbanner2">
      <img src="../assets/img1.jpg" />
       <div id="text">
          <h1>Looking After Your Mental Wellbeing</h1>
          <hr class="hrtest"/>
         <section class="buttons">
  <div class="container"> <h3>By Student Minds</h3> <a href="https://www.studentminds.org.uk/lookingafteryourmentalwellbeing.html"><button class="btn btn-2"> <h3>Read More</h3>
</button></a></div></section>
        </div>
    </div>
    <div id="topbanner5">
      <img src="../assets/img1.jpg" />
       <div id="text">
          <h1>Key things to think about:</h1>
          <hr class="hrtest"/>
         <section class="buttons">
  <div class="container"> <h4 style="margin-right:10%; margin-left:10%">Eat </h4> <h4 style="margin-right:10%; margin-left:10%"> Sleep </h4><h4 style="margin-right:10%; margin-left:10%">  Exercise  </h4> <h4 style="margin-right:10%; margin-left:10%"> Relax </h4></div><div class="container" ><h6> Eat as healthily as you can | Try and be on a regular sleep schedule | Try and get some exercise | Leave yourself time to relax </h6> </div></section>
        </div>
    </div>
    <div id="topbanner2">
      <img src="../assets/img1.jpg" />
       <div id="text">
          <h1>5 tips for coping with exam stress at University</h1>
          <hr class="hrtest"/>
         <section class="buttons">
  <div class="container"> <h3>By Student Minds</h3> <a href="https://www.studentminds.org.uk/examstress.html"><button class="btn btn-2"> <h3>Read More</h3>
</button></a></div></section>
        </div>
    </div>
    <div id="topbanner">
      <img src="../assets/img1.jpg" />
       <div id="text">
          <h1>5 tips for coping with exam stress at University</h1>
          <hr class="hrtest"/>
         <section class="buttons">
  <div class="container"> <h3>By Student Minds</h3> <a href="https://www.studentminds.org.uk/examstress.html"><button class="btn btn-2"> <h3>Read More</h3>
</button></a></div></section>
        </div>
    </div>
    <div id="topbanner2">
      <img src="../assets/img1.jpg" />
      <div id="text">
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          vero minima facilis sequi ex distinctio accusamus possimus porro,
          quasi nihil, aperiam officiis vitae id totam asperiores repellendus
          reiciendis iure facere.
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
@media screen and (max-width: 1500px) {
 #app #topbanner5 .container {
   flex-direction: column;
 }
 #app #topbanner5 .container h4 {
margin-right: 0;
margin-left: 0;
 }
}
#topbanner5 .container {
   flex-direction: row;
 }
 
@media screen and (max-width: 1500px) {
  #app #topbanner img {
    height: 20%;
    width: 100%;
  }
  #app #topbanner {
    margin-top: 0;
    display: block;
  }
  #app h2,
  a {
    font-size: 80%;
  }

  a.but {
    border: #000000 solid 2px;
    padding: 5px;
    background-color: #ffffff;
  }
  #app #topbanner2 img {
    height: 20%;
    width: 100%;
  }
  #app #topbanner2 {
    margin-top: 0;
    display: block;
  }
  #app h2,
  a {
    font-size: 80%;
  }

  a.but {
    border: #000000 solid 2px;
    padding: 5px;
    background-color: #ffffff;
  }
  #app #topbanner5 img {
    height: 20%;
    width: 100%;
  }
  #app #topbanner5 {
    margin-top: 0;
    display: block;
  }
  #app h2,
  a {
    font-size: 80%;
  }

  a.but {
    border: #000000 solid 2px;
    padding: 5px;
    background-color: #ffffff;
  }
}

#topbanner img {
  float: left;
  width: 25%;
}
#topbanner {
  margin-top: 10px;
  display: flex;
  background-color: #733e7ae7;
  margin-left: 10%;
  margin-right: 10%;
}
#topbanner #text {
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  font-size: 1rem;
  color: #fff;
  padding: 1rem;
}

#text {
  flex-wrap: wrap;
}
h2,
a {
  margin: 0;
  text-decoration: none;
  color: #fff;
}

#topbanner2 {
  background-color: #7a3e59;
  margin-top: 10px;
  display: flex;
  margin-left: 10%;
  margin-right: 10%;
}
#topbanner2 img {
  float: left;
  width: 25%;
}
#topbanner h3 {
  text-transform: uppercase;
  font-size: 1.4rem;
}
#topbanner2 h3 {
  text-transform: uppercase;
  font-size: 1.4rem;
}
#topbanner2 #text {
    margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  font-size: 1rem;
  color: #fff;
  padding: 1rem;
}
#topbanner .hrtest {
  background-color: #ffffff80;
}
#topbanner2 .hrtest {
  background-color: #ffffff80;
}

#topbanner5 img {
  float: left;
  width: 25%;
}
#topbanner5 {
  margin-top: 10px;
  display: flex;
  background-color: #733e7ae7;
  margin-left: 10%;
  margin-right: 10%;
}
#topbanner5 #text {
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  font-size: 1rem;
  color: #fff;
  padding: 1rem;
}
#topbanner5 .hrtest {
  background-color: #ffffff80;
}
* {
  box-sizing: inherit;
  transition-property: all;
  transition-duration: .6s;
  transition-timing-function: ease;
}
.buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
}

.container { 
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
    text-align: center; 
    }
  
    a:hover {
      background: rgba(white, 1);
      color: #fff;
    
  }

.btn {
  color: #fff;
  cursor: pointer;
  font-size:16px;
  font-weight: 400;
  
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%; 
} 
  a:hover { text-decoration: none; }
  
.btn-2 {
    letter-spacing: 0;
}

.btn-2:hover,
.btn-2:active {
  letter-spacing: 5px;
}

.btn-2:after,
.btn-2:before {
  backface-visibility: hidden;
  border: 1px solid rgba(#fff, 0);
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
}

.btn-2:hover:after,
.btn-2:hover:before {
  backface-visibility: hidden;
  border-color: #fff;
  transition: width 350ms ease-in-out;
  width: 70%;
}

.btn-2:hover:before {
  bottom: auto;
  top: 0;
  width: 70%;
}
</style>
