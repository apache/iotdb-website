<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <markdown></markdown>
        </div>
        <my-sidebar/>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
  import markdown from '../../assets/markdown/Community/Mailing Lists & Resources.md'
  import 'highlight.js/styles/github.css'
  import Footer from "../../components/FooterFixed"
  import SideBar from '../../components/SideBar'

  export default {
    name: "CommunityMailingList",
    components: {
      'footer-bar': Footer,
      'my-sidebar': SideBar,
      markdown,
    },
    data() {
      return {
        msg: 'Welcome to Community Page'
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

