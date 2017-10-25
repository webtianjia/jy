<!--富文本编辑器-->
<template>
   <textarea id="text-content" placeholder="请输入信息">
    <p>{{value}}</p>
</textarea>
</template>
<script>
  import Simditor from 'simditor'
  import "simditor/styles/simditor.css"
  export default {
    props: ['value'],
    data() {
      return {
        editor:'',//保存simditor对象
        toolbar: ['bold', 'italic', 'underline', 'strikethrough','color', '|', 'ol', 'ul', 'blockquote', 'code', '|', 'link', 'image', '|', 'indent', 'outdent']//自定义工具栏
      }
    },
    created() {
      this.createEditor()
    },
    methods: {
      createEditor() {
        var _this = this
        this.editor = new Simditor({
          textarea: $('#text-content'),
          toolbar: _this.toolbar,
          upload: {
             url:'/api/CommAnnex/UploadFiles', //文件上传的接口地址
             params:null, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
             fileKey: 'fileDataFileName', //服务器端获取文件数据的参数名
             connectionCount:3,//同时上传个数
             leaveConfirm: '正在上传文件'
          },
          pasteImage: true,//是否允许粘贴上传图片，依赖 upload 选项，仅支持 Firefox 和 Chrome 浏览器。
          tabIndent: true,//是否在编辑器中使用 tab 键来缩进
        });
        this.editor.on("valuechanged", function(e, src) {
          _this.value = _this.editor.getValue()
        })//valuechanged是simditor自带获取值得方法
      }
    }
  }
</script>
