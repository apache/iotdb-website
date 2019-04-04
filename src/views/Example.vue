<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <vue-markdown v-bind:source="md" :toc="true" :toc-anchor-link-symbol="toc" :postrender="parse"></vue-markdown>
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
  import Golbal from '../components/Global'

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
        md: "",
        toc: ""
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        let url = Golbal.SUPPORT_VERSION[Golbal.DEFAULT_VERSION]['doc-prefix'] +
          Golbal.SUPPORT_VERSION[Golbal.DEFAULT_VERSION]['branch'] +
          "/docs/Documentation/OtherMaterial-Examples.md";
        const pointer = this;
        axios.get(url)
          .then(function (response) {
            pointer.md = response.data;
          })
      },
      parse(html){
        return Golbal.isReadyForPrerender(html)
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

