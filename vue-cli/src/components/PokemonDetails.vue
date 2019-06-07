<template>
  <div>
    <h1>#{{ pokemon.number }} {{ pokemon.name }}</h1>
    <img :src="pokemon.image" />
    <ul>
      <li>Classification: {{ pokemon.classification }}</li>
      <li>Types: {{ pokemon.types.join(", ") }}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      pokemon: Object
    }
  };

</script>
<style scoped>
  ul {
    list-style-type: none;
  }

</style>
