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
            content: '019	Rattata	Rattata, 020 Raticate Raticate, 052 Meowth Meowth, 053 Persian Persian, 108 Lickitung Lickitung, 113 Chansey Chansey, 115 Kangaskhan Kangaskhan, Kangaskha Mega Kangaskhan, 128 Tauros Tauros, 132 Ditto Ditto, 133 Eevee Eevee, Eevee Partner, Eevee, 137 Porygon Porygon, 143 Snorlax Snorlax ',


            open: true
          },
          type2: {
            title: 'Fire',
            content: '004	Charmander	Charmander, 005	Charmeleon	Charmeleon, 037	Vulpix	Vulpix, 038	Ninetales	Ninetales, 058	Growlithe	Growlithe, 059	Arcanine	Arcanine, 077	Ponyta	Ponyta, 078	Rapidash	Rapidash, 126	Magmar	Magmar, 136	Flareon	Flareon',
            open: false
          },
          type3: {
            title: 'Water',
            content: '007	Squirtle, 008	Wartortle	, 009	Blastoise, Mega, Blastoise, 054	Psyduck, 055	Golduck, 060	Poliwag, 061	Poliwhirl	, 086	Seel	, 090	Shellder, 098	Krabb, 099	Kingler, 116	Horsea, 117	Seadra, 118	Goldeen	, 119	Seaking	, 120	Staryu, 129	Magikarp, 134	Vaporeon ',
            open: false
          },
          type4: {
            title: 'Electric',
            content: '025	Pikachu, 100	Voltorb	Voltorb, 026	Raichu	Raichu, 101	Electrode	Electrode, 125	Electabuzz	Electabuzz, 135	Jolteon	Jolteon ',
            open: false
          },
          type5: {
            title: 'Grass',
            content: '114	Tangela ',
            open: false
          },
          type6: {
            title: 'Ice',
            content: '037	Vulpix	Vulpix Alola Form',
            open: false
          },
          type7: {
            title: 'Fighting',
            content: '056	Mankey	Mankey, 057	Primeape	Primeape, 066	Machop	Machop, 067	Machoke	Machoke, 068	Machamp	Machamp, 106	Hitmonlee	Hitmonlee, 107	Hitmonchan	Hitmonchan',
            open: false
          },
          type8: {
            title: 'Poison',
            content: '023	Ekans, r024	Arbok, r029	Nidoran♀, r030	Nidorina, r032	Nidoran♂, 033	Nidorino, r088	Grimer, 089	Muk, 109	Koffing, 110	Weezing ',
            open: false
          },
          type9: {
            title: 'Ground',
            content: '027	Sandshrew	Sandshrew, 028	Sandslash	Sandslash, 050	Diglett	Diglett, 051	Dugtrio	Dugtrio, 104	Cubone	Cubone, 105	Marowak	Marowak ',
            open: false
          },
          type10: {
            title: 'Flying',
            content: '006	Charizard, Charizard Y, 012	Butterfree, 016	Pidgey, 017	Pidgeotto, 018	Pidgeot, Mega Pidgeott, 021	Spearow, 022	Fearow, 041	Zubat, 042	Golbat, 083	Farfetchd, 084 Doduo, 085	Dodrio, 123	Scyther	 127	Pinsir	Mega,130	Gyarados, 142	Aerodactyl, Aerodactyl	Meg, 144	Articu, 145	Zapdo, 146	Moltr, 149	Dragonite ',
            open: false
          },
          type11: {
            title: 'Psychic',
            content: '063	Abra	Abra, 064	Kadabra	Kadabra, 065	Alakazam	Alakazam Alakazam	Mega Alakazam, 096	Drowzee	Drowzee, 097	Hypno	Hypno, 150	Mewtwo,	Mega Mewtwo Y, 151	Mew	Mew',
            open: false
          },
          type12: {
            title: 'Bug',
            content: '010	Caterpie, 011	Metapod	, 127	Pinsir ',
            open: false
          },
          type13: {
            title: 'Rock',
            content: '074	Geodude, 075	Graveler, 076	Golem, 095	Onix, 138	Omanyt, 139	Omastar, 141	Kabutops, 142	Aerodactyl,	Mega Aerodactyl ',
            open: false
          },
          type14: {
            title: 'Ghost',
            content: '092	Gastly, 093	Haunter, 094	Gengar, Gengar	Mega',
            open: false
          },
          type15: {
            title: 'Dragon',
            content: '147	Dratini, 148	Dragonair, 149 Dragonite',

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
