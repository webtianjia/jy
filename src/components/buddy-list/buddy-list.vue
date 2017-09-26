<template>
  <div>
    <div class="panel mt-10">
      <div class="mt-20 ml-10 mr-10">
        <i-Input  placeholder="搜索用户(用户名，长居地，email)" class="search-input" >
          <i-Button slot="append" class="search-btn">搜索</i-Button>
        </i-Input>
      </div>
      <div class="mt-20"></div>
    </div>
    <div class="panel mt-10">
      <div class="panel-heading">
        <i class="icon i-49"></i>好友列表
      </div>
      <table class="table table-hover">
        <tbody class="col-666">
        <tr>
          <td>
            <p>
              <a href="#" class="link">
                <img src="../../assets/images/list/head.png">
              </a>
              <a href="#" class="link">我是一个用户名</a>
            </p>
          </td>
          <td>
            <p>我是一个地址及职业介绍</p>
          </td>
          <td>
            <p>
              <button type="button" class="btn btn-main mr-20" @click="read">接受</button>
              <button type="button" class="btn btn-outline" @click="read">忽略</button>
            </p>
            <p hidden>
              <span class="col-main">等待验证</span>
            </p>
            <p hidden>
              <button class="btn btn-main">添加</button>
            </p>
            <p hidden>
              <span class="col-main mr-20">已过期</span>
              <button class="btn btn-outline">删除</button>
            </p>
            <p hidden>
              <span class="mr-20">已是好友</span>
              <button class="btn btn-outline">删除</button>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <a href="#" class="link">
                <img src="../../assets/images/list/head.png">
              </a>
              <a href="#" class="link">我是一个用户名</a>
            </p>
          </td>
          <td>
            <p>我是一个地址及职业介绍</p>
          </td>
          <td>
            <p hidden>
              <button type="button" class="btn btn-main mr-20">接受</button>
              <button type="button" class="btn btn-outline">忽略</button>
            </p>
            <p >
              <span class="col-main">等待验证</span>
            </p>
            <p hidden>
              <button class="btn btn-main">添加</button>
            </p>
            <p hidden>
              <span class="col-main mr-20">已过期</span>
              <button class="btn btn-outline">删除</button>
            </p>
            <p hidden>
              <span class="mr-20">已是好友</span>
              <button class="btn btn-outline">删除</button>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <a href="#" class="link">
                <img src="../../assets/images/list/head.png">
              </a>
              <a href="#" class="link">我是一个用户名</a>
            </p>
          </td>
          <td>
            <p>我是一个地址及职业介绍</p>
          </td>
          <td>
            <p hidden>
              <button type="button" class="btn btn-main mr-20">接受</button>
              <button type="button" class="btn btn-outline">忽略</button>
            </p>
            <p hidden>
              <span class="col-main">等待验证</span>
            </p>
            <p >
              <button class="btn btn-main" @click="read">添加</button>
            </p>
            <p hidden>
              <span class="col-main mr-20">已过期</span>
              <button class="btn btn-outline">删除</button>
            </p>
            <p hidden>
              <span class="mr-20">已是好友</span>
              <button class="btn btn-outline">删除</button>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <a href="#" class="link">
                <img src="../../assets/images/list/head.png">
              </a>
              <a href="#" class="link">我是一个用户名</a>
            </p>
          </td>
          <td>
            <p>我是一个地址及职业介绍</p>
          </td>
          <td>
            <p hidden>
              <button type="button" class="btn btn-main mr-20">接受</button>
              <button type="button" class="btn btn-outline">忽略</button>
            </p>
            <p hidden>
              <span class="col-main">等待验证</span>
            </p>
            <p hidden>
              <button class="btn btn-main">添加</button>
            </p>
            <p >
              <span class="col-main mr-30">已过期&nbsp;</span>
              <button class="btn btn-outline" @click="read">删除</button>
            </p>
            <p hidden>
              <span class="mr-20">已是好友</span>
              <button class="btn btn-outline">删除</button>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <a href="#" class="link">
                <img src="../../assets/images/list/head.png">
              </a>
              <a href="#" class="link">我是一个用户名</a>
            </p>
          </td>
          <td>
            <p>我是一个地址及职业介绍</p>
          </td>
          <td>
            <p hidden>
              <button type="button" class="btn btn-main mr-20">接受</button>
              <button type="button" class="btn btn-outline">忽略</button>
            </p>
            <p hidden>
              <span class="col-main">等待验证</span>
            </p>
            <p hidden>
              <button class="btn btn-main">添加</button>
            </p>
            <p hidden>
              <span class="col-main mr-20">已过期</span>
              <button class="btn btn-outline">删除</button>
            </p>
            <p >
              <span class="mr-20 col-main">已是好友</span>
              <button class="btn btn-outline" @click="confirm">删除</button>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <a href="#" class="link">
                <img src="../../assets/images/list/head.png">
              </a>
              <a href="#" class="link">我是一个用户名</a>
            </p>
          </td>
          <td>
            <p>我是一个地址及职业介绍</p>
          </td>
          <td>
            <p hidden>
              <button type="button" class="btn btn-main mr-20">接受</button>
              <button type="button" class="btn btn-outline">忽略</button>
            </p>
            <p hidden>
              <span class="col-main">等待验证</span>
            </p>
            <p hidden>
              <button class="btn btn-main">添加</button>
            </p>
            <p hidden>
              <span class="col-main mr-20">已过期</span>
              <button class="btn btn-outline">删除</button>
            </p>
            <p >
              <span class="mr-20 col-main">已是好友</span>
              <button class="btn btn-outline" @click="confirm">删除</button>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <a href="#" class="link">
                <img src="../../assets/images/list/head.png">
              </a>
              <a href="#" class="link">我是一个用户名</a>
            </p>
          </td>
          <td>
            <p>我是一个地址及职业介绍</p>
          </td>
          <td>
            <p hidden>
              <button type="button" class="btn btn-main mr-20">接受</button>
              <button type="button" class="btn btn-outline">忽略</button>
            </p>
            <p hidden>
              <span class="col-main">等待验证</span>
            </p>
            <p hidden>
              <button class="btn btn-main">添加</button>
            </p>
            <p hidden>
              <span class="col-main mr-20">已过期</span>
              <button class="btn btn-outline">删除</button>
            </p>
            <p >
              <span class="mr-20 col-main">已是好友</span>
              <button class="btn btn-outline" @click="confirm">删除</button>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <a href="#" class="link">
                <img src="../../assets/images/list/head.png">
              </a>
              <a href="#" class="link">我是一个用户名</a>
            </p>
          </td>
          <td>
            <p>我是一个地址及职业介绍</p>
          </td>
          <td>
            <p hidden>
              <button type="button" class="btn btn-main mr-20">接受</button>
              <button type="button" class="btn btn-outline">忽略</button>
            </p>
            <p hidden>
              <span class="col-main">等待验证</span>
            </p>
            <p hidden>
              <button class="btn btn-main">添加</button>
            </p>
            <p hidden>
              <span class="col-main mr-20">已过期</span>
              <button class="btn btn-outline">删除</button>
            </p>
            <p >
              <span class="mr-20 col-main">已是好友</span>
              <button class="btn btn-outline" @click="confirm">删除</button>
            </p>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="mt-50 text-r">
        <Page :total="100" show-elevator class="mr-20"></Page>
      </div>
      <div class="mt-30"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      confirm () {
        this.$Modal.confirm({
          title: '是否删除该好友?',
          content: '<p>删除以后将失去好友!</p>',
          onOk: () => {
            this.$Message.info('删除成功!');
          },
          onCancel: () => {
            this.$Message.info('删除失败');
          }
        });
      },
      read(){
        this.$Message.info('操作成功!');
      }
    }
  }
</script>
