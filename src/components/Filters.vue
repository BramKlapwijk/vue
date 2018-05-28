<template>
    <div id="app">
        <input class="naam form-control" v-on:keypress="send" type="text" name="naam" placeholder="name"/>
        <i class="fa fa-cogs" v-on:click="settings = !settings"></i>
        <settings v-if="settings" :selected="columns"/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {eventBus} from '../main';

    export default {

        name: 'Filters',
        props: [
            'size',
            'steps',
            'columns'
        ],
        data: function () {
            return {
                start: 0,
                end: this.steps,
                settings: false
            };
        },
        methods: {
            send: function (event) {
                let inputValue = event.which;
                let obj = $('.naam')[0];

                if (inputValue >= 65 && inputValue <= 120) {
                    eventBus.$emit('beerTable.filter', obj.value + event.key);
                } else {
                    eventBus.$emit('beerTable.filter', obj.value);
                }
            }
        }
    }
</script>

<style scoped>
    .naam {
        width: 200px;
    }
    div {
        display: flex;
    }

    div i {
        margin-left: auto;
    }
</style>
