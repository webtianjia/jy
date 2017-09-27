<template>
  <div class="market">
    <div class="panel ">
      <div class="panel-body">
        <i-Input  placeholder="搜索应用" class="search-input">
          <i-Button slot="append" class="search-btn">搜索</i-Button>
        </i-Input>
        <div class="search-labels mt-10 ml-10">
          <a v-for="i in 3" href="#">我是一个标签啊</a>
        </div>
      </div>
    </div>
    <div class="panel mt-10 ">
      <div class="panel-heading">
        <i class="icon i-22"></i>精选应用
      </div>
      <div class="panel-body">
        <div class="market-banner">
          <swiper :options="swiper.swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="i in 4">
              <div class="positon-r">
                <img class="cover-img" src="../../assets/images/list/5.png">
                <div class="media banner-content">
                  <div class="media-left">
                    <router-link :to="{name:'应用详情',path:'/market/detail'}"><img src="../../assets/images/list/6.png"></router-link>
                  </div>
                  <div class="media-body">
                    <div class="rg">
                      <p  class="col-main text-r"   v-if="checked"><Icon type="checkmark-round" class="mr-5"></Icon>已添加</p>
                      <button @click="add" type="button" v-else  class="btn btn-main">添加到我的应用</button>
                      <p class="text-r col-red">￥3.00/次(免费)</p>
                    </div>
                    <div><router-link :to="{name:'应用详情',path:'/market/detail'}" class="title text-overflow">HOPLCE直肠癌基因检测HOPLCE直肠癌基因HOPLCE直肠癌基因检测HOPLCE直肠癌基因HOPLCE直肠癌基因检测HOPLCE直肠癌基因...</router-link><span class="f-12 col-666">调用次数：345次</span></div>
                    <div class="labels">
                      <span>我是一个标签...</span>
                      <span>我是一个标签...</span>
                      <span>基因.</span>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
    </div>
    <div class="panel mt-10 ">
      <div class="panel-heading">
        <i class="icon i-23"></i>新手必备
      </div>
      <div class="panel-body application-list">
        <dl v-for="i in 8">
          <dt>
            <router-link :to="{name:'应用详情',path:'/market/detail'}"><img src="../../assets/images/list/1.png" height="130" width="235"/></router-link>
            <div class="transition-info">
              <router-link class="info-text" :to="{name:'应用详情',path:'/market/detail'}">房检查 乳腺病是危害女性身心健康
                的主要疾病,妇检是女性健康的一道
                己负责的表现,点击了解民生医己负责的表现,点击了解民生医己负责的表现,点击了解民生医...</router-link>
              <div class="mt-20">调用次数：365次</div>
            </div>
          </dt>
          <dd>
            <a class="title" href="应用详情.html">
              HOPLCE 肺癌基因检测HOPLCE 肺癌基因检测HOPLCE 肺癌基因检测HOPLCE 肺癌基因检测HOPLCE 肺癌基因检测
            </a>
            <div class="rg col-red mt-5">￥3.00/次</div>
            <div class="labels mt-5">
              <span>我是一个标签啊</span>
              <span>最搞笑</span>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="panel mt-10 ">
      <div class="panel-heading">
        <a class="rg f-12" href="#">查看更多&gt;&gt;</a>
        <i class="icon i-24"></i>全部应用
      </div>
      <div class="panel-body application-list">
        <dl v-for="i in 8">
          <dt>
            <router-link :to="{name:'应用详情',path:'/market/detail'}"><img src="../../assets/images/list/1.png" height="130" width="235"/></router-link>
            <div class="transition-info">
              <router-link class="info-text" :to="{name:'应用详情',path:'/market/detail'}">房检查 乳腺病是危害女性身心健康
                的主要疾病,妇检是女性健康的一道
                己负责的表现,点击了解民生医己负责的表现,点击了解民生医己负责的表现,点击了解民生医...</router-link>
              <div class="mt-20">调用次数：365次</div>
            </div>
          </dt>
          <dd>
            <a class="title" href="应用详情.html">
              HOPLCE 肺癌基因检测HOPLCE 肺癌基因检测HOPLCE 肺癌基因检测HOPLCE 肺癌基因检测HOPLCE 肺癌基因检测
            </a>
            <div class="rg col-red mt-5">￥3.00/次</div>
            <div class="labels mt-5">
              <span>我是一个标签啊</span>
              <span>最搞笑</span>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        checked:false,
        swiper:{
          swiperOption:{
            autoplay:10000000,
            loop:true,
            loopedSlides:3,
            spaceBetween:10,
            centeredSlides:true,
            slidesPerView : 'auto',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
          }
        }
      }
    },
    methods:{
      add(){
        this.checked=true;
        this.$Notice.success({
          title: '成功添加至您的应用！',
          desc: ''
        });
      }
    },

  }
</script>
