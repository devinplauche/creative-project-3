<template>
<div class="wrapper">
  <div class="cards">
    <div class="card" v-for="card in cards" :key="card.id">
      <div class="info">
        <h1>{{card.name}}</h1>
        <h2>{{card.rarity}}</h2>
      </div>
      <div class="image">
        <img :src="'/images/cards/' + card.image">
      </div>
      <div class="price">
        <h2>{{card.price}}</h2>
        <button @click="addToDeck(card)" class="auto">Add to Deck</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'CardList',
  props: {
    cards: Array
  },
  methods: {
    addToDeck(card) {

      if(this.$root.$data.deck.length < 8 && !this.$root.$data.deck.includes(card))
      {
        this.$root.$data.deck.push(card)
      }

    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards {

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.card img {
  margin-top: 15px;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.card .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  /*background: #F2921D;*/

  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 20px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  border: 2px solid #333;
  padding-left: 8px;
  height :52px;
  display: flex;
  align-items: center;
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
