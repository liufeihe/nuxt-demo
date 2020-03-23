<template>
  <div class="page-header">
    <div class="header-content">
      <el-menu
        menu-trigger="click"
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        active-text-color="#e84746">
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="about">关于</el-menu-item>
      </el-menu>
    </div>
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      activeIndex: '0',
    }
  },
  methods:{
    handleSelect(key, keypath){
      this.activeIndex = key
      this.$router.push({name: key==='home'?'index':key})
    }
  }
}
</script>
<style lang="scss" scoped>
.page-header{
  height: 64px;
  background-color: white;
}
.header-content{
  width: 1240px;
  margin: 0 auto;
}
.el-menu.el-menu--horizontal{
  border-bottom: 0;
  li.el-menu-item{
    height: 64px;
  }
}
</style>