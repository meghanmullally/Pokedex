<template>
  <div id="app">

    <div class="accordion">
      <dl class="nes-container is-rounded is-dark" v-for="item in items" :key="item.id">
        <dt v-on:click="item.open =!item.open">{{item.title}}</dt>
        <dd v-if="item.open">{{item.content}}</dd>
      </dl>

    </div>



  </div>
</template>
<style>


</style>

<script>
  // import Vue from 'vue';
  // import axios from 'axios'


  export default {
    data() {
      return {

        items: {
          type1: {
            title: 'Normal',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id,',
            open: true
          },
          type2: {
            title: 'Fire',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',
            open: false
          },
          type3: {
            title: 'Water',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',
            open: false
          },
          type4: {
            title: 'Electric',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',
            open: false
          },
          type5: {
            title: 'Grass',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',
            open: false
          },
          type6: {
            title: 'Ice',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',
            open: false
          },
          type7: {
            title: 'Fighting',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',
            open: false
          },
          type8: {
            title: 'Poison',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',
            open: false
          },
          type9: {
            title: 'Ground',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',
            open: false
          },
          type10: {
            title: 'Flying',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',
            open: false
          },
          type11: {
            title: 'Psychic',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',
            open: false
          },
          type12: {
            title: 'Bug',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',
            open: false
          },
          type13: {
            title: 'Rock',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',
            open: false
          },
          type14: {
            title: 'Ghost',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',
            open: false
          },
          type15: {
            title: 'Dragon',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit id, ',

          }
        }

      }
    }
  }

</script>
<style>
  .accordion {
    width: 420px;
    margin: 0 auto;
    /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%); */
  }

  .accordion dt {
    padding: 15px 25px;
    border: 1px solid #eeeeee;
    text-align: center;
    border-radius: 4px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Press Start 2P', cursive;
  }

</style>
