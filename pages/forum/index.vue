<template>
  <div class="page-forum">
    forum
    <QuillEditor />
  </div>
</template>
<script>
import QuillEditor from '@/components/QuillEditor'

export default {
  components: {
    QuillEditor,
  },
  data(){
    return {
      type: 'quill',
    }
  }
}
</script>
<style lang="scss" scoped>

</style>