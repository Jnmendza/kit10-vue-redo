<template>
  <!-- <i class="fas fa-cart-plus"></i> -->
<router-link :to="{ name: 'Details', params: {id: `${item.id}`} }">
  <img
    class="product-img"
    :src="require(`../assets/product-${item.id}.png`)"
    alt="product"
  />
</router-link>
  <div class="info-container">
    <p>{{ item.title }}</p>
    <p>$ {{ item.price }}</p>
    <p v-if="isInCart(this.item)">In Cart</p>
    <button v-else><i class="fas fa-cart-plus" @click="addToCart()"></i></button>
  </div>    
</template>

<script>
export default {
  name: "Product",
  props: ["item"],
  methods: {
    isInCart(product){
        const item = this.shoppingCart.find(item => item.id === product.id)
        if(item){
          return true;
        } else return false;
    },
    addToCart(){
      this.$store.commit('addToCart', this.item )
    }
  },
  computed: {
    shoppingCart(){
      return this.$store.state.cart
    },
    }
}

</script>

<style>
.cart-btn {
  position: absolute;
  margin: 0 0 0 0;
  padding: 0.2rem 0.4rem;
  background: #15223c;
  border: none;
  color: white;
  font-size: 1.4rem;
  border-radius: 0.5rem 0 0 0;
  /* transform: translate(100%, 100%); */
  /* transition: all 1s linear; */
}

.product-img {
  height: 90%;
  width: 90%;
  padding: 18px;
  transition: transform 0.9s;
}
.product-img:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.info-container {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f3f3f3;
  border-radius: 0 0 15px 15px;
}
.info-container p {
  margin: 0 1rem;
  font-size: 1rem;
}
.info-container p:nth-child(2) {
  color: #a50044;
  font-weight: 600;
  font-size: 1.4rem;
}
</style>
