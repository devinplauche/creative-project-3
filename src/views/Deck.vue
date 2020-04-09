<template>
<div>
  <div v-if="isEmpty">Deck is empty, add a Deck!</div>
  <div v-else>
  <DeckList  :deck="myCurrentDeck"/>
  <br/>
  <p>Number of items in deck: {{numberOfItems}}</p>
</div>
</div>
</template>

<script>
import DeckList from '../components/DeckList.vue'
export default {
  name: 'Deck',
  components: {
    DeckList
  },
  computed: {
    myCurrentDeck() {
      return this.$root.$data.deck;
    },
    isEmpty() {
      if(this.$root.$data.deck.length === 0){
          return true;
      }
      else {
        return false;
      }
    },
    numberOfItems() {
     return this.$root.$data.deck.length
    }
  }
}
</script>
