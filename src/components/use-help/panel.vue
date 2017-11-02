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
                <Menu active-name="user_instructions" theme="dark" width="auto" @on-select="router_link">
                  <Menu-Item name="work_panel">
                    <Icon type="ios-undo" size="22"></Icon>
                    <span class="layout-text">返回工作面板</span>
                  </Menu-Item>
                  <Menu-Item name="user_instructions">
                    <Icon type="ios-book" size="22"></Icon>
                    <span class="layout-text">用户须知</span>
                  </Menu-Item>
                  <Menu-Item name="1">
                    <Icon type="document-text" size="22"></Icon>
                    <span class="layout-text">操作指南</span>
                  </Menu-Item>
                  <Menu-Item name="2">
                    <Icon type="help-circled" size="22"></Icon>
                    <span class="layout-text">常见问题</span>
                  </Menu-Item>
                  <Menu-Item name="3">
                    <Icon type="person-stalker" size="22"></Icon>
                    <span class="layout-text">关于我们</span>
                  </Menu-Item>
                  <Menu-Item name="4">
                    <Icon type="android-call" size="22"></Icon>
                    <span class="layout-text">联系我们</span>
                  </Menu-Item>
                  <Menu-Item name="5">
                    <Icon type="edit" size="22"></Icon>
                    <span class="layout-text">投诉与建议</span>
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
          case 'user_instructions' :this.$router.replace({ path: '/use_help/user_instructions' }) ;return;
        }
      }
    }
  }
</script>
