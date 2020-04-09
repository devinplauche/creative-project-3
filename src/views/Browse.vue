<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Common')" href="#" class="pure-menu-link">Common</a></li>
      <li class="pure-menu-item"><a @click="select('Rare')" href="#" class="pure-menu-link">Rare</a></li>
      <li class="pure-menu-item"><a @click="select('Epic')" href="#" class="pure-menu-link">Epic</a></li>
      <li class="pure-menu-item"><a @click="select('Legendary')" href="#" class="pure-menu-link">Legendary</a></li>
    </ul>
  </div>
  <CardList :cards="cards" />
</div>
</template>

<script>
import CardList from "../components/CardList.vue"
export default {
  name: 'Browse',
  components: {
    CardList
  },
  data() {
    return {
      rarity: '',
    }
  },
  computed: {
    cards() {
      return this.$root.$data.cards.filter(card => card.rarity === this.rarity);
    }
  },
  methods: {
    select(rarity) {
      this.rarity = rarity;
    }
  }
}
</script>
