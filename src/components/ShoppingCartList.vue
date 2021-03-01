<template>
  <div v-if="shoppingCart.length > 0" class="shoppingCart-container">
    <h1>Your Shopping Cart</h1>
    <div class="title-row">
      <div><p>products</p></div>
      <div>
          <p>Description</p>
      </div>
      <div>
          <p>price</p>
      </div>
      <div>
          <p>quantity</p>
      </div>
      <div>
          <p>remove</p>
      </div>
      <div>
          <p>total</p>
      </div>
    </div>
    <div class="cartItem-container" v-for="(item, index) in shoppingCart" :key="index">
      <CartItem v-bind:item="item" />
    </div>
    <Summary />
  </div>
  <div v-else class="emptyCart">
    <h1>Your Cart is empty</h1>
  </div>
</template>

<script>
import CartItem from '../components/CartItem';
import Summary from '../components/Summary';

export default {
    name: "ShoppingCartList",
    components: {
        CartItem,
        Summary
      },  
    methods: {
  },
    computed: {
        shoppingCart() {
            return this.$store.getters.cartItems;
        }
    }
}
</script>

<style scoped>
h1 {
  margin: 25px 0;
}
.title-row {
    display: flex;
    justify-content: space-around;
    text-transform: uppercase;
    text-align: center;
}
.title-row > div {
  width: 250px;
}
</style>