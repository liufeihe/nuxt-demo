<template>
  <div>
    <div class="home-content">
      <div>home</div>
      <div class="icon-list">
        icon list: 
        <!-- <category />
        <bili /> -->
        <svgicon icon="category" width="20" color="red"></svgicon>
        <svgicon icon="close" width="20" color="black"></svgicon>
        <img :src="getIconUrl(item)" v-for="(item,idx) in iconList" :key="idx" />
      </div>
      <el-button @click="handleClick">ShowMessage</el-button>
    </div>
  </div>
</template>

<script>
// import category from '@/assets/svg/category.svg'
// import bili from '@/assets/svg/icon_bili.svg'
// import '@/components/icons/category'

export default {
  data(){
    return {
      iconList: ['bili','comment','douyin'],
    }
  },
  methods: {
    getIconUrl(item){
      return require(`@/assets/svg/icon_${item}.svg`)
    },
    handleClick(){
      this.$message.info('hahhah')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-content{
  width: 1240px;
  margin: 0 auto;
}
</style>
