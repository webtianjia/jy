<template>
  <div>
    <div class="panel ">
      <div class="mt-10 ml-10">
        <div style="height: 30px;line-height: 30px">
          <span class="ml-20">/某某某某人的云空间</span>
          <div class="text-r create_new_project file_btn" style="width: 306px;">
            <a class="btn btn-main mr-20"><img class="mr-5" src="../../assets/images/icons/i-75.png">上传文件</a>
            <a class="btn btn-main mr-5"><img class="mr-5" src="../../assets/images/icons/i-76.png">创建文件夹</a>
          </div>
          <div class="f-12 col-666 ml-20 mt-5" style="line-height: 0">2017-12-05  13:23:34  728kb</div>
        </div>
      </div>
      <div class="mt-20"></div>
    </div>
    <div  class="panel mt-10 positon-r" style="min-height: 750px">
      <table class="table table-hover">
        <thead >
        <tr class="bg_f8f8f8">
          <td><img class="mr-5" src="../../assets/images/icons/i-80.png">名称</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-79.png">大小</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-81.png">最后修改时间</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-40.png">操作</td>
        </tr>
        </thead>
        <tbody class="col-666">
        <tr>
          <td>
            <p><img src="../../assets/images/icons/i-78.png" class="mr-5">biostat.css</p>
          </td>
          <td>
            <p>1.04M</p>
          </td>
          <td>
            <p>3小时前</p>
          </td>
          <td>
            <a class="operation mr-10 ml-30" @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
            <a class="operation" @click="read">
              <Icon type="ios-download-outline" size="22"></Icon>
              <span class="info-text">下载</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p><img src="../../assets/images/icons/i-77.png" class="mr-5">biostat.css</p>
          </td>
          <td>
            <p>1.04M</p>
          </td>
          <td>
            <p>3小时前</p>
          </td>
          <td>
            <a class="operation mr-10" @click="look">
              <Icon type="ios-search" size="22"></Icon>
              <span class="info-text">查看</span>
            </a>
            <a class="operation mr-10 " @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
            <a class="operation" @click="read">
              <Icon type="ios-download-outline" size="22"></Icon>
              <span class="info-text">下载</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p><img src="../../assets/images/icons/i-78.png" class="mr-5">biostat.css</p>
          </td>
          <td>
            <p>1.04M</p>
          </td>
          <td>
            <p>3小时前</p>
          </td>
          <td>
            <a class="operation mr-10 ml-30" @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
            <a class="operation" @click="read">
              <Icon type="ios-download-outline" size="22"></Icon>
              <span class="info-text">下载</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p><img src="../../assets/images/icons/i-77.png" class="mr-5">biostat.css</p>
          </td>
          <td>
            <p>1.04M</p>
          </td>
          <td>
            <p>3小时前</p>
          </td>
          <td>
            <a class="operation mr-10" @click="look">
              <Icon type="ios-search" size="22"></Icon>
              <span class="info-text">查看</span>
            </a>
            <a class="operation mr-10 " @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
            <a class="operation" @click="read">
              <Icon type="ios-download-outline" size="22"></Icon>
              <span class="info-text">下载</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p><img src="../../assets/images/icons/i-78.png" class="mr-5">biostat.css</p>
          </td>
          <td>
            <p>1.04M</p>
          </td>
          <td>
            <p>3小时前</p>
          </td>
          <td>
            <a class="operation mr-10 ml-30" @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
            <a class="operation" @click="read">
              <Icon type="ios-download-outline" size="22"></Icon>
              <span class="info-text">下载</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p><img src="../../assets/images/icons/i-77.png" class="mr-5">biostat.css</p>
          </td>
          <td>
            <p>1.04M</p>
          </td>
          <td>
            <p>3小时前</p>
          </td>
          <td>
            <a class="operation mr-10" @click="look">
              <Icon type="ios-search" size="22"></Icon>
              <span class="info-text">查看</span>
            </a>
            <a class="operation mr-10 " @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
            <a class="operation" @click="read">
              <Icon type="ios-download-outline" size="22"></Icon>
              <span class="info-text">下载</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p><img src="../../assets/images/icons/i-78.png" class="mr-5">biostat.css</p>
          </td>
          <td>
            <p>1.04M</p>
          </td>
          <td>
            <p>3小时前</p>
          </td>
          <td>
            <a class="operation mr-10 ml-30" @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
            <a class="operation" @click="read">
              <Icon type="ios-download-outline" size="22"></Icon>
              <span class="info-text">下载</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p><img src="../../assets/images/icons/i-77.png" class="mr-5">biostat.css</p>
          </td>
          <td>
            <p>1.04M</p>
          </td>
          <td>
            <p>3小时前</p>
          </td>
          <td>
            <a class="operation mr-10" @click="look">
              <Icon type="ios-search" size="22"></Icon>
              <span class="info-text">查看</span>
            </a>
            <a class="operation mr-10 " @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
            <a class="operation" @click="read">
              <Icon type="ios-download-outline" size="22"></Icon>
              <span class="info-text">下载</span>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
      <div class=" text-r b-r">
        <Page :total="100" show-elevator class="mr-20"></Page>
      </div>
      <div class="mt-30"></div>
    </div>
  </div>
</template>
<script>
  export  default {
    data(){
      return {

      }
    },
    methods:{
      confirm () {
        this.$Modal.confirm({
          title: '是否删除该文件?',
          content: '<p>删除以后将不可恢复!</p>',
          onOk: () => {
            this.$Message.info('删除成功');
          },
          onCancel: () => {
            this.$Message.info('也是删除');
          }
        });
      },
      read(){
        this.$Message.info('操作成功!');
      },
      look(){
       this.$router.push({
         name:"查看文件",
         path:"/control_panel/my_files"
       })
      }
    }
  }
</script>
