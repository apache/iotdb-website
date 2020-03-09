<template>
  <footer class="footer">
    <div class="container">
      <p style="color: #AAA">
        Disclaimer: Apache IoTDB (incubating) (Database for Internet of Things) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.
      </p>
      <p style="text-align: center">
        Copyright © 2019 The Apache Software Foundation. Apache and the Apache feather logo are trademarks of The Apache Software Foundation
      </p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterFixed',
    year: "",
    created() {
    }
  }
</script>

<style>
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #fff;
    background: #222222;
    padding: 10px;
  }

  @media (min-width: 992px) {
    body {
      margin-bottom: 140px; /* Margin bottom by footer height */
    }
  }

  @media (min-width: 499px) {
    body {
      margin-bottom: 160px; /* Margin bottom by footer height */
    }
  }

  @media (min-width: 355px) {
    body {
      margin-bottom: 180px; /* Margin bottom by footer height */
    }
  }

  @media (min-width: 200px) {
    body {
      margin-bottom: 220px; /* Margin bottom by footer height */
    }
  }
</style>
