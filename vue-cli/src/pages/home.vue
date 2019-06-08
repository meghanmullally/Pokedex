<template>

<div id="app">
{{info}}


</div>


</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=150')
      .then(response => (this.info = response))
  }
}

</script>

<style>

</style>