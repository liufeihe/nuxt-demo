<template>
  <div>
    <Header />
    <div class="page-wrapper">
      <nuxt class="page-content"/>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.page-wrapper{
  min-height: calc(100vh - 64px);
  background-color: #e5e5e5;
  padding: 20px 0;
}
.page-content{
  width: 1240px;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
}

</style>
