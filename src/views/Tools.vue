<template>
  <div>
    <div class="container">
      <br>
      <div class="row">
        <div class="col-lg-7">
          <div class="scene">
            <img src="../assets/img/tools.jpg">
          </div>
        </div>
        <div class="col-lg-5">
          <div class="introduction">
            <p><b>IoTDB</b> is an open-source time series database developed by THULab(link) which is written in JAVA.
              In order
              to enable IoTDB to more fully support the application of time series data, we have developed a few tools
              for IoTDB expansion.
            </p>
            <ul>
              <li>SQL-like client(Cli) is developed for users to interact with IoTDB engine in command line.</li>
              <li>Grafana is developed to visualize time series data in IoTDB using Grafana.</li>
              <li>IoTDB can be also efficiently integrated with other computing frameworks in big data ecosystems, like
                Hadoop and Spark, for advanced data analytics. That is why we offer you hadoop and spark connector.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr>
      <div class="tools">
        <div class="row">
          <div v-for="tool in Tools">
            <div class="col-md-6 col-lg-3">
              <div class="tool thumbnail">
                <h3>{{tool.header}}</h3>
                <div class="content">
                  <p v-html="tool.content"></p>
                </div>
                <hr/>
                <div class="tool-download">
                  <button type="button"
                          class="tool-download-button btn btn-default">
                    <a v-bind:href="tool.download">
                      <p style="font-size: medium;margin:0px 0px 5px 5px">Download</p>
                    </a>
                  </button>
                  <br>
                  <br>
                </div>
                <div class="tool-documentation">
                  <button type="button" class="tool-documentation-button btn btn-default">
                    <router-link :to=tool.documentation>
                      <p style="color: white; font-size: medium;margin:0px 0px 5px 5px">Documentation</p>
                    </router-link>
                  </button>
                  <br>
                  <br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <footer-bar/>
  </div>
</template>

<script>
  import Footer from "../components/FooterFixed"

  export default {
    name: "Tools",
    components: {
      'footer-bar': Footer
    },
    data() {
      return {
        "Tools": [
          {
            "header": "IoTDB-Cli",
            "content": "Client tool used to read and <br/>write data from IoTDB",
            "download": this.GLOBAL.downloadIotdbCli,
            "documentation": "/Tools/Cli"
          },
          {
            "header": "Grafana Connector",
            "content": "Time Series Data<br/>Visualization",
            "download": this.GLOBAL.downloadGrafanaConnector,
            "documentation": "/Tools/Grafana"
          },
          {
            "header": "Hadoop Connector",
            "content": "Connector tool to use Hadoop<br/>to process data from IoTDB",
            "download": this.GLOBAL.downloadHadoopConnector,
            "documentation": "/Tools/Hadoop"
          },
          {
            "header": "Spark Connector",
            "content": "Connector tool to use spark<br/>to process data",
            "download": this.GLOBAL.downloadSparkConnector,
            "documentation": "/Tools/Spark"
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>

  .scene {
    border: 2px solid;
    border-radius: 10px;
    padding: 10px;
    background: white;
    float: left;
  }

  .scene > img {
    width: 100%;
    height: auto;
    display: block;
  }

  .introduction {
    border: 0px solid;
    border-radius: 10px;
    margin: 2px 2px 2px 2px;
    float: right;
    height: 100%;
  }

  .introduction > p {
    color: black;
    font-size: medium;
  }

  .introduction > ul {
    color: black;
    font-size: medium;
  }

  .tool {
    text-align: center;
    border: 2px solid;
    border-radius: 10px;
    background: black;
    padding: 20px 20px;
    width: 98%;
  }

  .content {
    height: 80px;
  }

  .content > p {
    color: white;
    text-align: center;
    font-size: small;
  }

  .tool > h3 {
    color: white;
    text-align: center;
    height: 40px;
  }

  .tool > p {
    color: white;
    text-align: center;
    font-size: small;
  }

  .tool-download {
    text-align: center;
    margin-top: 30px;
  }

  .tool-documentation {
    text-align: center;
    margin-top: 10px;
  }

  .tool-download-button {
    border-radius: 20px;
    width: 80%;
    background: #fcac45;
    font-size: x-large;
    font-weight: bold;
    border: 2px solid #fcac45;
  }

  .tool-documentation-button {
    border-radius: 20px;
    width: 80%;
    background: black;
    font-size: x-large;
    font-weight: bold;
    border: 2px solid #fcac45;
  }

  .tools .col-lg-3 {
    margin-bottom: 20px;
    text-align: center;
  }

  .tools .col-lg-3 p {
    margin-right: 10px;
    margin-left: 10px;
  }

  .tools h2 {
    font-weight: normal;
  }

  .tools h1 {
    font-weight: normal;
  }


</style>
