<template>
<div>
  <div v-if="isEmpty">Cart is empty</div>
  <div v-else>
  <CartList  :cart="myCurrentCart"/>
  <br/>
  <p>Number of items in cart: {{numberOfItems}}</p>
</div>
</div>
</template>

<script>
import CartList from '../components/CartList.vue'
export default {
  name: 'Cart',
  components: {
    CartList
  },
  computed: {
    myCurrentCart() {
      return this.$root.$data.cart; 
    },
    isEmpty() {
      if(this.$root.$data.cart.length === 0){
          return true;
      }
      else {
        return false;
      }
    },
    numberOfItems() {
     return this.$root.$data.cart.length
    }
  }
}
</script>
