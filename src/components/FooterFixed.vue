<template>
  <footer class="footer">
    <div class="container">
      <span>Copyright © 2018 The Apache Software Foundation. Apache and the Apache feather logo are trademarks of The Apache Software Foundation.</span>
    </div>
  </footer>
</template>

<script>
  export default {
      name:'FooterFixed'
  }
</script>

<style>
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align:center;
    color:#fff;
    background:#222222;
  }
  @media (min-width: 992px){
    body {
      margin-bottom: 40px; /* Margin bottom by footer height */
    }
  }
  @media (min-width: 499px){
    body {
      margin-bottom: 60px; /* Margin bottom by footer height */
    }
  }
  @media (min-width: 355px){
    body {
      margin-bottom: 80px; /* Margin bottom by footer height */
    }
  }

  @media (min-width: 200px){
    body {
      margin-bottom: 120px; /* Margin bottom by footer height */
    }
  }
</style>
