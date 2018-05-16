<template>
  <div id="app">
    <filters/>
    <div class="beer-table">
      <div class="beer-table__row headers">
          <span>Name</span>
          <span>Brewer</span>
          <span>Type</span>
          <span>Fermentation</span>
          <span>Alcohol</span>
          <span>Cost</span>
      </div>
      <div class="body">
        <span v-for="beer in beerPaginated">
          <div v-on:click="openClose(beer.id)" class="beer-table__row">
            <span>{{ beer.naam }}</span>
            <span>{{ beer.brouwer }}</span>
            <span>{{ beer.type }}</span>
            <span>{{ beer.gisting }}</span>
            <span>{{ Math.floor(beer.perc * 100) }}&percnt;</span>
            <span>&euro;{{ beer.inkoop_prijs }}-</span>
          </div>
          <transition name="fade">
          <div v-if="selected === beer.id" class="beer-table__row beer-card">
            <img v-if="beer.type" :src="imagePath(beer.type)"/>
            <img v-else src="../assets/undefined-beer.png">
              <div class="beer-card">
                <h2>{{ beer.naam }}</h2>
                <ul>
                  <li>Brewer: {{ beer.brouwer }}</li>
                  <li>Type: {{ beer.type }}</li>
                  <li>Fermentation: {{ beer.gisting }}</li>
                  <li>Alcohol: {{ Math.floor(beer.perc * 100) }}&percnt;</li>
                  <li>Price: &euro;{{ beer.inkoop_prijs }}-</li>
                </ul>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
          </div>
        </transition>
        </span>
      </div>
    </div>
    <pagination v-if="this.filtered[0] != 'hey'" :steps="steps" :size="filtered.length"/>
    <pagination v-else :steps="steps" :size="beers.length"/>
  </div>
</template>

<script>
import Vue from 'vue';
import { eventBus } from '../main';

export default {

  name: 'BeerType',
  data: function () {
      return {
          beers: ['hey'],
          selected: 0,
          start: 0,
          end: 20,
          steps: 20,
          filtered: ['hey'],
      };
  },
  computed: {
    beerPaginated: function () {
      if (this.filtered[0] != 'hey') {
        return this.filtered.slice(this.start, this.end);
      }
      return this.beers.slice(this.start, this.end);
    }
  },
  beforeMount (){
    var self = this;
    $.getJSON("http://api.bram-klapwijk.nl/api/beers/", function (data) {
      self.beers = ['hoi']
      self.beers = $.map(data, function(el) { return el });
    });
  },
  created() {
    eventBus.$on('beerTable.pagination', (end) => {
      this.end = end;
      this.start = Math.floor(end - this.steps);
    });

    eventBus.$on('beerTable.filter', (req) => {
      this.filtered = $.grep(this.beers, function( a ) {
        return a.naam.search(req) !== -1;
      });
    });
  },
  methods: {
    openClose : function (id) {
      if (this.selected != id) {
        this.selected = id;
      } else {
        this.selected = 0;
      }
    },

    imagePath: function (type) {
      return require('../assets/' + type + '-beer.png');
    },
  }
}
</script>

<style scoped>
  #app {
    width: 100%;
    /* background-color: #655444; */
    text-align: center;
    line-height: 300%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    text-overflow: none;
  }

  .beer-card {
    padding-top: 1%;
    padding-bottom: 1%;
  }

  .beer-table {
    width: 100%;
    margin: 0 auto;
    text-align: left;
    background-color: white;
  }

  .headers {
      font-weight: bold;
  }

  .beer-table__row {
      border-bottom: solid 1px grey;
      display: flex;
  }

  .beer-table__row > span {
      flex: 1;
  }
</style>
