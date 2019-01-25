<template>
  <div>
    <div class="container">
      <div class="row text-center info">
        <h1 style="font-size: 120px; padding-top: 100px">4   0   4</h1>
        <h1 style="font-weight: bolder">PAGE NOT FOUND</h1>
        <p>The page you are looking for was moved, removed,<br />
          renamed or might never existed.</p>
        <a href="#/" class="link-color btn">Go Home</a>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
  import 'highlight.js/styles/github.css'
  import Footer from "../components/FooterFixed"
  export default {
    name: "NotFound",
    components: {
      'footer-bar': Footer
    }
  }
</script>

<style scoped>
  .link-color {
    color: #fcac45;
  }
</style>
