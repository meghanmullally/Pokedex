<template>
  <ul>
    <li
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click="$emit('select', pokemon);"
    >
      #{{ pokemon.number }} {{ pokemon.name }}
    </li>
  </ul>
</template>
<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      pokemons: []
    };
  },
  apollo: {
    pokemons: gql`
      query PokemonList {
        pokemons(first: 150) {
          id
          number
          name
          classification
          types
          image
        }
      }
    `
  }
};
</script>
<style scoped>
ul {
  padding: 0;
  height: 600px;
  overflow: scroll;
}
li {
  color: blue;
  cursor: pointer;
}
li:hover {
  text-decoration: underline;
}
</style>