<template>


  <div class="wrapper">
    <h3>Recommended Deck Size of 8 for Ladder Play</h3>
    <div class="cards">
      <div class="card" v-for="spell in deck" :key="spell.id">



        <div class="info">
          <h1>{{spell.name}}</h1>
          <p>{{spell.rarity}}</p>
        </div>
        <div class="image">
          <img :src="'/images/cards/'+spell.image">
        </div>
        <div class="price">
          <h2>{{spell.price}}</h2>
          <button @click="removeFromDeck(spell)" class="auto">Remove From Deck</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'DeckList',
  props: {
    deck: Array
  },
  computed: {
    alreadyPrinted(item) {
      for(var i = 0; i <this.$root.$data.deck.length; i++) {
        if(item.id === this.$root.$data.deck[i].id){

          return true;
        }
      }
      return false;

    }
  },
  methods: {
    removeFromDeck(item) {
      this.$root.$data.deck = this.$root.$data.deck.filter(card => card !== item)
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

.cards {

  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  border: 2px solid #333;
  margin: 10px;
  margin-top: 5px;
  width: 200px;
}

.card img {

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
