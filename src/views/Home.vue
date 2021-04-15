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
      </div>
    </div>
  </div>
</template>

<script>
export default {


  
};
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
  background-color: #fff;

  margin-left: 10%;
  margin-right: 10%;
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
