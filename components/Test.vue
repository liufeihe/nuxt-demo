<template>
    <div class="component-test">test</div>
</template>
<script>
export default {
    async asyncData(){
        console.log('test, asyncData')
    },
    fetch(){
        console.log('test, fetch')
    },
    beforeCreate(){
        console.log('test, beforeCreate')
    },
    created(){
        console.log('test, created')
    },
    beforeMount(){
        console.log('test, beforeMount')
    },
    mounted(){
        console.log('test, mounted')
    },
}
</script>