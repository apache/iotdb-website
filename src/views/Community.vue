<template>
  <div>
    <div class="container">
      <div class="row markdown-body">
        <div class="col-sm-8" v-if="content() === 'MailingList'">
          <vue-markdown :source="community['MailingList']"></vue-markdown>
        </div>
        <div class="col-sm-8" v-else-if="content() === 'ContributingToIoTDB'">
          <vue-markdown :source="community['ContributingToIoTDB']"></vue-markdown>
        </div>
        <div class="col-sm-8" v-else-if="content() === 'IssueTracker'">
          <vue-markdown :source="community['IssueTracker']"></vue-markdown>
        </div>
        <div class="col-sm-8" v-else-if="content() === 'PowerBy'">
          <vue-markdown :source="community['PowerBy']"></vue-markdown>
        </div>
        <div class="col-sm-8" v-else-if="content() === 'ProjectCommitters'">
          <vue-markdown :source="community['ProjectCommitters']"></vue-markdown>
        </div>
        <div class="col-sm-8" v-else>
          <vue-markdown :source="community['ProjectHistory']"></vue-markdown>
        </div>
        <my-sidebar/>
      </div>
    </div>
    <br>
    <br>
    <br>
    <footer-bar/>
  </div>
</template>

<script>
  import 'highlight.js/styles/github.css'
  import Footer from "../components/FooterFixed"
  import SideBar from '../components/SideBar'
  import markdown from 'vue-markdown'


  export default {
    name: "Community",
    components: {
      'footer-bar': Footer,
      'my-sidebar': SideBar,
      'vue-markdown':markdown,
    },
    data() {
      return {
        msg: 'Welcome to Community Page',
        // content: this.$route.params.$route

        community: {
          ContributingToIoTDB: require("../assets/markdown/Community/Contributing to IoTDB.md"),
          IssueTracker: require("../assets/markdown/Community/Issue Tracker.md"),
          MailingList: require("../assets/markdown/Community/Mailing Lists & Resources.md"),
          PowerBy: require("../assets/markdown/Community/Powered By.md"),
          ProjectCommitters: require("../assets/markdown/Community/Project Committers.md"),
          ProjectHistory: require("../assets/markdown/Community/Project History.md"),
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
