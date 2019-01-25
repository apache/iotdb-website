<template>
  <div class="header">
    <nav class="navbar navbar-inverse navbar-fixed-top" style="background-color: rgb(34,34,34); min-height:50px" role="navigation">
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
          <a class="navbar-brand" href="#/">IoTDB</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="nav-item" id="home-page">
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
  jQuery(document).ready(function () {
    jQuery(".nav-item").click(function () {
      jQuery('.navbar-nav').find('li.active').removeClass('active');
      jQuery('.dropdown').removeClass('active');
      $(this).addClass( 'active' );
    });
    jQuery(".dropdown").click(function () {
      jQuery('.navbar-nav').find('li.active').removeClass('active');
      jQuery('.dropdown').removeClass('active');
      $(this).addClass( 'active' );
    });
    jQuery(".dropdown-menu > li").click(function () {
      jQuery('.navbar-nav').find('li.active').removeClass('active');
      jQuery('.dropdown').removeClass( 'active' );
      $(this).parent("ul").parent("li").addClass( 'active' );
    });
    jQuery(".navbar-brand").click(function () {
      jQuery('.navbar-nav').find('li.active').removeClass('active');
      jQuery('.dropdown').removeClass('active');
      document.getElementById('home-page').classList.add('active');
    });
  });
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

  #bs-example-navbar-collapse-1 .navbar-nav >.active>a {
    background-color: rgb(100,100,100);
  }

  @media (min-width: 200px) {
    .header {
      margin-bottom: 90px;
    }
  }

  @media (min-width: 768px) {
    .header {
      margin-bottom: 190px;
    }
  }

  @media (min-width: 992px) {
    .header {
      margin-bottom: 140px;
    }
  }

  @media (min-width: 1200px) {
    .header {
      margin-bottom: 90px;
    }
  }


</style>
