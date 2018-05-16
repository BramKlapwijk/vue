<template>
  <div class="p-3">
    <h1 class="px-3"><img src="../assets/logo.png"> Ol'Donnels beers</h1>
    <navigation/>
  </div>
</template>

<script>

export default {
  name: 'title-bar',
  components: {
  }
}
</script>

<style scoped>
  div {
    display: flex;
    background-color: #1c1c1c;
    width: 100%;
    color: white;
  }
  h1 {
    flex: .7;
  }
</style>
