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
                <Menu active-name="1" theme="dark" width="auto" @on-select="router_link">
                  <Menu-Item name="work_panel">
                    <i class="i-13"></i>
                    <span class="layout-text">返回</span>
                  </Menu-Item>
                  <Submenu name="1">
                    <template slot="title">
                      <i class="i-13"></i>
                      <span class="layout-text">用户须知</span>
                    </template>
                    <Menu-Item name="1-1">选项 1</Menu-Item>
                    <Menu-Item name="1-2">选项 2</Menu-Item>
                    <Menu-Item name="1-3">选项 3</Menu-Item>
                  </Submenu>
                  <Submenu name="2">
                    <template slot="title">
                      <i class="i-13"></i>
                      <span class="layout-text">操作指南</span>
                    </template>
                    <Menu-Item name="2-1">选项 1</Menu-Item>
                    <Menu-Item name="2-2">选项 2</Menu-Item>
                    <Menu-Item name="2-3">选项 3</Menu-Item>
                  </Submenu>
                  <Submenu name="3">
                    <template slot="title">
                      <i class="i-13"></i>
                      <span class="layout-text">常见问题</span>
                    </template>
                    <Menu-Item name="3-1">选项 1</Menu-Item>
                    <Menu-Item name="3-2">选项 2</Menu-Item>
                    <Menu-Item name="3-3">选项 3</Menu-Item>
                  </Submenu>
                  <Submenu name="4">
                    <template slot="title">
                      <i class="i-13"></i>
                      <span class="layout-text">关于我们</span>
                    </template>
                    <Menu-Item name="4-1">关于我们</Menu-Item>
                    <Menu-Item name="4-2">联系我们</Menu-Item>
                    <Menu-Item name="4-3">投诉与建议</Menu-Item>
                    <Menu-Item name="4-4">平台公告</Menu-Item>
                  </Submenu>
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
          case "2" :this.$router.replace({ path: '/control_panel/market' }) ;return;
          case "3" :this.$router.replace({ path: '/control_panel/my_application' }) ;return;
          case "4" :this.$router.replace({ path: '/control_panel/my_project' }) ;return;
        }
      }
    }
  }
</script>
