<template>
  <section class="container">
    <Editor 
      class="tinymce-editor"
      api-key="no-api-key"
      :init="editorOptions"
      v-model="content"
    />
    <div class="editor-content" v-html="content"></div>
  </section>
</template>
<script>
 import Editor from '@tinymce/tinymce-vue'

 export default {
   components: {
    Editor,
   },
   data(){
     return {
       content: '',
       editorOptions: {
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help'
      }
     }
   }
 }
</script>
<style lang="scss">
.container {
    width: 80%;
    margin: 0 auto;
    padding: 50px 0;
    .tinymce-editor {
      min-height: 200px;
      max-height: 400px;
      overflow-y: auto;
    }
    .editor-content{
      border: 1px dashed #e5e5e5;
      min-height: 100px;
    }
  }
</style>