<template>
  <nav>
    <ul class="py-3">
      <li><a href="#beer-month">Beer of the month</a></li>
      <li><a href="#beer-table">All beers</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  nav{
    text-align: center;
  }
  ul {
    list-style-type: none;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  li a {
    text-decoration: none;
    color: white;
  }
  li a:hover {
    color: grey;
  }
</style>
