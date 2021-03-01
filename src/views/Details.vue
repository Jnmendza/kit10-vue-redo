<template>
  <div class="details">
    <h1>{{details.title}}</h1>
    <div class="product-container">
      <img :src="require(`../assets/product-${details.id}.png`)" alt="product">
      <div class="info-container">
        <h2>Model: {{details.title}}</h2>
        <h3>Made by: {{details.company}}</h3>
        <p>Price: {{details.price}}</p>
        <p>{{details.info}}</p>
        <div class="btns-container">
          <button><router-link to="/">Back To Products</router-link></button>
          <button v-if="isInCart(details)" >In Cart</button>
          <button v-else @click="addToCart()">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {storeProducts} from '../../data.js';
// import store from '@/store/index'

export default {
  // name: "Details",
  // props: ["id"],
  data(){
    return {
      productId: this.$route.params.id, 
    }
  },
  methods: {
    addToCart(){
      this.$store.commit('addToCart', this.getProductItem())
    },
    isInCart(item){
      const cart = [...this.shoppingCart];
      for(let i = 0; i < cart.length; i++){
        if(item.id === cart[i].id){
          return true;
        } else return false
      }
      // this.$store.commit('inCart', this.getProductItem())
    },
    getProductItem(){
      const productItem = storeProducts.find(item => item.id == this.productId)
      return productItem
    },

  },
  computed: {
    details(){
      return storeProducts.find(item => item.id == this.productId)
    },
    shoppingCart(){
      return this.$store.state.cart
    },

  }
}
</script>

<style scoped>
.product-container {
  display: flex;
  text-align: left;
}
.info-container{
  display: flex;
  flex-direction: column;
}
.btns-container {
  display: flex;
}
</style>