
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
              <button @click="add" v-else type="button" class="btn btn-outline mr-20">添加到我的应用</button>
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
        <div class="left lf ">
          <swiper  class="gallery-top" :options="swiper.swiperOption" :notNextTick="swiper.notNextTick" ref="Swiper_1">
            <swiper-slide v-for="i in 8">
              <img style="width:100%;height:100%" class="img-responsive" src="../../assets/images/list/3.png"/>
            </swiper-slide>

          </swiper>
          <swiper  class="gallery-thumbs" :options="swiper.swiperOption2" :notNextTick="swiper.notNextTick"  ref="Swiper_2">
            <swiper-slide v-for="i in 8">
              <img class="img-responsive" src="../../assets/images/list/2.png">
            </swiper-slide>
          </swiper>
        </div>
        <dl class="right rg f-12">
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
        </dl>
      </div>
    </div>
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
  </div>
</template>
<script>
  export  default {
    data(){
      return{
        modal:false,
        checked:false,
        add_project:{
          name:""
        },
        swiper:{
          control1:null,
          control2:null,
          notNextTick: true,
          swiperOption:{
            autoplay:3000,
            loop:true,
            loopedSlides:3,
            spaceBetween:10,
            centeredSlides:true,
            slidesPerView : 'auto',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            control:null
          },
          swiperOption2:{
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true,
            control:null
          }
        }
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
      }
    },
    computed: {

    },
    mounted(){
     /* console.log(this.$refs.Swiper_1.swiper)*/
       this.$refs.Swiper_1.params.control= this.$refs.Swiper_2.params.control;
       this.$refs.Swiper_2.params.control= this.$refs.Swiper_1.params.control;
    }

  }
</script>
