<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <vue-markdown v-bind:source="example" >{{returnTop}}</vue-markdown>
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
    name: "Example",
    components: {
      'footer-bar': Footer,
      'my-sidebar': SideBar,
      'vue-markdown': markdown,
    },
    data() {
      return {
        msg: 'Welcome to Example Page',
        example: ""
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      returnTop: function () {
        document.querySelector("#pull-request").scrollIntoView(true);
      },
      fetchData() {
        let url = "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/OtherMaterial-Examples.md";
        const pointer = this;
        axios.get(url)
          .then(function (response) {
            pointer.example = response.data;
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

