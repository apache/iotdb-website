<template>
  <div class="main container" style="max-width: 1200px; min-width: 900px">
    <div class="row">
      <div class="col-md-8 col-sm-12 download-article">
        <h1 class="download-title">Release Version</h1>
        <p>Please choose a version:
          <select class="download-version-select" v-model="selectVersionObj">
            <option v-for="iotdbVersion in downloadVersionList" :value="iotdbVersion">{{iotdbVersion.text}}</option>
          </select>
        </p>
        <p>Download IoTDB for Linux/MacOS:<a class="link-color" :href="selectVersionObj.linuxUrl"> {{selectVersionObj.text}} Release.tar</a></p>
        <p>Download IoTDB for Windows:<a class="link-color" :href="selectVersionObj.windowsUrl"> {{selectVersionObj.text}} Release.zip</a></p>
        <p>Main features and change list of each version, please check <a class="link-color" :href="releaseNotesUrl">Release Notes</a>.</p>
        <h1 class="download-title">Get Source Code</h1>
        <p>Go to our <a class="link-color" :href="iotdbGithubUrl">Github</a>, have fun with IoTDB source code!</p>
      </div>
      <my-sidebar/>
    </div>
  </div>
</template>

<script>
  import SideBar from '../components/SideBar'
  export default {
    name: "Download",
    components: {
      'my-sidebar': SideBar
    },
    data() {
      return {
        iotdbGithubUrl: 'https://github.com/apache/incubator-iotdb',
        releaseNotesUrl: 'https://github.com/apache/incubator-iotdb',
        selectVersionObj: {},
        downloadVersionList: [
          {text: 'IoTDB v0.7', linuxUrl: 'https://github.com/apache/incubator-iotdb', windowsUrl: 'https://github.com/apache/incubator-iotdb'},
          {text: 'IoTDB v0.8', linuxUrl: 'https://github.com/apache/incubator-iotdb', windowsUrl: 'https://github.com/apache/incubator-iotdb' },
          {text: 'IoTDB v0.9', linuxUrl: 'https://github.com/apache/incubator-iotdb', windowsUrl: 'https://github.com/apache/incubator-iotdb' }
        ]
      }
    },
    created() {
      this.selectVersionObj = this.downloadVersionList[0];
    }
  }
</script>

<style scoped>
  .main>div {
    margin-top: 10px;
  }
  .download-title {
    margin-bottom: 30px;
    font-size: 60px;
    color: #fcac45;
  }
  .download-article>p {
    padding: 14px 12px 10px 12px;
    font-size: 20px;
  }
  .link-color {
    color: #fcac45;
  }
  .download-version-select {
    -webkit-appearance: none;   /* google */
    -moz-appearance: none;  /* firefox */
    appearance: none;       /* IE */
    border: none;
    outline: none;
    border-radius:30px;
    width: 150px;
    padding-left: 15px;
    background: #fcac45 url("../assets/img/arrow.png") no-repeat scroll right center;
  }
  select::-ms-expand {
    display: none;
  }
</style>

