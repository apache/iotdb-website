<template>
  <div class="header">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">IoTDB</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link"><span>Home</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Download" class="nav-link"><span>Download</span></router-link>
            </li>
            <li class="dropdown">
              <router-link to="/Documents/Quick%20Start" class="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-haspopup="true" aria-expanded="false"><span>Documents<b class="caret"></b></span>
              </router-link>
              <ul class="dropdown-menu">
                <li v-for="item in Documents">
                  <router-link :to=item.url class="nav-link"><span>{{item.content}}</span></router-link>
                </li>
              </ul>
            </li>
            <!--<li class="nav-item">-->
              <!--<router-link to="/Tools" class="nav-link"><span>Tools</span></router-link>-->
            <!--</li>-->
            <li class="dropdown">
              <router-link to="/Tools" class="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-haspopup="true" aria-expanded="false"><span>Tools<b class="caret"></b></span>
              </router-link>
              <ul class="dropdown-menu">
                <li v-for="item in Tools">
                  <router-link :to=item.url class="nav-link"><span>{{item.content}}</span></router-link>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <router-link to="/Community/Project%20Committers" class="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-haspopup="true" aria-expanded="false"><span>Community<b class="caret"></b></span>
              </router-link>
              <ul class="dropdown-menu">
                <li v-for="item in Community">
                  <router-link :to=item.url class="nav-link"><span>{{item.content}}</span></router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/Development" class="nav-link"><span>Development</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Example" class="nav-link"><span>Example</span></router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="nav-item">
              <a href="https://www.apache.org/" class="nav-link"><span
                style="color: orange">Apache Software Foundation</span></a>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        "Documents": [
          {"url": "/Documents/Quick Start", "content": "Quick Start"},
          {"url": "/Documents/latest/sec1", "content": "User Guide"},
          {"url": "/Materials", "content": "Other Materials"},
          {"url": "/Documents/Frequently asked questions", "content": "Frequently asked questions"}
        ],
        "Community": [
          {"url": "/Community/Powered By", "content": "Powered By"},
          {"url": "/Community/Project Committers", "content": "Project Committers"},
          {"url": "/Community/History & Vision", "content": "History & Vision"}
        ],
        "Tools": [
          {"url": "/Tools/Cli", "content": "IoTDB-Cli"},
          {"url": "/Tools/Grafana", "content": "Grafana Connector"},
          {"url": "/Tools/Hadoop", "content": "Hadoop Connector"},
          {"url": "/Tools/Spark", "content": "Spark Connector"}
        ],
      }
    },
  }

</script>

<style>
  li.dropdown:hover > ul.dropdown-menu {
    display: block;
  }

  .navbar-nav > li > a > span {
    color: white;
    font-size: 1.6rem;
  }

  .navbar-nav > li > a > span:hover {
    color: orange;
  }

  .container-fluid {
    margin-left: 15%;
    margin-right: 10%;
  }

  @media (min-width: 0px) {
    .header {
      margin-bottom: 55px;
    }
  }

  @media (min-width: 750px) {
    .header {
      margin-bottom: 200px;
    }
  }

  @media (min-width: 890px) {
    .header {
      margin-bottom: 150px;
    }
  }

  @media (min-width: 1018px) {
    .header {
      margin-bottom: 100px;
    }
  }

  @media (min-width: 1330px) {
    .header {
      margin-bottom: 55px;
    }
  }


</style>
