<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8" v-if="locate='Have Questions'">
          <vue-markdown v-bind:source="development" :toc="true" :toc-anchor-link-symbol="toc"></vue-markdown>
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
  import Footer from "../components/FooterFixed"
  import SideBar from '../components/SideBar'
  import markdown from 'vue-markdown'
  import axios from 'axios'

  export default {
    name: "Development",
    components: {
      'footer-bar': Footer,
      'my-sidebar': SideBar,
      'vue-markdown': markdown,
    },
    data() {
      return {
        msg: 'Welcome to Community Page',
        toc: "",
        development: "",
        locate: ""
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
          "Have Questions": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Development.md",
          "How to contribute": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Development.md"
        };
        const locate ={
          "Have Questions": "#have-questions",
          "How to contribute": "#how-to-contribute"
        }
        const content = this.content();
        let url = null;
        if (content in dict) {
          url = dict[content];
        } else {
          this.$router.push('/404');
        }
        this.locate = content;
        const pointer = this;
        axios.get(url)
          .then(function (response) {
            pointer.development = response.data;
          })
        location.href = locate[content];
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
