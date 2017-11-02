<template>
  <div class="market">
    <div class="panel">
      <div class="panel-heading">
        <router-link :to="{name:'应用市场',path:'/control_panel/market'}">应用市场</router-link> >应用详情
      </div>
      <div class="panel-body details">
        <div class="media">
          <div class="media-left">
            <img src="../../assets/images/list/2.png" height="44" width="78"/>
          </div>
          <div class="media-body">
            <div class="rg">
              <span  class="col-main text-r mr-20"   v-if="checked"><Icon type="checkmark-round" class="mr-5"></Icon>已添加</span>
              <button @click="add" v-else type="button" class="btn btn-outline mr-10">添加到我的应用</button>
              <button  @click="share_model=true"    type="button" class="btn btn-outline mr-10">分享</button>
              <button @click="modal=true"  type="button" class="btn btn-main">立即应用</button>
              <div class="col-red text-r mt-5">￥3.00/次(免费)</div>
            </div>
            <div><span class="market-name">应用名称应用名称应用名称用名名称应用应用名称应用名称应用名称用名名称应用名称应用名称应用应用名称应用</span><span class="f-12 ml-5 col-666">调用次数：345次</span></div>
            <div class="labels mt-3 ">
              <span>我是一个标签啊</span>
              <span>最搞笑</span>
            </div>
          </div>
        </div>
        <div class="mt-20"></div>
        <div class="left-content lf ">
          <Carousel v-model="carousel"  :dots="'none'">
            <Carousel-Item v-for="i in 5">
                <img style="width:100%;height:100%" class="img-responsive" src="../../assets/images/list/3.png"/>
            </Carousel-Item>
          </Carousel>
          <div  class="gallery-thumbs">
              <span v-for="(i,$index) in 5" @click="carousel=$index" :class="{'active':carousel==$index}">
                <img src="../../assets/images/list/2.png">
              </span>
          </div>
        </div>
        <dl class="right-content rg f-12">
          <dt class="title">应用介绍</dt>
          <dd class="mt-10">应用的介绍应用的介绍应用的介绍应用的介 绍应用的介绍应用的介绍应用的介绍应用的 介绍应用的介绍应用的介绍应用的介绍应用 的介绍</dd>
          <dt class="mt-40 title">相关信息</dt>
          <dd class="mt-10">版本：1.3.0</dd>
          <dd>最后更新日期：2016.8.19</dd>
          <dd>预计运行时间：35秒/1200条</dd>
          <dd>开发语言：R3.40</dd>
          <dt class="mt-40 title">开发者</dt>
          <dd class="mt-10">Email:kddigj@daf.com</dd>
          <dd class="mt-20">引用说明: XXXX analysis was performed
            using the OmicShare tools.(www.omsic
            hare.com/tools) </dd>
          <dd class="text-c mt-30">
            <router-link  class="btn  btn-main" to="/application_log" target="_blank">应用日志</router-link>
          </dd>
        </dl>
      </div>
    </div>
    <!--创建-->
    <Modal
      :width="400"
      ok-text="创建"
      v-model="modal"
      title="创建项目"
      @on-ok="ok"
      class-name="vertical-center-modal">
      <i-Form :model="add_project" :label-width="80">
        <Form-Item label="项目名称">
          <i-Input style="width: 200px" v-model="add_project.name" placeholder="项目名称"></i-Input>
        </Form-Item>
        <Form-Item label="应用程序">
          <span>应用程序</span>
        </Form-Item>
        <Form-Item label="项目编号">
          <span>“应用代码”-201475</span>
        </Form-Item>
      </i-Form>
    </Modal>
    <!--分享-->
    <Modal
      class="f-14"
      :width="400"
      v-model="share_model"
      title="分享"
      class-name="vertical-center-modal">
      <div class="f-14">
        <label class="text-c center-block">分享链接</label>
        <div class="mt-10" style=" background-color: #f8f8f8"><pre><code> http://www.genechem.com.cn/  http://www.genechem.com.cn/  http://www.genechem.com.cn/</code></pre></div>
        <label class="text-c center-block">分享给好友</label>
        <i-Select v-model="city" filterable>
          <i-Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-Option>
        </i-Select>
      </div>
      <div slot="footer" class="text-c">
        <button class="btn btn-main mt-20" @click="share_model=false">确认</button>
        <div class="mt-20"></div>
      </div>
    </Modal>
  </div>
</template>
<script>
  export  default {
    data(){
      return{
        modal:false,
        checked:false,
        share_model:false,
        add_project:{
          name:""
        },
        city:"",
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        carousel:0/*轮播*/
      }
    },
    methods: {
      ok(){
        this.$router.replace({name:"运行",path:"/control_panel/market/detail/run"})
      },
      add(){
        this.checked=true;
        this.$Notice.success({
          title: '成功添加至您的应用！',
          desc: ''
        });
      },
    },
  }
</script>
