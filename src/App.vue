<template>
  <div id="app">
    <oapps-header></oapps-header>
    <oapps-home></oapps-home>
    <oapps-sidebar></oapps-sidebar>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
