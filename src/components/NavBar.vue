<template>
  <div class="header">
    <nav class="navbar navbar-inverse navbar-fixed-top" style="background-color: rgb(34,34,34); min-height:50px"
         role="navigation">
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
          <!--<a class="navbar-brand" href="#/">IoTDB</a>-->
          <router-link to="/" class="nav-link">
            <img src="../assets/img/logo-orange.png" class="logo-class">
          </router-link>

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
            <li class="nav-item">
              <router-link :to="defaultDocLink" class="nav-link"><span>Documents</span></router-link>
            </li>
            <li class="dropdown">
              <router-link to="/Community/Project%20Committers" class="dropdown-toggle" data-toggle="dropdown"
                           role="button"
                           aria-haspopup="true" aria-expanded="false"><span>Community<b class="caret"></b></span>
              </router-link>
              <ul class="dropdown-menu">
                <li v-for="item in Community">
                  <router-link :to=item.url class="nav-link"><span>{{item.content}}</span></router-link>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <router-link to="/Development/Contributing" class="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-haspopup="true" aria-expanded="false"><span>Development<b class="caret"></b></span>
              </router-link>
              <ul class="dropdown-menu">
                <li v-for="item in Development">
                  <router-link :to=item.url class="nav-link"><span>{{item.content}}</span></router-link>
                </li>
              </ul>
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
  import Global from '../components/Global'

  jQuery(document).ready(function () {
    jQuery(".nav-item").click(function () {
      jQuery('.navbar-nav').find('li.active').removeClass('active');
      jQuery('.dropdown').removeClass('active');
      $(this).addClass('active');
    });
    jQuery(".dropdown").click(function () {
      jQuery('.navbar-nav').find('li.active').removeClass('active');
      jQuery('.dropdown').removeClass('active');
      $(this).addClass('active');
    });
    jQuery(".dropdown-menu > li").click(function () {
      jQuery('.navbar-nav').find('li.active').removeClass('active');
      jQuery('.dropdown').removeClass('active');
      $(this).parent("ul").parent("li").addClass('active');
    });
    jQuery(".logo-class").click(function () {
      jQuery('.navbar-nav').find('li.active').removeClass('active');
      jQuery('.dropdown').removeClass('active');
      document.getElementById('home-page').classList.add('active');
    });
  });
  export default {
    name: "NavBar",
    data() {
      return {
        "Community": [
          {"url": "/Community/Powered By", "content": "Powered By"},
          {"url": "/Community/Project Committers", "content": "Project Committers"},
          {"url": "/Community/History & Vision", "content": "History & Vision"}
        ],
        "Development": [
          {"url": "/Development/Contributing", "content": "Questions and Contributing"},
          {"url": "/Development/IDE", "content": "Developing in IDE"},
          {"url": "/Development/Tsfile", "content": "Changelist of TsFile"},
          {"url": "/Development/RPC", "content": "Changelist of RPC"}
        ],
        defaultDocLink: "/Documents/" + Global.DEFAULT_VERSION + "/chap1/sec1"
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

  #bs-example-navbar-collapse-1 .navbar-nav > .active > a {
    background-color: rgb(100, 100, 100);
  }

  .logo-class {
    max-width: 100px;
    padding-top: 5px;
    margin-right: 15px;
  }

  @media (min-width: 200px) {
    .header {
      margin-bottom: 90px;
    }

    .logo-class {
      margin-left: 10px;
    }
  }

  @media (min-width: 768px) {
    .header {
      margin-bottom: 190px;
    }

    #home-page {
      margin-left: -15px;
    }

    .logo-class {
      margin-left: -2px;
    }
  }

  @media (min-width: 992px) {
    .header {
      margin-bottom: 140px;
    }
  }

  @media (min-width: 1170px) {
    .logo-class {
      margin-left: -110px;
    }
  }

  @media (min-width: 1200px) {
    .header {
      margin-bottom: 90px;
    }

    .logo-class {
      margin-left: 0px;
    }
  }

  @media (min-width: 1360px) {
    .logo-class {
      margin-left: -110px;
    }
  }
</style>
