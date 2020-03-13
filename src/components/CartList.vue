<template>


  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="item in cart" :key="item.id">



        <div class="info">
          <h1>{{item.name}}</h1>
          <p>{{item.country}}</p>
        </div>
        <div class="image">
          <img :src="'/images/products/'+item.image">
        </div>
        <div class="price">
          <h2>{{item.price}}</h2>
          <button @click="removeFromCart(item)" class="auto">Remove From Cart</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CartList',
  props: {
    cart: Array
  },
  computed: {
    alreadyPrinted(item) {
      for(var i = 0; i <this.$root.$data.cart.length; i++) {
        if(item.id === this.$root.$data.cart[i].id){

          return true;
        }
      }
      return false;

    }
  },
  methods: {
    removeFromCart(item) {
      this.$root.$data.cart = this.$root.$data.cart.filter(product => product !== item)
    },

    }



}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 5px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: green;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
