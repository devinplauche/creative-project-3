<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>

  <h2> Deck Size for Clash Royale is 8 Unique cards</h2>
  <CardList :cards="cards" />
  <a href="https://github.com/BYU-CS-260-Winter-2020/lab-3b-grocery-store-devinplauche.git">Github</a>
</div>

</template>

<script>
import CardList from "../components/CardList.vue"
export default {
  name: 'Home',
  components: {
    CardList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    cards() {
      console.log(this.$root.$data.cards[0].name)
      return this.$root.$data.cards.filter(card => card.name.toLowerCase().search(this.searchText) >= 0);
    }
  },

}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
