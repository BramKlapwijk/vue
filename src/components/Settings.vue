<template>
    <ul id="app">

        <li v-for="(selects, key) in selected">
            {{ key }}
            <input type="checkbox" v-on:click="send(key)" :checked="selects" v-bind:name="key"/>
        </li>
    </ul>
</template>

<script>
    import Vue from 'vue';
    import {eventBus} from '../main';

    export default {

        name: 'Settings',
        props: [
            'selected'
        ],

        methods: {
            send: function (name) {
                eventBus.$emit('beerTable.columns', name);
            }
        }
    }
</script>

<style scoped>
    #app {
        background: whitesmoke;
        box-shadow: 10px 10px 5px grey;
        right: 40px ;
        position: absolute;
        list-style: none;
        text-align: left;
    }
</style>
