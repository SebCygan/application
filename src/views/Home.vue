<template>
  <div id="app">
    <div id="topbanner">
      <img src="../assets/examstress.jpg" alt="An image of a person writing on a notebook" />
      <div id="text">
        <h1>5 tips for coping with exam stress at University</h1>
        <hr class="hrtest" />
        <section class="buttons">
          <div class="container">
            <h2><b>By Student Minds</b></h2>
            <a class="btn btn-border-4"  href="https://www.studentminds.org.uk/examstress.html"
              >Read More</a
            >
          </div>
        </section>
      </div>
    </div>
    <div id="topbanner2">
      <img src="../assets/lgbt.jpg" alt="Pride Flag flying in wind" />
      <div id="text">
        <h1>LGBTQ+ Support at University</h1>
        <hr class="hrtest" />
        <section class="buttons">
          <div class="container">
            <h2><b>By Student Minds</b></h2>
            <a class="btn btn-border-4" 
              href="https://www.studentminds.org.uk/lgbtq.html"
              >Read More</a
            >
          </div>
        </section>
      </div>
    </div>
    <div id="topbanner">
      <img src="../assets/mentalking.jpg" alt="2 men are in a discussion"/>
      <div id="text">
        <h1>Men's Mental Health</h1>
        <hr class="hrtest" />
        <section class="buttons">
          <div class="container">
            <h2><b>By Student Minds</b></h2>
            <a class="btn btn-border-4" 
              href="https://www.studentminds.org.uk/mensmentalhealth.html"
              >Read More</a
            >
          </div>
        </section>
      </div>
    </div>
    <div id="topbanner2">
      <img src="../assets/studentBAME.jpg" id="BAME" alt="2 BAME students are viewing code o na computer"/>
      <div id="text">
        <h1>Black, Asian & Minority Ethnic students' mental health support</h1>
        <hr class="hrtest" />
        <section class="buttons">
          <div class="container">
            <h2><b>By minds </b></h2>
            <a class="btn btn-border-4" 
              href="https://www.mind.org.uk/information-support/tips-for-everyday-living/student-life/for-bame-students/"
              >Read More</a
            >
          </div>
        </section>
      </div>
    </div>
    <div id="topbanner">
      <img src="../assets/friend.jpg" alt="2 friends are talking over coffee" />
      <div id="text">
        <h1>Starting a conversation with a friend</h1>
        <hr class="hrtest" />
        <section class="buttons">
          <div class="container">
            <h2><b>By Student Minds</b></h2>
            <a class="btn btn-border-4" 
              href="https://www.studentminds.org.uk/startingaconversation.html"
          >Read More
            </a>
          </div>
        </section>
      </div>
    </div>
    <!-- Close of final banner -->
  </div>
  <!-- Close of app Div -->
</template>

<script>
export default {};
</script>
<style scoped>

#topbanner5 .container {
  flex-direction: row;
}

@media screen and (max-width: 968px) {
  #app #topbanner5 .container {
    flex-direction: column;
  }
  #app #topbanner5 .container h4 {
    margin-right: 0;
    margin-left: 0;
  }
  #app #topbanner img {
    margin-bottom:5%;
    width: 100%;
  }
  #app #topbanner {
    margin-top: 0;
    display: block;
  }
  #app h2,
  a {
    font-size: 60%;
  }
  h1 {
    font-size:90%;
  }
  #app #topbanner h3,
  #app #topbanner2 h3 {
    font-size:65%;
  }

  #app #topbanner2 img {
        margin-bottom:5%;

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
  #app #topbanner5 img {
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
.btn.btn-border-4::after,
.btn.btn-border-4::before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    transition: .5s;
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
    color: #fff;
}
.btn.btn-border-4:hover::after,
.btn.btn-border-4:hover::before {
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-color: #fff;
}
#topbanner img {
  float: left;
  width: 40%;
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
  width: 40%;
}
#topbanner h2 {
  text-transform: uppercase;
  font-size: 1.4rem;
}
#topbanner2 h2 {
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


</style>
