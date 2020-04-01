<template>
  <div class="page-forum">
    <div class="title">forum</div>
    <el-tabs v-model="editorType" @tab-click="handleClick">
      <el-tab-pane label="Quill" name="quill">
        <QuillEditor />
      </el-tab-pane>
      <el-tab-pane label="Tinymce" name="tinymce">
        <TinymceEditor />
      </el-tab-pane>
    </el-tabs>
    
  </div>
</template>
<script>
import QuillEditor from '@/components/QuillEditor'
import TinymceEditor from '@/components/TinymceEditor'

export default {
  components: {
    QuillEditor,
    TinymceEditor,
  },
  data(){
    return {
      editorType: 'quill',

    }
  },
  methods: {
    handleClick(){

    },
  }
}
</script>
<style lang="scss" scoped>
.page-forum{  
}
</style>