<template>
  <div id="app">
    <img src="../static/school.png" alt="school">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  max-width: 1100px;
  margin: 0 auto;
}
body {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
}
</style>
