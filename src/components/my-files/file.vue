<template>
      <div>
        <div class="panel mt-10">
          <div class="mt-10 ml-10">
            <div style="height: 30px;line-height: 40px">
              <span class="ml-20">/某某某某人的云空间</span>
              <div class="text-r create_new_project file_btn" style="width: 214px;">
                <a class="btn btn-main mr-20"><img class="mr-5" src="../../assets/images/icons/i-75.png">下载</a>
                <a class="btn btn-main mr-5"><img class="mr-5" src="../../assets/images/icons/i-76.png">删除</a>
              </div>
            </div>
          </div>
          <div class="mt-20"></div>
        </div>
        <div  class="panel mt-10 positon-r" style="min-height: 750px;padding: 10px">
          <div class="well">
            <pre>
              {{code}}
            </pre>
          </div>
        </div>
      </div>
</template>
<script>
    export default {
        data(){
            return {
                code:' const str =“hello world”'
            }
        },
      computed: {

      },
        methods: {}
    }
</script>
