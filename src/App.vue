<template>
  <div id="app">
    <my-navbar/>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  export default {
    name: 'App',
    components: {
      'my-navbar': NavBar,
    }
  }
</script>

<style>
  #app {
    color: #2c3e50;
  }

  body{
    font-family: 'Lato', sans-serif;
  }
</style>
