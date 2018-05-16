<template>
  <div id="app">
    <input class="naam form-control" v-on:keypress="send" type="text" name="naam" placeholder="name"/>
  </div>
</template>

<script>
import Vue from 'vue';
import { eventBus } from '../main';

export default {

  name: 'Filters',
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
    send: function (event) {
      let obj = $('.naam')[0];
      eventBus.$emit('beerTable.filter', obj.value);
    }
  }
}
</script>

<style scoped>
</style>
