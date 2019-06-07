<template>
  <div id="app">
  


    <router-view/>
        <div>Select a Pokemon!</div>

 <PokemonList class="side" @select="selectPokemon" />
    <PokemonDetails class="main" v-if="selectedPokemon" :pokemon="selectedPokemon"/>


  </div>
</template>

<script>
  import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
export default {
  name: "App",
  components: {
    PokemonList,
    PokemonDetails,
  },
  
  data() {
    return {
      selectedPokemon: null
    };
  },
  
  methods: {
    selectPokemon(pokemon) {
      this.selectedPokemon = pokemon;
    }
  }
};

</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
