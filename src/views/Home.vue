<template>
  <div>
    <div class="main container">
      <div class="row">
        <div class="col-md-8 col-sm-8">
          <div>
            <p class="home-tittle">Apache IoTDB (incubating) (Database for Internet of Things)</p>
            <p>Apache IoTDB (incubating) (Database for Internet of Things) is an integrated data management engine
              designed for timeseries data which was initially developed by Tsinghua University. Now Apache IoTDB
              (incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the
              Incubator.
              It can provide users specific services for data collection, storage and analysis. Due to its light weight
              structure, high performance and usable features together with its intense integration with Hadoop and
              Spark ecology, Apache IoTDB (incubating) can meet the requirements of massive dataset storage, high-speed
              data input and complex data analysis in the IoT industrial field.</p>
          </div>
          <div>
            <p class="home-tittle">Scenarios</p>
            <div id="myCarousel" class="carousel slide" data-ride="carousel" style="background: black">
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="item active">
                  <img src="https://user-images.githubusercontent.com/1021782/50463652-f67c6480-09c7-11e9-8f65-c8adaff09043.png" alt="First slide">
                  <br/>
                  <div class="Scenarios">
                    <h1 style="margin-top: 0">High-end equipment</h1>
                    <p> In high-end manufacturing, there are many devices equipped with sensors which can collect working status data.
                      Meteorological stations, wind turbines, etc. are common high-end devices.
                      These devices, if supports Java or Go (in developing), can run TsFile to store data locally.
                      In this way, TsFile can provide the ability to save data with high throughput, high compression ratio, and millisecond query.
                      In addition, with TsFile-Sync tool, TsFiles can be transmitted to the data center equipped with IoTDB instance instead of re-inserting data one point by one point.
                    </p>
                    <p>
                      If the embedded board supports Java and requires rich query functions, then an IoTDB instance can be installed on the device.
                    </p>
                  </div>
                </div>
                <div class="item">
                  <img src="https://user-images.githubusercontent.com/1021782/50463651-f67c6480-09c7-11e9-9374-3e6c6c540d7b.png" alt="Second slide">
                  <br/>
                  <div class="Scenarios">
                    <h1 style="margin-top: 0">Local Controller</h1>
                    <p>
                      In the scene of factories, there are tens of devices under LAN network.
                      IoTDB can be installed on a local controller server in the factory to receive data from those devices.
                      The local controller server (normal PC or workstation) with IoTDB can provide the ability to persist data and query data with SQL-like interface.
                      In addition, with TsFile-Sync tool, TsFiles on the local controller can be transmitted to the data center equipped with IoTDB instance in the cloud.
                    </p>
                  </div>
                </div>
                <div class="item">
                  <img src="https://user-images.githubusercontent.com/1021782/50463650-f67c6480-09c7-11e9-9b80-bc66aa5dc0ab.png" alt="Third slide">
                  <br/>
                  <div class="Scenarios">
                    <h1 style="margin-top: 0">Cloud Data Management</h1>
                    <p>
                      In the scene of high-speed network (Internet of Vehicles, etc.), a car installed sensors on it can collect monitoring information(driving status, etc.) of itself at a certain frequency.
                      Usually, these automotive devices have limited hardware configurations and are difficult to carry complex applications.
                      Lightweight IoTDB(IoTDB Client) came into being.
                      With JDBC API, it can make data sent by narrow-band IoT or 4G possible. In this way, devices and cloud are connected together.
                    </p>
                  </div>
                </div>
              </div>
              <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div>
            <p class="home-tittle" style="padding-top: 15px">Main Features</p>
            <div class="row feature">
              <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 feature-item" v-for="item in featureBlock1" @mouseover="hover($event)"
                   @mouseleave="unhover($event)">
                <div class="row feature-title-row">
                  <div class="col-xs-2 col-sm-3">
                    <img :src=item.featureSrc style="vertical-align:middle">
                  </div>
                  <div class="col-xs-9 col-sm-9 feature-title"><p>{{item.featureTitle}}</p></div>
                </div>
                <p class="feature-content">{{item.featureContent}}</p>
                <hr/>
              </div>
            </div>
          </div>
        </div>
        <side-bar/>
      </div>

    </div>
    <footer-bar/>
  </div>
</template>

<script>
  import SideBar from "../components/SideBar";
  import Footer from "../components/Footer"
  export default {
    name: "Home",
    components: {
      'side-bar': SideBar,
      'footer-bar': Footer
    },
    data() {
      return {
        msg: 'Welcome to Home Page',
        featureBlock1: [
          {
            featureSrc: require("../assets/img/home-icon1.png"), featureTitle: "High-throughput read and write",
            featureContent: "Apache IoTDB (incubating) supports millions of low-power devices' strong connection data access, high-speed data read and write for intelligent networking devices and mixed devices mentioned above."
          },
          {
            featureSrc: require("../assets/img/home-icon2.png"), featureTitle: "Efficient directory structure",
            featureContent: "Apache IoTDB (incubating) supports efficient oganization for complex timeseries data structure from intelligent networking devices, oganization for timeseries data from devices of the same type, fuzzy searching strategy for massive and complex directory of timeseries data."
          },
          {
            featureSrc: require("../assets/img/home-icon3.png"), featureTitle: "Rich query semantics",
            featureContent: "Apache IoTDB (incubating) supports time alignment for timeseries data accross devices and sensors, computation in timeseries field (frequency domain transformation) and rich aggregation function support in time dimension."
          },
          {
            featureSrc: require("../assets/img/home-icon4.png"), featureTitle: "Low cost on hardware",
            featureContent: "Apache IoTDB (incubating) can reach a high compression ratio of disk storage (For one billion data storage, hard drive cost less than $0.23)"
          },
          {
            featureSrc: require("../assets/img/home-icon5.png"), featureTitle: "Flexible deployment",
            featureContent: "Apache IoTDB (incubating) provides users one-click installation tool on the cloud, once-decompressed-used terminal tool and the bridge tool between cloud platform and terminal tool (Data Synchronization Tool)."
          },
          {
            featureSrc: require("../assets/img/home-icon6.png"),
            featureTitle: "Intense integration with Open Source Ecosystem",
            featureContent: "Apache IoTDB (incubating) supports Hadoop, Spark, etc. analysis ecosystems and Grafana visualization tool."
          },
        ],
      }
    },
    methods: {
      hover: function (e) {
        e.currentTarget.style.boxShadow = "2px 2px 10px #909090"
      },
      unhover: function (e) {
        e.currentTarget.style.boxShadow = "";
      }
    }
  }

</script>

<style scoped>

  .item{
    margin-bottom: 10px;
  }
  .carousel-indicators{
    bottom: 0px;
  }
  @media (min-width: 768px) {
    .feature-item{
      min-height: 265px;
    }
    /*.carousel-indicators{*/
      /*top: 267px;*/
    /*}*/
  }

  @media (min-width: 992px) {
    .feature-item{
      min-height: 327px;
    }
    /*.carousel-indicators{*/
      /*top: 352px;*/
    /*}*/
  }

  @media (min-width: 1200px){
    .feature-item{
      min-height: 250px;
    }
    /*.carousel-indicators{*/
      /*top: 428px;*/
    /*}*/
  }

  .main > div {
    margin-top: 10px;
  }

  .home-tittle {
    color: #fcac45;
    font-size: x-large;
    font-weight: 600;
  }

  .feature {
    display: table;
  }

  .Scenarios {
    padding: 5px 10px;
    background: black;
    color: white;
  }

  .carousel-control.left {
    background-image: none;
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  }

  .carousel-control.right {
    left: auto;
    right: 0;
    background-image: none;
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  }

  .carousel-indicators > li, .carousel-indicators > .active {
    height: 3px;
    width: 30px;
    border-radius: 0px;
    margin: 0px;
    border: none;
  }

  .carousel-indicators > li {
    background-color: rgba(255, 255, 255, .5);
  }

  .carousel-indicators > .active {
    background-color: white;
  }

  .feature > .col-xs-4 > img {
    width: 50px;
    height: 50px;
    margin: 0 8px 8px 0;
  }

  hr {
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    margin: 0;
  }

  .row > div > img {
    width: 50px;
    height: 50px;
  }

  .feature-title > p {
    font-size: medium;
  }

</style>
