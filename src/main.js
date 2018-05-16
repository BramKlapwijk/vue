import Vue from 'vue'
import App from './App.vue'

// components
import Navigation from './components/Navigation.vue';
import Header from './components/Header.vue';
import BeerMonth from './components/BeerMonth.vue';
import BeerTable from './components/BeerTable.vue';
import Pagination from './components/Pagination.vue';
import Filters from './components/Filters.vue';

Vue.config.productionTip = false

Vue.component('navigation', Navigation);
Vue.component('title-bar', Header);
Vue.component('beer-month', BeerMonth);
Vue.component('beer-table', BeerTable);
Vue.component('pagination', Pagination);
Vue.component('filters', Filters);

export const eventBus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app')
