<template>
  <h1>Our <span>Vintage Products</span></h1>
  <div class="wrap">
    <div v-for="(item, index) in items" :key="index" class="card-container">
      <Product v-bind:item="item" />
    </div>
  </div>
</template>

<script>
import {storeProducts} from '../../data.js'
import Product from "./Product";
export default {
  name: "ProductList",
  components: {
    Product
  },
  data() {
    return {
      items: storeProducts
    };
  }
};
</script>

<style>
.wrap {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  flex-wrap: wrap;
}
.card-container {
  margin: 1.4rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: 5px 10px 8px #888888;
  width: 350px;
  height: 45%;
  /* overflow: hidden; */
}
</style>
