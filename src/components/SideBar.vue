<template>
  <div class="col-sm-3  blog-sidebar">
    <div class="sidebar-module sidebar-module-inset">
      <h4>Latest News</h4>
      <article lang="en">
        <ol class="list-unstyled">
          <li>
            1. After the Apache version is released, users are encouraged to read the overview of major changes in <router-link to="/Materials/Release%20Notes">release notes</router-link>,
            download the version in <router-link to="/Download">download page</router-link>
            and view documents in <router-link to="/Documents/Quick%20Start">documentation page</router-link>.
          </li>
          <li>
            2. Currently, we support an unofficial version on <a href="https://github.com/thulab/iotdb/releases">GitHub</a>.
          </li>
        </ol>
      </article>

      <h4>Github repo</h4>
      <ol class="list-unstyled">
        <li><a href="https://github.com/apache/incubator-iotdb">GitHub</a></li>
      </ol>
    </div>
    <router-link to="/Download" class="nav-link btn btn-lg btn-block btn-warning button" style="color: white">
      <span>Download</span>
    </router-link>
    <router-link to="/Documents/Quick%20Start" class="nav-link btn btn-white btn-lg btn-block button"><span>Quick Start</span></router-link>
  </div><!-- /.blog-sidebar -->
</template>

<script>
    export default {
        name: "SideBar",
    }
</script>

<style scoped>
  /* Sidebar modules for boxing content */
  .sidebar-module {
    padding: 15px;
    margin-bottom: 15px;
  }
  .sidebar-module-inset {
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
  .sidebar-module-inset p:last-child,
  .sidebar-module-inset ul:last-child,
  .sidebar-module-inset ol:last-child {
    margin-bottom: 0;
  }
  .button {
    width: 100%;
    font-size: large;
    font-weight: bold;
  }
  .blog-sidebar{
    top:70px;
  }

  .btn-white {
    color: black;
    background-color: white;
    border-color: orange;
  }

  .btn-white:hover {
    background-color: rgb(238,163, 69);
  }

  .sidebar-module {
    font-size: 16px;
  }

  @media screen and (max-width: 750px) {
    .blog-sidebar {
      display: none;
    }
  }

  article {
    text-align: justify;
  }

  article li {
    font-size: 16px;
    word-break: break-all;
    /*-webkit-hyphens: auto;*/
    /*-moz-hyphens: auto;*/
    /*-ms-hyphens: auto;*/
    /*hyphens: auto;*/
  }
</style>
