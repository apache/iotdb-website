<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
    export default {
        name: "Development",
      data() {
        return {
          msg: 'Welcome to Development Page'
        }
      }
    }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
