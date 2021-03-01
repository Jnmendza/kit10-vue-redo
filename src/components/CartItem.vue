<template>
    <div class="item-container">
        <div>
            <img :src="require(`../assets/product-${item.id}.png`)">
        </div>
        <div>
            <p>{{ item.title }}</p>
        </div>
        <div>
            <p>{{ item.price }}</p>
        </div>
        <div>
            <p><button @click="deleteItem()">-</button>{{ itemQuantity }}<button @click="addItem()">+</button></p>
        </div>
        <div>
            <button @click="removeItem()"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div>
            <p>Item total: {{ itemTotal }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartItem",
    props: ["item"],
    computed: {
        itemTotal(){
            return this.item.quantity * this.item.price;
        },
        itemQuantity(){
            return this.$store.getters.productQuantity(this.item)
        }
    },
    methods: {
        addItem(){
            this.$store.commit('incrementQuantity', this.item)
        },
        deleteItem(){
            this.$store.commit('decrementQuantity', this.item)
        },
        removeItem(){
            this.$store.commit('clearItem', this.item)
        }
    },
}
</script>

<style scoped>
.item-container {
    display: flex;
    justify-content: space-around;
    text-transform: uppercase;
    text-align: center;
    align-items: center;
    margin-top: 25px;
}
img {
    width: 80%;
    height: 80%;
}

.item-container > div {
    width: 250px;
}
</style>