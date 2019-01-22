<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8" v-if="content() === 'UsefulDeveloperTools'">
          <UsefulDeveloperTools></UsefulDeveloperTools>
        </div>
        <div class="col-sm-8" v-else="content() === 'VersioningPolicy'">
          <VersioningPolicy></VersioningPolicy>
        </div>
        <my-sidebar/>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
  import UsefulDeveloperTools from '../assets/markdown/Development/Useful Developer Tools.md'
  import VersioningPolicy from '../assets/markdown/Development/Versioning Policy.md'
  import 'highlight.js/styles/github.css'
  import Footer from "../components/FooterFixed"
  import SideBar from '../components/SideBar'

  export default {
    name: "CommunityMailingList",
    components: {
      'footer-bar': Footer,
      'my-sidebar': SideBar,
      UsefulDeveloperTools,VersioningPolicy
    },
    data() {
      return {
        msg: 'Welcome to Community Page'
      }
    },
    methods :{
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

  @media (min-width: 1200px) {
    .container {
      width: 970px;
    }
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
