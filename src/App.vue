<template>
  <div id="app">
    <title-bar/>
    <div class="highlands">
      <p>BEER</p>
      <img src="./assets/clover_white.png">
      <h1>Ol'Donnels</h1>
    </div>
    <hr>
    <a name="beer-month"></a>
    <beer-month/>
    <hr>
    <a name="beer-table"></a>
    <beer-table/>
    <hr>
    <footer>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
  body {
    margin: 0;
  }

  hr {
    margin: 0;
    border: 10px solid #1c1c1c;
  }

  footer {
      background-color: #1c1c1c;
      color: white;
  }

  .highlands {
    background-image: url('./assets/highlands.jpg');
    background-position: top;
    background-size: cover;

    text-align: center;
    vertical-align: center;
    font-family: 'Lobster', cursive;
    font-size: 170%;
    color: white;

    height: 600px;
    width: 100%;
    padding-top: 100px;
  }
</style>
