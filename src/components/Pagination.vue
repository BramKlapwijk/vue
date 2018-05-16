<template>
  <div class="pagination">
    <button v-if="start > 0" class="btn btn-success" v-on:click="setPaginate((start-steps),(end-steps))">Previous</button>
    <span v-for="index in amount" v-if="shownTiles(index)" v-bind:class="{ 'selected' : end === Math.ceil(index * steps) }" v-on:click="tile(index)">{{ index }}</span>
    <button v-if="end < Math.ceil(amount*steps)" class="btn btn-success" v-on:click="setPaginate((start+steps),(end+steps))">Next</button>
  </div>
</template>

<script>
import Vue from 'vue';
import { eventBus } from '../main';

export default {

  name: 'Pagination',
  props: [
    'size',
    'steps'
  ],
  data: function () {
      return {
          start: 0,
          end: this.steps,
      };
  },
  methods: {

    setPaginate: function (start, end) {
      this.start = start;
      this.end = end;
      eventBus.$emit('beerTable.pagination', end);
    },

    tile: function (i) {
      this.start = Math.floor(i * this.steps - this.steps);
      this.end = Math.floor(i * this.steps);
      eventBus.$emit('beerTable.pagination', this.end);
    },

    shownTiles: function (index) {
      return index > Math.floor(this.end/this.steps - 8) && index < Math.floor(this.end/this.steps + 8);
    },
  },
  computed: {
    amount: function () {
      return Math.ceil(this.size/this.steps);
    }
  }
}
</script>

<style scoped>
  .pagination {
      background-color: white;
      display: inline-block;
  }

  .pagination span {
      color: black;
      float: left;
      padding: 8px 16px;
      text-decoration: none;
  }

  .btn {
    margin-top: 15px;
    float: left;
  }

  .selected {
    background-color: #218838;
    border-radius: 5px;
  }

  .pagination span:hover:not(.active) {
      background-color: #ddd;
      border-radius: 5px;
  }
</style>
