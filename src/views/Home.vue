<template>
  <div class="home">
    <Header />
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    Header,
    ProductList
  }
}
</script>
