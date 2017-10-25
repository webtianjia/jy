<template>
  <div>
    <div class="container">
      <div class="panel mt-10">
        <div class="mt-20 ml-10">
          <ul class="tabs">
            <li class="mr-80" @click="type=0" :class="{'active':type===0}">
              <a href="javascript:void(0)">
                <span>未读消息</span>
                <span class="badge">11</span>
              </a>
              <i></i>
            </li>
            <li class="type=1" @click="type=1"  :class="{'active':type===1}">
              <a href="javascript:void(0)">
                <span>全部消息</span>
                <span class="badge">56</span>
              </a>
              <i></i>
            </li>
          </ul>
        </div>
        <div class="mt-20"></div>
      </div>
      <div v-if="type===0"  class="panel mt-10" style="min-height: 560px">
        <table class="table table-hover">
          <thead >
          <tr class="bg_f8f8f8">
            <td>
              <Checkbox  indeterminat="true">全选</Checkbox>
            </td>
            <td><img class="mr-5" src="../../assets/images/icons/i-38.png">发送者</td>
            <td><img class="mr-5" src="../../assets/images/icons/i-37.png">内容</td>
            <td><img class="mr-5" src="../../assets/images/icons/i-39.png">发送时间</td>
            <td><img class="mr-5" src="../../assets/images/icons/i-40.png">操作</td>
          </tr>
          </thead>
          <tbody class="col-666">
          <tr v-for=" i in 6">
            <td> <Checkbox  indeterminat="true"></Checkbox></td>
            <td>
              <img src="../../assets/images/list/head.png" style="width: 40px;height: 40px">
              <span>我是一个用户名</span>
            </td>
            <td>
              <span>您的项目SEAL-000021已运行完毕</span>
              <a class="col-main" href="#">点击查看</a>
            </td>
            <td>
              <span>一分钟前</span>
            </td>
            <td>
              <a class=" operation" @click="read">
                <Icon type="ios-email-outline" size="22"></Icon>
                <span class="info-text">已读</span>
              </a>
            </td>
          </tr>
          </tbody>
          <tfoot>
          <tr class="bg_dfe6ee">
            <td>
              <Checkbox  indeterminat="true">全选</Checkbox>
            </td>
            <td class="text-r" colspan="5">
              <span>已选项目</span>
              <span class="col-main mr-40">2个</span>
              <button class="btn btn-main mr-40">全部标记已读</button>
            </td>
          </tr>
          </tfoot>
        </table>
        <div class="mt-50 text-r">
          <Page :total="100" show-elevator class="mr-20"></Page>
        </div>
        <div class="mt-30"></div>
      </div>
      <div v-else class="panel mt-10" style="min-height: 560px">
        <table class="table table-hover">
          <thead >
          <tr class="bg_f8f8f8">
            <td>
              <Checkbox  indeterminat="true">全选</Checkbox>
            </td>
            <td><img class="mr-5" src="../../assets/images/icons/i-38.png">发送者</td>
            <td><img class="mr-5" src="../../assets/images/icons/i-37.png">内容</td>
            <td><img class="mr-5" src="../../assets/images/icons/i-39.png">发送时间</td>
            <td><img class="mr-5" src="../../assets/images/icons/i-40.png">操作</td>
          </tr>
          </thead>
          <tbody class="col-666">
          <tr v-for="i in 6">
            <td> <Checkbox  indeterminat="true"></Checkbox></td>
            <td>
              <img src="../../assets/images/list/head.png" style="width: 40px;height: 40px">
              <span>我是一个用户名</span>
            </td>
            <td>
              <span>您的项目SEAL-全部消息</span>
              <a class="col-main" href="#">点击查看</a>
            </td>
            <td>
              <span>一分钟前</span>
            </td>
            <td>
              <a class="mr-30 operation" @click="read">
                <Icon type="ios-email-outline" size="22"></Icon>
                <span class="info-text">已读</span>
              </a>
              <a class="operation" @click="confirm">
                <Icon type="ios-trash-outline" size="22"></Icon>
                <br>
                <span class="info-text">删除</span>
              </a>
            </td>
          </tr>

          </tbody>
          <tfoot>
          <tr class="bg_dfe6ee">
            <td>
              <Checkbox  indeterminat="true">全选</Checkbox>
            </td>
            <td class="text-r" colspan="5">
              <span>已选项目</span>
              <span class="col-main mr-40">2个</span>
              <button class="btn btn-main mr-40">全部标记已读</button>
              <button class="btn btn-main mr-40">全部删除</button>
            </td>
          </tr>
          </tfoot>
        </table>
        <div class="mt-50 text-r">
          <Page :total="100" show-elevator class="mr-20"></Page>
        </div>
        <div class="mt-30"></div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
    export default {
        data(){
            return {
              type:0
            }
        },
        methods: {
          confirm () {
            this.$Modal.confirm({
              title: '是否删除该消息?',
              content: '<p>删除以后将不可恢复!</p>',
              onOk: () => {
                this.$Message.info('删除成功');
              },
              onCancel: () => {
                this.$Message.info('删除');
              }
            });
          },
          read(){
            this.$Message.info('操作成功!');
          },
        }
    }
</script>
