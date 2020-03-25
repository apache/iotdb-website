<template>
  <div> 
    <div id="vcomments"></div>
  </div>

</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'R1Qyeuv2BEooSWSVB2HmJyB7-gzGzoHsz',// your appId
      appKey: 'GGneEbK7wGIhef7CVnUScHH7', // your appKey
      notify:false, 
      verify:false, 
      avatar:'mm', 
      placeholder: 'Please enter comments！' ,
      path:window.location.pathname,
    });
  },
}
</script>
<style>
#vcomments{
  margin-top:100px;
}
</style>