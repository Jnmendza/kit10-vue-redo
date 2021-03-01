<template>
  <div class="carousel-container">
  <Carousel />
  <div class="centered">
    Vintage FC Barca Kits
  </div>
  </div>

</template>

<script>
import Carousel from './Carousel'
export default {
  name: "Header",
  components: {
    Carousel
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-container {
  position: relative;
  text-align: center;
}
.centered {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: 2px 2px 5px black;
  font-weight: bold;
  font-size: 2.4rem;
}
</style>