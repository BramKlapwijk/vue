<template>
  <div class="beer_month">
    <div>
      <div class="center">
        <div class="sides">
          {{ beer.brouwer }}<br>
          {{ beer.type }}
        </div>

        <div class="images">
          <h1>Try this one</h1>
          <img v-if="beer.type" :src="imagePath"/>
          <img v-else src="../assets/undefined-beer.png">
          <h2>{{ beer.naam }}</h2>
        </div>

        <div class="sides">
          {{ beer.gisting }}<br>
          {{ perc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {

  name: 'BeerMonth',
  data: function () {
      return {
          beer: []
      };
  },
  computed: {
    imagePath: function () {
      return require('../assets/' + this.beer.type + '-beer.png');
    },

    perc: function () {
      return Math.floor(this.beer.perc * 100)+'%';
    }
  },
  beforeMount (){
    var self = this;
    let id = Math.floor(Math.random() * 750);;
    $.getJSON("http://api.bram-klapwijk.nl/api/beers/"+ id, function (data) {
      self.loaded = true;
      self.beer = data;
    });
  }
}
</script>

<style scoped>
  .beer_month {
    width: 100%;
    background-color: #E7E4DB;
    text-align: center;
    line-height: 300%;
    padding-bottom: 3%;
  }

  .center {
    padding-top: 3%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .images {
    align-self: center;
  }

  .sides {
    width: 25%;
  }

  h1 {
    font-size: 250%;
  }

  h2 {
    color: #6B2714;
  }

  hr {
    margin: 0;
    border: 10px solid #1c1c1c;
  }
</style>
