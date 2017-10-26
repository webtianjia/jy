<!--富文本编辑器-->
<template>
  <textarea :id="names"></textarea>
</template>
<script>
  import Simditor from 'simditor'
  import "simditor/styles/simditor.css"
  export default {
      props:{
          url:{//文件上传的接口地址
              type:String,
              default:""
          },
          param:{//键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
              type:String,
              default:null
            },
          fileKey:{//服务器端获取文件数据的参数名
            type:String,
            default:null
          }
      },
    data() {
      return {
        myResult:this.value,
        names:new Date().getTime(),//这里防止多个富文本发生冲突
        editor:'',//保存simditor对象
        toolbar: ['title', 'bold', 'italic', 'underline', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', '|', 'link', 'image', 'hr', '|', 'indent','outdent','alignment']//自定义工具栏
      }
    },
    mounted() {
      this.createEditor()
    },
    methods: {
      createEditor() {
        var _this = this
        this.editor = new Simditor({
          textarea: $('#'+_this.names),
          toolbar: _this.toolbar,
          locale:"zh-CN'",
          upload: {
            url:this.url,
            param: this.param,
            fileKey: this.fileKey,
            connectionCount: 3,//同时上传个数
            leaveConfirm: '正在上传文件'
          },
          pasteImage: true,//是否允许粘贴上传图片，依赖 upload 选项，仅支持 Firefox 和 Chrome 浏览器。
          tabIndent: true,//是否在编辑器中使用 tab 键来缩进
        });
        //$(".simditor input[type='file']").attr('accept', 'image/jpg,image/jpeg,image/png,image/bmp');
        this.editor.on("valuechanged", function(e, src) {
          _this.$emit("editor-change",_this.editor.getValue())
        })
      }
    }
  }
</script>
