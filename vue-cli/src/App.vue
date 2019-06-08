<template>
  <div id="app">
    <img src="./assets/logo-pixel.gif" @click.prevent="playSound('http://23.237.126.42/ost/pokemon-original-game-soundtrack/wahjdqip/101%20-%20opening.mp3')">

    <nav class=" navbar navbar-expand-lg fixed-top row">

      <!-- <router-link tag="li" class="col" class-active="active" to="/" exact>MAIN</router-link> -->
      <router-link tag="li" class="col" class-active="active" to="/home" exact>HOME</router-link>
      <router-link tag="li" class="col" class-active="active" to="/types" exact>TYPES</router-link>
      <router-link tag="li" class="col" class-active="active" to="/pokemon" exact>POKEMON</router-link>

    </nav>

    <router-view></router-view>

    <!-- 
<app-footer></app-footer> -->

  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Pokedex App'
      }

    },
     methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
  }

</script>

<style lang="scss">
  body {
    background-image: url('./assets/forest-pixel.png');
    // background-image: url('./assets/wp3170165.jpg');
    // background-size: 450px;
    // background-repeat: no-repeat;
    // background-position: center;
    // background-position-y: top;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  // nav li:hover,
  // nav li.router-link-active,
  // nav li.router-link-exact-active {
  //   background-color: rgb(224, 67, 67);
  //   cursor: pointer;
  // }


  img {
    width: 500px;
    height: auto;
    position: relative;
    bottom: 50px;
  }


  #app {
    // font-family: "'Press Start 2P', cursive;";
    // font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1 {
    // position: relative;
    // top: 200px;
    // left: -25px;
    font-size: 65px;
    font-family: "'Press Start 2P', cursive;";
  }

  // router-link {
  //   position: relative;
  //   bottom: 20px;
  //   left: -25px;
  //   font-size: 45px;
  // }

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
