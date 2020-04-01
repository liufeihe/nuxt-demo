<template>
  <div class="page-forum">
    <div class="title">forum</div>
    <el-tabs v-model="editorType" @tab-click="handleClick">
      <el-tab-pane label="Quill" name="quill">
        <div class="sub-title">{{$t('forum.content')}}</div>
        <div class="editor-content" v-html="quillContent"></div>
        <div class="sub-title">{{$t('forum.editor')}}</div>
        <QuillEditor @changeContent="getQuillContent" />
      </el-tab-pane>
      <el-tab-pane label="Tinymce" name="tinymce">
        <div class="sub-title">{{$t('forum.content')}}</div>
        <div class="editor-content" v-html="tinymceContent"></div>
        <div class="sub-title">{{$t('forum.editor')}}</div>
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
      quillContent: '',
      tinymceContent: '',
    }
  },
  methods: {
    handleClick(){

    },
    getQuillContent(value){
      this.quillContent = value
    }
  }
}
</script>
<style lang="scss" scoped>
.page-forum{
  .title{
    font-weight: bold;
  }
  .sub-title{
    margin: 10px 0 10px;
  }
  .editor-content{
    border: 1px dashed #e5e5e5;
    min-height: 100px;
  }
}
</style>