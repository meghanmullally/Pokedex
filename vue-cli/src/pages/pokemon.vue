<template>
  <div class="container">



    <ol class="nes-list is-circle">
      <li id="pokemonList" class="list-group-item" v-for="pokemon in api.results" v-text="pokemon.name"
        :key="pokemon.api"></li>
    </ol>


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
          .then(({
            data
          }) => this.api = data);
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

  #pokemonList {
    display: flex;
    align-items: center;
    margin: 20px;
    color: black;
  }

</style>
