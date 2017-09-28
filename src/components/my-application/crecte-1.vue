<template>
  <div>
    <div class="panel ">
      <div class="panel-body">
        <Steps :current="0" class="mt-40 ml-50">
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
        <i class="icon i-28"></i>基本信息
      </div>
      <div class="panel-body">
        <i-Form  :label-width="100" style="width: 500px">
          <Form-Item label="应用名称">
            <i-Input  placeholder="请输入应用名称"></i-Input>
          </Form-Item>
          <Form-Item label="应用编码">
            <i-Input  placeholder="请输入四位字母的应用编码"></i-Input>
          </Form-Item>
          <Form-Item label="应用logo">
            <Upload
              class="inline-block"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
              multiple
              type="drag"
              action="//jsonplaceholder.typicode.com/posts/"
              style="display: inline-block;width:58px;">
              <div style="width: 58px;height:58px;line-height: 58px;">
                <Icon type="camera" size="20"></Icon>
              </div>
            </Upload>
            <span class="f-12 col-666 inline-block ml-10">不大于10M的jpg，jpeg，png格式照片</span>
          </Form-Item>
          <Form-Item label="应用简介">
            <i-Input  type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入应用简介"></i-Input>
          </Form-Item>
          <Form-Item label="应用价格">
            <Radio-Group v-model="formItem.radio">
              <Radio label="mf">免费</Radio>
              <Radio label="sf">收费</Radio>
            </Radio-Group>
            <lable class="ivu-radio-wrapper vu-radio-group-item mb-5 ml-20">每次J$ <i-Input style="width: 200px"></i-Input></lable>
          </Form-Item>
          <Form-Item label="应用截图">
            <Upload
              class="inline-block"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
              multiple
              type="drag"
              action="//jsonplaceholder.typicode.com/posts/"
              style="display: inline-block;width:58px;">
              <div style="width: 58px;height:58px;line-height: 58px;">
                <Icon type="camera" size="20"></Icon>
              </div>
            </Upload>
            <span class="f-12 col-666 inline-block ml-10">不大于10M的jpg，jpeg，png格式照片</span>
          </Form-Item>
          <Form-Item label="应用标签">
            <i-Input  placeholder="输入标签，回车隔开"></i-Input>
          </Form-Item>
          <Form-Item label="版本信息">
            <i-Input  placeholder="请输入版本信息"></i-Input>
          </Form-Item>
          <Form-Item label="预计运行时间">
            <i-Input  placeholder="请输入预计运行时间"></i-Input>
          </Form-Item>
          <Form-Item label="联系邮箱">
            <i-Input  placeholder="请输入有效邮箱，用于联系开发者"></i-Input>
          </Form-Item>
          <Form-Item label="引用说明">
            <i-Input  type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入引用说明"></i-Input>
          </Form-Item>
        </i-Form>
        <div class="text-c">
          <button type="button" class="btn btn-outline mr-40">取消</button>
          <button type="button" class="btn btn-main" onclick="location.href='创建应用2.html'">下一步</button>
        </div>
        <div class="mt-40"></div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        methods: {}
    }
</script>
