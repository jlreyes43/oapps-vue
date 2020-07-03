<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <oapps-header class="col-12"></oapps-header>
    </div>
    <div class="row">
      <oapps-sidebar class="col-3"></oapps-sidebar>
      <oapps-home class="col-9"></oapps-home>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    oappsHome: Home,
    oappsHeader: Header,
    oappsSidebar: Sidebar
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
