<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8 download-section">
          <h2 class="download-title">Release Version</h2>
          <p>Please choose a version: &nbsp;&nbsp;
            <select class="download-version-select" v-model="selectVersionObj">
              <option v-for="iotdbVersion in downloadVersionList" :value="iotdbVersion">{{iotdbVersion.text}}</option>
            </select>
          </p>
          <ul>
            <li style="margin: 5px">Download IoTDB Binaries:<a class="link-color" :href="selectVersionObj.binariesUrl"> {{selectVersionObj.text}} Release</a>
              <span v-if="selectVersionObj.binariesSHA512Url!==''">[<a class="link-color" :href="selectVersionObj.binariesSHA512Url"> SHA512</a>]</span>
              <span v-if="selectVersionObj.binariesASCUrl!==''">[<a class="link-color" :href="selectVersionObj.binariesASCUrl"> ASC</a>]</span>
            </li>
            <li style="margin: 5px" v-if="selectVersionObj.sourcesUrl!==''">
              Download IoTDB Sources:<a class="link-color" :href="selectVersionObj.sourcesUrl"> {{selectVersionObj.text}} Sources</a>
              <span v-if="selectVersionObj.sourcesSHA512Url!==''">[<a class="link-color" :href="selectVersionObj.sourcesSHA512Url"> SHA512</a>]</span>
              <span v-if="selectVersionObj.sourcesASCUrl!==''">[<a class="link-color" :href="selectVersionObj.sourcesASCUrl"> ASC</a>]</span>
            </li>
            </ul>
          <p>Main features and change list of each version, please check <router-link to="/Materials/Release Notes">release notes</router-link>.</p>

          <h2 class="download-title">Verifying Hashes and Signatures</h2>
          <p>
            Along with our releases, we also provide sha512 hashes in *.sha512 files and
            cryptographic signatures in *.asc files. The Apache Software Foundation has an extensive
            tutorial to <a class="link-color" href="http://www.apache.org/info/verification.html">
            verify
            hashes and signatures </a> which you can follow by using any of these
            release-signing <a class="link-color"
                               href="https://dist.apache.org/repos/dist/dev/incubator/iotdb/KEYS">
            KEYS </a>.
          </p>
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
        selectVersionObj: {},
        downloadVersionList: [
          {text: 'IoTDB v0.8.0',
            binariesUrl: 'https://www.apache.org/dyn/closer.cgi/incubator/iotdb/0.8.0-incubating/apache-iotdb-0.8.0-incubating-bin.zip',
            binariesSHA512Url: 'https://www.apache.org/dist/incubator/iotdb/0.8.0-incubating/apache-iotdb-0.8.0-incubating-bin.zip.sha512',
            binariesASCUrl: 'https://www.apache.org/dist/incubator/iotdb/0.8.0-incubating/apache-iotdb-0.8.0-incubating-bin.zip.asc',
            sourcesUrl: 'https://www.apache.org/dyn/closer.cgi/incubator/iotdb/0.8.0-incubating/apache-iotdb-0.8.0-incubating-source-release.zip',
            sourcesSHA512Url: 'https://www.apache.org/dist/incubator/iotdb/0.8.0-incubating/apache-iotdb-0.8.0-incubating-source-release.zip.sha512',
            sourcesASCUrl: 'https://www.apache.org/dist/incubator/iotdb/0.8.0-incubating/apache-iotdb-0.8.0-incubating-source-release.zip.asc'
          },
          {
            text: 'IoTDB v0.7.0',
            binariesUrl: 'https://github.com/thulab/iotdb/releases/tag/v0.7.0',
            binariesSHA512Url: '',
            binariesASCUrl: '',
            sourcesUrl: '',
            sourcesSHA512Url: '',
            sourcesASCUrl: ''
          },
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
    border-radius: 5px;
    width: 150px;
    height: 30px;
    padding-left: 15px;
    background: #fcac45 url("../assets/img/arrow.png") no-repeat scroll right center;
  }
  select::-ms-expand {
    display: none;
  }

  p, a{
    font-size: 16px;
  }
  .download-section > ul {
    padding-left: 20px;
    font-size: 16px;
  }

  .download-section > p{
    font-size: 16px;
  }
</style>
