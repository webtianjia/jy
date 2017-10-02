<template>
  <header  class="header" >
    <div class="container">
      <router-link :to="{name:'首页',path:'/index'}">
        <div class="layout-logo"></div>
        <div class="lf">Gcloud</div>
      </router-link>
      <div   class="lf ml-50"><router-link :to="{name:'关于我们',path:'/about_us'}">关于平台</router-link></div>
      <div  v-if="!header_user_msg.is_login" class="lf ml-50"><a href="javascript:void (0)">新闻中心</a></div>
      <Dropdown v-if="header_user_msg.is_login" class="lf ml-50">
         <a href="javascript:void (0)">
             <span> 更多平台</span>
             <Icon type="arrow-down-b"></Icon>
         </a>
         <DropdownMenu slot="list">
             <Dropdown-Item>新增和启动</Dropdown-Item>
             <Dropdown-Item>活跃分析</Dropdown-Item>
             <Dropdown-Item>时段分析</Dropdown-Item>
             <Dropdown-Item>更多平台四</Dropdown-Item>
         </DropdownMenu>
     </Dropdown>
      <div v-if="header_user_msg.is_login" class="search ml-50 lf">
         <input class="search-input" type="text" placeholder="搜索应用">
         <button class="search-btn"></button>
     </div>
      <div class="rg">
        <div v-if="!header_user_msg.is_login" class="lf mr-20"><router-link :to="{name:'注册',path:'/register'}"  class="register-btn">注册</router-link></div>
        <div v-if="!header_user_msg.is_login" class="lf"><router-link :to="{name:'login',path:'/login',title:'登录'}" class="login-btn">登录</router-link></div>
        <div v-if="header_user_msg.is_login" class="lf ml-50">
            <Dropdown trigger="click">
                <div href="#" class="badge">
                    <div class="badge-count">99+</div>
                </div>
                <Dropdown-Menu slot="list">
                    <div class="news">
                        <div class="news-header">
                            <a class="rg" href="#">全部已读</a>
                            <i class="icon"></i>
                            <span>未读消息(36条)</span>
                        </div>
                        <div class="news-content">
                            <ul class="list">
                                <li>
                                    <div class="title">系统消息</div>
                                    <div class="content">全新应用新鲜上线。火热八月感觉最快捷的生物信息分析 工具点工具点工具点工具点工具点....</div>
                                    <a href="#">点击查看</a>
                                </li>
                                <li>
                                    <div class="title">系统消息</div>
                                    <div class="content">全新应用新鲜上线。火热八月感觉最快捷的生物信息分析 工具点工具点工具点工具点工具点....</div>
                                    <a href="#">点击查看</a>
                                </li>
                                <li>
                                    <div class="title">系统消息</div>
                                    <div class="content">全新应用新鲜上线。火热</div>
                                    <a href="#">点击查看</a>
                                </li>
                                <li>
                                    <div class="title">系统消息</div>
                                    <div class="content">全新应用新鲜上线。火热八月感觉最快捷的生物信息分析 工具点工具点工具点工具点工具点....</div>
                                    <a href="#">点击查看</a>
                                </li>
                                <li>
                                    <div class="title">系统消息</div>
                                    <div class="content">全新应用新鲜上线。火热八月感觉最快捷的生物信息分析 工具点工具点工具点工具点工具点....</div>
                                    <a href="#">点击查看</a>
                                </li>
                                <li>
                                    <div class="title">系统消息</div>
                                    <div class="content">全新应用新鲜上线。火热</div>
                                    <a href="#">点击查看</a>
                                </li>
                                <li>
                                    <div class="title">系统消息</div>
                                    <div class="content">全新应用新鲜上线。火热八月感觉最快捷的生物信息分析 工具点工具点工具点工具点工具点....</div>
                                    <a href="#">点击查看</a>
                                </li>
                                <li>
                                    <div class="title">系统消息</div>
                                    <div class="content">全新应用新鲜上线。火热八月感觉最快捷的生物信息分析 工具点工具点工具点工具点工具点....</div>
                                    <a href="#">点击查看</a>
                                </li>
                                <li>
                                    <div class="title">系统消息</div>
                                    <div class="content">全新应用新鲜上线。火热</div>
                                    <a href="#">点击查看</a>
                                </li>
                            </ul>
                        </div>
                        <div class="new-footer">
                            <a href="#">查看全部>></a>
                        </div>
                    </div>
                </Dropdown-Menu>
            </Dropdown>
        </div>
        <div v-if="header_user_msg.is_login" class="lf ml-20">
            <Dropdown @on-click="router_link">
                <a href="javascript:void(0)">
                    <img class="img-circle head" src="../../assets/images/head.png" style="width: 40px;height: 40px">
                    <span class=" name text-overflow">{{header_user_msg.user_name}}</span>
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <DropdownMenu slot="list" >
                    <Dropdown-Item name="/control_panel/work_panel">个人信息</Dropdown-Item>
                    <Dropdown-Item >安全设置</Dropdown-Item>
                    <Dropdown-Item >第三方账号</Dropdown-Item>
                    <Dropdown-Item name="exit"><span >退出</span></Dropdown-Item>
                </DropdownMenu>
            </Dropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import {delCookie} from "../../util/util";

  export default {
    data(){
      return{

      }
    },
    methods: {
      router_link(name) {
        if (name === "exit") {
         this.$router.replace({path:"login"});
          delCookie("username")
        }else {
          this.$router.replace({
            path: name
          })
        }
      }
    },
    props:['header_user_msg']
  }
</script>
