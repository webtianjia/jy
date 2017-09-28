<template>
  <div>
    <div class="panel ">
      <div class="panel-body">
        <Steps :current="3" class="mt-40 ml-50">
          <Step title="基本信息" content="填写应用的基本信息"></Step>
          <Step title="应用配置" content="上传程序包，并配置参数"></Step>
          <Step title="使用说明" content="撰写使用说明，并提示示例文件及参数"></Step>
          <Step title="提交审核" content="提交平台进行测试及审核"></Step>
        </Steps>
        <div class="mt-20"></div>
      </div>
    </div>
    <div class="panel mt-10 ">
      <div class="panel-heading">
        <i class="icon i-33"></i>审核状态
      </div>
      <div class="panel-body">
        <div class="text-c f-12">
          <!--审核-->
          <div v-if="state==1">
            <div  class="mt-40">
              <img src="../../assets/images/icons/i-34.png">
            </div>
            <p class="mt-30">您的应用已提交审核，在此期间不可修改或取消，敬请谅解。</p>
            <p class="ml-10"> 若有疑问，可致电021-25412551联系管理员。</p>
            <div class="mt-20"><button class="btn btn-main">确认</button></div>

          </div>
          <!--成功-->
          <div v-if="state==2">
            <div class="mt-40"> <img  src="../../assets/images/icons/i-35.png"></div>
            <p class="mt-30">恭喜您，您的应用已审核通过上线，感谢您对平台的支持。</p>
            <p class="ml-10"> 若有疑问，可致电021-25412551联系管理员。</p>
            <div class="mt-20">
              <button class="btn btn-main mr-20">确认</button>
              <button class="btn btn-outline mr-20">更新程序</button>
              <button class="btn btn-outline mr-20">下载应用</button>
            </div>
          </div>
          <!--错误-->
          <div v-if="state==3">
            <div class="mt-40"> <img  src="../../assets/images/icons/i-36.png"></div>
            <p class="mt-30">对不起，您的应用审核为未通过，原因如下：</p>
            <div class="mt-20">
              <div class="well text-l">一大串错误信息一大串错误信息一大串错误信息一大串错误信息一大串错误信息一大串错误信息 </div>
              <div class="text-r  col-666">若有疑问，可致电021-25412551联系管理员。</div>
            </div>
            <div class="mt-20">
              <button  class="btn btn-main mr-20">确认</button>
              <button class="btn btn-outline mr-20">返回修改</button>
              <button class="btn btn-outline mr-20">删除应用</button>
            </div>
          </div>
        </div>
        <button @click="toggle">测试</button>
        <div class="mt-70"></div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {
              state:1/*测试*/
            }
        },
        methods: {
          toggle(){/*测试*/
            this.state>=3&&(this.state=0);
            this.state++
          }
        }
    }
</script>
