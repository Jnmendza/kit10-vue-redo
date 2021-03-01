<template>
  <div class="summary-container">
      <button @click="emptyCart()">clear cart</button>
      <p>Subtotal: {{ cartsSubTotal }} </p>
      <p>Tax: {{ cartsTax }} </p>
      <p>Total: {{ cartsTotal }} </p>
  </div>
</template>

<script>
export default {
    name: "Summary",
    props: ["subTotal"],
    methods: {
        emptyCart(){
            return this.$store.commit('clearCart')
        }
    },
    computed: {
        cartsSubTotal() {
            return this.$store.getters.cartTotal;
        },
        cartsTax(){
            const tax = this.cartsSubTotal * 0.075;
            return Math.round(tax * 100) / 100;
        },
        cartsTotal(){
            return this.cartsSubTotal + this.cartsTax;
        }
    }
}
</script>

<style>
.summary-container {
    width: 20%;
    float: right;
    margin-top: 25px;
}
.summary-container > p {
    margin: 10px 0;
}
</style>