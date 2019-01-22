<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8" v-if="content() === 'UsefulDeveloperTools'">
          <vue-markdown :source="development['UsefulDeveloperTools']"></vue-markdown>
        </div>
        <div class="col-sm-8" v-else="content() === 'VersioningPolicy'">
          <vue-markdown :source="development['VersioningPolicy']"></vue-markdown>
        </div>
        <my-sidebar/>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
  import Footer from "../components/FooterFixed"
  import SideBar from '../components/SideBar'
  import markdown from 'vue-markdown'

  export default {
    name: "Development",
    components: {
      'footer-bar': Footer,
      'my-sidebar': SideBar,
      'vue-markdown':markdown,
    },
    data() {
      return {
        msg: 'Welcome to Community Page',
        development: {
          UsefulDeveloperTools: require("../assets/markdown/Development/Useful Developer Tools.md"),
          VersioningPolicy: require("../assets/markdown/Development/Versioning Policy.md"),
        }
      }
    },
    methods: {
      content: function () {
        return this.$route.params.content
      }
    }
  }
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  body {
    font-family: Georgia, "Times New Roman", Times, serif;
    color: #555;
  }

  .pager > li > a {
    width: 140px;
    padding: 10px 20px;
    text-align: center;
    border-radius: 30px;
  }

  .blog-footer p:last-child {
    margin-bottom: 0;
  }

</style>
