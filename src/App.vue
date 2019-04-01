<template>
  <div id="app">
    <div class="text">
      <h1>
        VUE EMOJI COMPONENT
        </h1>
      <p>
        Choose an emoji from list and ii will be placed at contentEditable &lt;div&gt;
      </p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.text {
  text-align: center;
}

</style>
