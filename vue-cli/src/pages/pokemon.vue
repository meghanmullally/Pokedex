<template>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item" v-for="pokemon in api.results" v-text="pokemon.name" :key="pokemon.api"></li>
    </ul>


    <button class="btn btn-primary" v-if="api.previous" @click="previous">Previous</button>
    <button class="btn btn-primary" v-if="api.next" @click="next">Next</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        api: {},
      }
    },
    created() {
      this.fetchPokemons();
    },
    methods: {
      fetchPokemons(url = 'https://pokeapi.co/api/v2/pokemon?limit=151') {
        axios.get(url)
          .then(({ data }) => this.api = data);
      },
      next() {
        this.fetchPokemons(this.api.next);
      },
      previous() {
        this.fetchPokemons(this.api.previous);
      }
    }
  }
</script>
<style>

.container {
  padding: 20px;
  margin: 10px;
}

/* .list-group-item {
  display: inline;  
} */

</style>
