<template>
  <div>
    <div class="main">
      <div class="container">
        <div class="layout mt-10" :class="{'layout-hide-text': spanLeft < 4}">
          <Row>
            <i-Col :span="spanLeft" class="layout-menu-left text-c">
              <div class="layout-logo-left">
                <button class="btn btn-text"  @click="toggleClick" >
                  <Icon type="navicon" size="32"></Icon>
                </button>
              </div>
              <Menu active-name="work_panel" theme="dark" width="auto" @on-select="router_link">
                <Menu-Item name="work_panel">
                  <i class="i-13"></i>
                  <span class="layout-text">工作面板</span>
                </Menu-Item>
                <Menu-Item name="market">
                  <i class="i-14"></i>
                  <span class="layout-text">应用市场</span>
                </Menu-Item>
                <Menu-Item name="my_application">
                  <i class="i-15"></i>
                  <span class="layout-text">我的应用</span>
                </Menu-Item>
                <Menu-Item name="my_project">
                  <i class="i-16"></i>
                  <span class="layout-text">我的项目</span>
                </Menu-Item>
                <Menu-Item name="my_files">
                  <i class="i-17"></i>
                  <span class="layout-text">我的文件</span>
                </Menu-Item>
                <Menu-Item name="my_account">
                  <i class="i-18"></i>
                  <span class="layout-text">我的账户</span>
                </Menu-Item>
                <Menu-Item name="buddy_list">
                  <i class="i-19"></i>
                  <span class="layout-text">好友列表</span>
                </Menu-Item>
                <Menu-Item name="use_help">
                  <i class="i-20"></i>
                  <span class="layout-text">使用帮助</span>
                </Menu-Item>
              </Menu>
            </i-Col>
            <i-Col :span="spanRight" class="layout-right">
              <div class="layout-content">
                <router-view></router-view>
              </div>
              <div class="layout-copy">
                <a href="#" class="mr-60">吉凯基因分析平台</a>
                <a href="#" class="mr-200">使用说明</a>
                <span class="copyright rg">©2017 GENECHEM All Rights Reserved.　沪ICP备15012724号    沪公网安备 310</span>
              </div>
            </i-Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export  default {
    data(){
      return {
        spanLeft:4,
        spanRight:20
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 4) {
          this.spanLeft = 2;
          this.spanRight = 22;
        } else {
          this.spanLeft = 4;
          this.spanRight = 20;
        }
      },
      router_link(name){
        switch (name){
          case 'work_panel' :this.$router.replace({ path: '/control_panel/work_panel' }) ;return;
          case "market" :this.$router.replace({ path: '/control_panel/market' }) ;return;
          case "my_application" :this.$router.replace({ path: '/control_panel/my_application' }) ;return;
          case "my_project" :this.$router.replace({ path: '/control_panel/my_project' }) ;return;
          case "my_files" :this.$router.replace({ path: '/control_panel/my_files' }) ;return;
          case "my_account" :this.$router.replace({ path: '/control_panel/my_account' }) ;return;
          case "buddy_list" :this.$router.replace({ path: '/control_panel/buddy_list' }) ;return;
          case "use_help" :this.$router.replace({ path: '/use_help' }) ;return;
        }
      }
    }
  }
</script>
