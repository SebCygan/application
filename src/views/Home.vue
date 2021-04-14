<template>
  <div id="app">
    <div id="topbanner">
      <img src="../assets/Urban-Sciences-Building-Newcastle-University.jpg" />
      <div id="text">
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          vero minima facilis sequi ex distinctio accusamus possimus porro,
          quasi nihil, aperiam officiis vitae id totam asperiores repellendus
          reiciendis iure facere.
        </h2>
      <a class="but" href="/Resources">Resources</a>
      </div>
    </div>
    <div id="topbanner">
      <img src="../assets/img1.jpg" />
      <div id="text">
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          vero minima facilis sequi ex distinctio accusamus possimus porro,
          quasi nihil, aperiam officiis vitae id totam asperiores repellendus
          reiciendis iure facere.
        </h2>
      <a class="but" href="/Resources">Resources</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
@media screen and (max-width: 992px) {
  #app #topbanner img {
    height: 20%;
    width: 100%;
  }
  #app #topbanner {
    margin-top: 0;
    display: block;
    background-color: #ccd0d7;
    height: 100%;
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
  height: 100%;
}
#topbanner {
  margin-top: 0;
  display: flex;
  background-color: #ccd0d7;
  height: 100%;
}
#text {
  flex-wrap: wrap;
}
h2,
a {
  margin: 0;
  text-decoration: none;
}

a.but {
  border: #000000 solid 2px;
  padding: 5px;
  background-color: #ffffff;
}
</style>
