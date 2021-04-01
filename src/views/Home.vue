<template>
  <div id="app">
    <div id="topbanner">
      <img src="../assets/img1.jpg" />
      <div id="text">
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          vero minima facilis sequi ex distinctio accusamus possimus porro,
          quasi nihil, aperiam officiis vitae id totam asperiores repellendus
          reiciendis iure facere.
        </h2>
        <a href="this is a link">This is a link </a>
      </div>
    </div>
    <div id="bottomBanner">
      <img src="../assets/Urban-Sciences-Building-Newcastle-University.jpg" />
      <div id="text">
        <div class="but">
          <a href="this is a link">This is a link </a>
        </div>
        <br />
        <div class="but">
          <a href="this is a link">This is a link </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
#topbanner img {
  float: left;
  height: auto;
}
#topbanner {
  margin-top: 0;
  display: flex;
  background-color: #ccd0d7;
}
#text {
  flex-wrap: wrap;
}
h2,
a {
  margin: 0;
  text-decoration: none;
}
#bottomBanner img {
  float: left;
  height: auto;
}
#bottomBanner {
  margin-top: 0;
  display: flex;
  background-color: #00000040;
}
.but {
  border: #000000 solid 2px;
  padding: 5px;
  background-color: #ffffff;
}
</style>
