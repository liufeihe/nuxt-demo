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
        <el-menu-item index="home">{{$t('header.home')}}</el-menu-item>
        <el-menu-item index="about">{{$t('header.about')}}</el-menu-item>
      </el-menu>
      <div class="right">
        <button v-for="locale in availableLocales"
          :key="locale.code"
          @click="switchCode(locale)"
        >
          {{ locale.code }}
        </button>
      </div>
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
    },
    switchCode(locale){
      this.$i18n.locale = locale
      this.$i18n.setLocaleCookie(locale)
    }
  },
  computed:{
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
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
  display: flex;
  justify-content: space-between;
}
.el-menu.el-menu--horizontal{
  border-bottom: 0;
  li.el-menu-item{
    height: 64px;
  }
}
</style>