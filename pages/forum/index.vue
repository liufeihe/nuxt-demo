<template>
  <div class="page-forum">
    <div class="title">forum</div>
    <el-tabs v-model="editorType" @tab-click="handleClick">
      <el-tab-pane label="Quill" name="quill">
        <QuillEditor />
      </el-tab-pane>
      <el-tab-pane label="Tinymce" name="tinymce">

      </el-tab-pane>
    </el-tabs>
    
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
      editorType: 'quill',
    }
  },
  methods: {
    handleClick(){

    }
  }
}
</script>
<style lang="scss" scoped>
.page-forum{
}
</style>