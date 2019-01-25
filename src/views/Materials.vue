<template>
  <div>
    <div class="container">
      <div class="row markdown-body">
        <div class="col-sm-8">

          <h2>Other Materials</h2>
          <ul>
            <li v-for="item in items" style="margin: 5px">
              <a :href="item.url" v-if="item.isDownloadable">{{item.content}}</a>
              <router-link :to="item.url" v-else style="font-size: 16px">{{item.content}}</router-link>
            </li>
          </ul>
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
  import Golbal from '../components/Global'

  export default {
    name: "Materials",
    components: {
      'footer-bar': Footer,
      'my-sidebar': SideBar
    },
    data() {
      return {
        items: [
          {'content': "Sample Data", 'url': Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['doc-prefix'] +
              Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['branch'] +
              "/docs/Documentation/OtherMaterial-Sample%20Data.txt",
            "isDownable" : true},
          {'content': "Release Notes", 'url': "/Materials/Release Notes", "isDownloadable" : false},
          {'content': "Examples", 'url': "/Example", "isDownloadable" : false},
          {'content': "References", 'url': "/Materials/References","isDownloadable" : false},
        ]
      }
    },
  }
</script>

<style scoped>
  .main>div {
    margin-top: 10px;
  }

  li {
    font-size: 16px;
  }
</style>
