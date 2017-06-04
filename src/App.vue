<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  #app {

    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    height: 100%;
    width: 100%;

    .clearfix{
      clear: both;
      height: 0;
      display: block;
      content: '';
      visibility: hidden;
    }
    .clear{
      &:after{
        clear: both;
        height: 0;
        display: block;
        content: '';
        visibility: hidden;
      }
    }
    
  }
  
    
  
  @media screen and (min-width: 320px) {
      html {font-size: 14px;}
  }
   
  @media screen and (min-width: 360px) {
      html {font-size: 16px;}
  }
   
  @media screen and (min-width: 400px) {
      html {font-size: 18px;}
  }
   
  @media screen and (min-width: 440px) {
      html {font-size: 20px;}
  }
   
  @media screen and (min-width: 480px) {
      html {font-size: 22px;}
  }
   
  @media screen and (min-width: 640px) {
      html {font-size: 28px;}
  }
</style>
