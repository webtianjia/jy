<template>
  <div class="container">
    <div class="layout mt-10" :class="{'layout-hide-text': spanLeft < 4}">
      <Row>
        <i-Col :span="spanLeft" class="layout-menu-left text-c">
          <div class="layout-logo-left">
            <button class="btn btn-text"  @click="toggleClick" >
              <Icon type="navicon" size="32"></Icon>
            </button>
          </div>
          <Menu active-name="personal" theme="dark" width="auto" @on-select="router_link">
            <Menu-Item name="work_panel">
              <Icon type="ios-undo" size="22"></Icon>
              <span class="layout-text">返回工作面板</span>
            </Menu-Item>
            <Menu-Item name="personal">
             <!-- <i class="i-62"></i>-->
              <Icon type="person" size="22"></Icon>
              <span class="layout-text">个人信息</span>
            </Menu-Item>
            <Menu-Item name="security_setting">
            <!--  <i class="i-63"></i>-->
              <Icon type="locked" size="22"></Icon>
              <span class="layout-text">安全设置</span>
            </Menu-Item>
            <Menu-Item name="other_accounts">
              <!--<i class="i-64"></i>-->
              <Icon type="android-contacts" size="22"></Icon>
              <span class="layout-text">第三方账号</span>
            </Menu-Item>
          </Menu>
        </i-Col>
        <i-Col :span="spanRight" class="layout-right">
          <div class="layout-content">
            <router-view></router-view>
          </div>
          <div class="layout-copy">
            <span class="copyright rg">©2017 GENECHEM All Rights Reserved.　沪ICP备15012724号    沪公网安备 310</span>
            <a href="#" class="mr-60">吉凯基因分析平台</a>
            <a href="#" class="mr-200">使用说明</a>
          </div>
        </i-Col>
      </Row>
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
          case 'personal' :this.$router.replace({ path: '/personal_information/personal' }) ;return;
          case "security_setting" :this.$router.replace({ path: '/personal_information/security_setting' }) ;return;
          case "other_accounts" :this.$router.replace({ path: '/personal_information/other_accounts' }) ;return;
          case "work_panel" :this.$router.replace({ path: '/control_panel/work_panel' }) ;return;
        }
      }
    }
  }
</script>
