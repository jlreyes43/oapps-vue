<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <oapps-header class="col-12"></oapps-header>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    oappsHeader: Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.outline{
  outline: 1px black solid;
}
</style>
