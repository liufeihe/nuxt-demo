<template>
  <div>
    <div class="home-content">
      <div>home</div>
      <div class="icon-list">
        icon list: 
        <img :src="getIconUrl(item)" v-for="(item,idx) in iconList" :key="idx" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      iconList: ['bili','comment','douyin'],
    }
  },
  methods: {
    getIconUrl(item){
      return require(`@/assets/svg/icon_${item}.svg`)
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
