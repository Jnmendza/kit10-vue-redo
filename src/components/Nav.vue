<template>
  <nav>
    <router-link to="/">
    <div class="logo">
      <img src="../assets/logo.svg" alt="store" class="navbar-brand" />
      <h1>Kit 10</h1>
    </div>
    </router-link>
    <router-link to="/cart">
      <button><i class="fas fa-shopping-cart"></i></button>
      <div class="cart" v-if="cartCount > 0"> {{ cartCount }} </div>
    </router-link>
  </nav>
</template>

<script>
export default {
    name: "Nav",
    computed: {
      cartCount(){
        return this.$store.state.cart.length;
      }
    },
}
</script>

<style scoped>
nav {
  background-color: #A50044;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed;
  width: 100%;
  overflow: hidden; */
}

nav button {
  margin: 0 30px;
  padding: 10px;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: 1px solid #004D98;
  border-radius: 5px;
  cursor:pointer;
  color: #004D98;
  overflow: hidden; 
  text-decoration: none;
}

.logo {
  padding: 15px;
  display: flex;
  justify-content: space-around;
  width: 200px;
}

nav .logo img {
  height: 55px ;
  width: 55px;
}

nav .logo h1 {
  color: white;
  font-weight: bold;
  padding: 1.2rem;
}

.cart {
  border-radius: 50%;
  background-color: white;
  width: 5px;
  height: 6px;
  /* text-decoration: none; */
  /* text-align: center; */
  color: red;
  font-weight: bold;
  padding: 5px;
  position: absolute;
  top: 3%;
  right: 4%;
  font-size: 0.6rem;
}

.fas {
  font-size: 1.5rem;
}
</style>