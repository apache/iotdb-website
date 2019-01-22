<template>
  <div>
    <div class="container">
      <div class="row markdown-body">
        <div class="col-sm-8" v-if="content() === 'MailingList'">
          <MailingLists></MailingLists>
        </div>
        <div class="col-sm-8" v-else-if="content() === 'ContributingToIoTDB'">
          <ContributingToIoTDB></ContributingToIoTDB>
        </div>
        <div class="col-sm-8" v-else-if="content() === 'IssueTracker'">
          <IssueTracker></IssueTracker>
        </div>
        <div class="col-sm-8" v-else-if="content() === 'PowerBy'">
          <PowerBy></PowerBy>
        </div>
        <div class="col-sm-8" v-else-if="content() === 'ProjectCommitters'">
          <ProjectCommitters></ProjectCommitters>
        </div>
        <div class="col-sm-8" v-else>
          <ProjectHistory></ProjectHistory>
        </div>
        <my-sidebar/>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
  import ContributingToIoTDB from '../assets/markdown/Community/Contributing to IoTDB.md'
  import IssueTracker from '../assets/markdown/Community/Issue Tracker.md'
  import MailingLists from '../assets/markdown/Community/Mailing Lists & Resources.md'
  import PowerBy from '../assets/markdown/Community/Powered By.md'
  import ProjectCommitters from '../assets/markdown/Community/Project Committers.md'
  import ProjectHistory from '../assets/markdown/Community/Project History.md'
  import 'highlight.js/styles/github.css'
  import Footer from "../components/FooterFixed"
  import SideBar from '../components/SideBar'

  export default {
    name: "Community",
    components: {
      'footer-bar': Footer,
      'my-sidebar': SideBar,
      ContributingToIoTDB, IssueTracker, MailingLists, PowerBy, ProjectCommitters, ProjectHistory
    },
    data() {
      return {
        msg: 'Welcome to Community Page'
        // content: this.$route.params.$route
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
