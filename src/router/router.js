import vue from 'vue'
import router from 'vue-router'

import index from '@/components/index'
import login from  "../components/home/login.vue"
import register from "../components/home/register.vue"
import about_us from "../components/page/about-us.vue"
import password_retrieval from "../components/home/password-retrieval.vue"
import reset_password from "../components/home/reset-password.vue"

/*控制面板*/
import control_panel from "../components/control-panel.vue"

/*工作面板*/
import work_panel from  "../components/work-panel/work-panel.vue"

/*市场*/
import market from "../components/market/market.vue"
import market_detail from "../components/market/market-detail.vue"
import application_run from "../components/market/application-run.vue"
import demand_edit from "../components/market/demand-edit.vue"
import demand_submit from "../components/market/demand-submit.vue"

/*我的应用*/
import my_application from "../components/my-application/my-application.vue"
import create_application_1 from "../components/my-application/create-1.vue"
import create_application_2 from "../components/my-application/create-2.vue"
import create_application_3 from "../components/my-application/create-3.vue"
import create_application_4 from "../components/my-application/create-4.vue"
/*我的项目*/
import  my_project from  "../components/my-project/my-project.vue"
import  view_details from  "../components/my-project/view-details.vue"

/*我的文件*/
import  my_files from "../components/my-files/my-files.vue"
import  look_file from "../components/my-files/file.vue"

/*我的账户*/
import my_account from "../components/my-account/my-account.vue"

/*好友列表*/
import  buddy_list from "../components/buddy-list/buddy-list.vue"
import  friend_details from "../components/buddy-list/friend-details.vue"
import  send_message from "../components/buddy-list/send-message.vue"

/*帮助中心*/
import use_help from  "../components/use-help/panel.vue"
import public_list from  "../components/use-help/public-list.vue"
import public_detail from  "../components/use-help/public-detail.vue"

/*充值*/
import recharge from  "../components/recharge/recharge.vue"
import recharge_success from  "../components/recharge/recharge-success.vue"
import recharge_frist from  "../components/recharge/recharge-frist.vue"
/*个人信息-面板*/
import  personal_information from  "../components/personal/panel.vue"
/*个人信息*/
import personal from "../components/personal/personal.vue"
/*安全设置*/
import security_setting from "../components/personal/security-setting.vue"
/*第三方账号*/
import other_accounts from "../components/personal/other-accounts.vue"
/*修改绑定账号-手机号*/
import modify_phone from "../components/personal/modify-phone.vue"
/*修改登录密码*/
import modify_pwd from "../components/personal/modify-pwd.vue"
/*修改支付密码*/
import modify_payment from "../components/personal/modify-payment.vue"

/*消息列表*/
import message_list from "../components/message/message-list.vue"
/*404*/
import  page_404 from "../components/page/404.vue"
vue.use(router);
export default new router({
  mode: 'history',
	routes: [
		{
			path: '/',
			name: '首页',
			component: index
		},
		{
			path: '/index',
      meta:{auth:false},
			component: index
		},
		{
			path: '/login',
			name: 'login',
      title:"登录",
			component: login
		},
		{
			path: '/register',
			name: '注册',
			component: register
		},
		{
			path: '/about_us',
			name: '关于我们',
      meta:{auth:false},
			component: about_us
		},
		{
			path: '/password_retrieval',
			name: '找回密码',
			component: password_retrieval
		},
		{
			path: '/reset_password',
			name: '找回成功',
			component: reset_password
		},
		{
			path: '/control_panel',
			name: '应用',
			component: control_panel,
			children:[
				{
					path:"/control_panel/work_panel",
					name:"工作面板",
					component:work_panel
				},
				{
					path:"/control_panel/market",
					name:"应用市场",
					component:market,
				},
        {
          path: "/control_panel/market/detail",
          name: "应用详情",
          component: market_detail,
        },
        {
          path:"/control_panel/market/detail/run",
          name:"运行",
          component:application_run,
        },
        {
          path:"/control_panel/market/demand_edit",
          name:"提需求",
          component:demand_edit,
        },
        {
          path:"/control_panel/market/demand_submit",
          name:"提交需求",
          component:demand_submit,
        },
				{
					path:"/control_panel/my_application",
					name:"我的应用",
					component:my_application,
				},
        {
          path:"/control_panel/my_application/create_application_1",
          name:"创建应用1",
          component:create_application_1,
        },
        {
          path:"/control_panel/my_application/create_application_2",
          name:"创建应用2",
          component:create_application_2,
        },
        {
          path:"/control_panel/my_application/create_application_3",
          name:"创建应用3",
          component:create_application_3,
        },
        {
          path:"/control_panel/my_application/create_application_4",
          name:"创建应用4",
          component:create_application_4,
        },
				{
					path:"/control_panel/my_project",
					name:"我的项目",
					component:my_project
				},
				{
					path:"/control_panel/view_details",
					name:"查看详情",
					component:view_details
				},
				{
					path:"/control_panel/my_files",
					name:"我的文件",
					component:my_files
				},
        {
          path:"/control_panel/look_file",
          name:"查看文件",
          component:look_file
        },
				{
					path:"/control_panel/my_account",
					name:"我的账户",
					component:my_account
				},
				{
					path:"/control_panel/buddy_list",
					name:"好友列表",
					component:buddy_list
				},
        {
          path:"/control_panel/friend_details/:id",
          name:"好友详情",
          component:friend_details
        },
        {
          path:"/control_panel/send_message/:id",
          name:"站内信",
          component:send_message
        },
			]
		},
		{
			path:"/use_help",
			name:"使用帮助",
			component:use_help,
      children:[
        {
          path:"/use_help/public_list",
          name:"公告列表",
          component:public_list,
        },
        {
          path:"/use_help/public_detail",
          name:"公告详情",
          component:public_detail,
        }
      ]
		},
		{
			path:"/recharge",
			name:"充值",
			component:recharge
		},
    {
      path:"/recharge-success",
      name:"充值成功",
      component:recharge_success
    },
    {
      path:"/recharge-frist",
      name:"首次充值设置密码",
      component:recharge_frist
    },
    {
      path:"/personal_information",
      name:"个人信息-面板",
      component:personal_information,
      children:[
        {
          path:"/personal_information/personal",
          name:"个人信息",
          component:personal
        },
        {
          path:"/personal_information/security_setting",
          name:"安全设置",
          component:security_setting,
        },
        {
          path:"/personal_information/other_accounts",
          name:"第三方账号",
          component:other_accounts
        },
        {
          path:"/personal_information/modify_phone",
          name:"修改绑定账号",
          component:modify_phone
        },
        {
          path:"/personal_information/modify_pwd",
          name:"修改密码",
          component:modify_pwd
        },
        {
          path:"/personal_information/modify_payment",
          name:"修改支付密码",
          component:modify_payment
        }
      ]
    },
    {
      path:"/message_list",
      name:"消息列表",
      component:message_list
    },
    {
      name:"404",
      path:"*",
      redirct:"/page_404",
      component:page_404
    },
	]
})
