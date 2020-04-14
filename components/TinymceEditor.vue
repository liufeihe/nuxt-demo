<template>
  <section class="container">
    <Editor 
      class="tinymce-editor"
      :api-key="apiKey"
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
       apiKey: 'fcsriz5a13xxjjpurc0l9j3ypt2ql7w0ewssh2too7dtyrji',
       editorOptions: {
        language: 'zh_CN',
        language_url: '/tinymce/zh_CN.js',
        height: 500,
        branding: false,
        plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
        imagetools_cors_hosts: ['picsum.photos'],
        menubar: 'file edit view insert format tools table help',
        toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | superscript subscript charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
        toolbar_sticky: true,
        codesample_global_prismjs: true,
        autosave_ask_before_unload: true,
        autosave_interval: "30s",
        autosave_prefix: "{path}{query}-{id}-",
        autosave_restore_when_empty: false,
        autosave_retention: "2m",
        image_advtab: true,
        // content_css: '//www.tiny.cloud/css/codepen.min.css',
        link_list: [
          { title: 'My page 1', value: 'http://www.tinymce.com' },
          { title: 'My page 2', value: 'http://www.moxiecode.com' }
        ],
        image_list: [
          { title: 'My page 1', value: 'http://www.tinymce.com' },
          { title: 'My page 2', value: 'http://www.moxiecode.com' }
        ],
        image_class_list: [
          { title: 'None', value: '' },
          { title: 'Some class', value: 'class-name' }
        ],
        importcss_append: true,
        height: 400,
        // images_upload_url: 'http://localhost:8080/api/',
        images_upload_handler: function (blobInfo, success, failure) {
          console.log('image upload...')
          success(blobInfo.filename())
          // success('http://www.baidu.com/img/bd_logo1.png?qua=high')
        },
        file_picker_types: 'media',
        file_picker_callback: function (callback, value, meta) {
          let input = document.createElement('input');
          input.setAttribute('type', 'file');
          // 你可以给input加accept属性来限制上传的文件类型
          // input.setAttribute('accept', '.jpg,.png');
          input.click();
          input.onchange = function(){
            let file = this.files[0];
            let formData = new FormData();
            formData.append('file', file, file.name);
            callback(file.name, { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
            // /* Provide file and text for the link dialog */
            // if (meta.filetype === 'file') {
            //   callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
            // }

            // /* Provide image and alt text for the image dialog */
            // if (meta.filetype === 'image') {
            //   callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
            // }

            // /* Provide alternative source and posted for the media dialog */
            // if (meta.filetype === 'media') {
            //   callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
            // }
          }
        },
        templates: [
          { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
          { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
          { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
        ],
        template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
        template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
        image_caption: true,
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        noneditable_noneditable_class: "mceNonEditable",
        toolbar_mode: 'wrap',
        contextmenu: "link image imagetools table",

      }
     }
   },
   beforeMount(){
     let content = sessionStorage.getItem('tinymce_content')
     if (content) {
       this.content = content
     }
   },
   beforeDestroy(){
     if (this.content) {
       sessionStorage.setItem('tinymce_content', this.content)
     }
   }
 }
</script>
<style lang="scss">
.container {
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;
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