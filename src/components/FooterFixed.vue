<template>
    <div class="footer navbar-fixed-bottom">
        <div class="container">
            <p>Copyright © 2018 The Apache Software Foundation. Apache and the Apache feather logo are trademarks of The Apache Software Foundation.</p>
        </div>
    </div>
</template>

<script>
  export default {
      name:'FooterFixed'
  }
</script>

<style>
.footer{
    padding:10px 0;
    margin-top: 30px;
    text-align:center;
    color:#fff;
    background:#222222;
}

@media screen and (max-width: 500px) {
  .footer {
    position: relative;
  }
}
</style>
