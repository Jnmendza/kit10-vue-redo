import { createStore } from 'vuex'

// const updateLocalStorage = (cart) => {
//     localStorage.setItem('cart', JSON.stringify(cart))
// }

const store = createStore({
  state: {
    cart: []
  },
  mutations: {
      addToCart(state, product) {
          const item = state.cart.find(item => item.id === product.id)

          if(item){
              item.quantity++
          } else {
              state.cart.push({...product, quantity: 1})
          }
        //   updateLocalStorage(state.cart)
      },
      incrementQuantity(state, product) {
          const item = state.cart.find(item => item.id === product.id)

          item.quantity++;
      },
      decrementQuantity(state, product) {
          const item = state.cart.find(item => item.id === product.id)
          if (item.quantity > 1){
              item.quantity--
          } else {
            state.cart = state.cart.filter(item => item.id !== product.id)
          }
        //   updateLocalStorage(state.cart)
      },
      clearItem(state,product) {
        //   const item = state.cart.find(item => item.id === product.id)

          state.cart = state.cart.filter(item => item.id !== product.id)
      },
      clearCart(state) {
          state.cart = [];
      },
      inCart(state, product) {
        const item = state.cart.find(item => item.id === product.id)
        if(item){
          return true
        } else return false
    }
  },
  actions: {},
  getters: {
      productQuantity: state => product => {
          const item = state.cart.find(item => item.id === product.id)

          if(item) return item.quantity
          else return null;
      },
      cartItems: state => {
          return state.cart
      },
      cartTotal: state => {
          return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
      },
    //   inCart: state => product => {
    //       for(let i = 0; i < state.cart.length; i++){
    //           if(product.id === state.cart[i].id){
    //               return true
    //           } else return false
    //       }
    //   }
    },
  modules: {
  }
})

export default store;