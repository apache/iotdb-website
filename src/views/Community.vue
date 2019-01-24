<template>
  <div>
    <div class="container">
      <div class="row markdown-body">
        <div class="col-sm-8">
          <vue-markdown v-bind:source="community"></vue-markdown>
        </div>
        <my-sidebar/>
      </div>
      <div class="col-sm-8" v-if="this.content()==='Project Committers'">
        <router-link :to=development class="nav-link"><span style="font-size: medium">Want to join us? Learn How to Contribute </span>
        </router-link>
      </div>
    </div>
    <br>
    <br>
    <br>
    <footer-bar/>
  </div>
</template>

<script>
  import Footer from "../components/FooterFixed"
  import SideBar from '../components/SideBar'
  import markdown from 'vue-markdown'
  import axios from 'axios'


  export default {
    name: "Community",
    components: {
      'footer-bar': Footer,
      'my-sidebar': SideBar,
      'vue-markdown': markdown,
    },
    data() {
      return {
        msg: 'Welcome to Community Page',
        community: "",
        development: "/Development/How to contribute"
      }
    },
    created() {
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      content: function () {
        return this.$route.params.content
      },
      fetchData() {
        const dict = {
          "Powered By": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Community-Powered%20By.md",
          "Project Committers": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Community-Project%20Committers.md",
          "History & Vision": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Community-History%26Vision.md"
        };
        const content = this.content();
        let url = null;
        if (content in dict) {
          url = dict[content];
        } else {
          this.$router.push('/404');
        }
        const pointer = this;
        axios.get(url)
          .then(function (response) {
            pointer.community = response.data;
          })
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
