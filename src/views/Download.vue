<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <h2 class="download-title">Release Version</h2>
          <p>Please choose a version:
            <select class="download-version-select" v-model="selectVersionObj">
              <option v-for="iotdbVersion in downloadVersionList" :value="iotdbVersion">{{iotdbVersion.text}}</option>
            </select>
          </p>
          <ul>
            <li style="margin: 5px">Download IoTDB for Linux/MacOS:<a class="link-color" :href="selectVersionObj.linuxUrl"> {{selectVersionObj.text}} Release.tar</a></li>
            <li style="margin: 5px">Download IoTDB for Windows:<a class="link-color" :href="selectVersionObj.windowsUrl"> {{selectVersionObj.text}} Release.zip</a></li>
          </ul>
          <p>Main features and change list of each version, please check <a class="link-color" :href="releaseNotesUrl">Release Notes</a>.</p>
          <h2 class="download-title">Get Source Code</h2>
          <p>Go to our <a class="link-color" :href="iotdbGithubUrl">Github</a>, have fun with IoTDB source code!</p>
        </div>
        <my-sidebar/>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
  import SideBar from '../components/SideBar'
  import Footer from '../components/FooterFixed'
  export default {
    name: "Download",
    components: {
      'footer-bar': Footer,
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
      this.selectVersionObj = this.downloadVersionList[1];
    }
  }
</script>

<style scoped>
  .main>div {
    margin-top: 10px;
  }
  .download-title {
    margin-bottom: 15px;
    margin-top: 15px;
    color: #fcac45;
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

