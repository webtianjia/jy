<template>
  <div>
    <div class="panel ">
      <div class="panel-body">
        <Steps :current="2" class="mt-40 ml-50">
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
        <i class="icon i-30"></i>应用说明
      </div>
      <div class="panel-body">
        <textarea id="text-content"></textarea>
      </div>
    </div>
    <div class="panel mt-10 ">
      <div class="panel-heading">
        <i class="icon i-31"></i>配置示例文件及默认参数
      </div>
      <div class="panel-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
            <tr>
              <th>参数名</th>
              <th>参数说明</th>
              <th>默认值</th>
              <th>示例文件及参数</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                --input
              </td>
              <td>
                输入文件
              </td>
              <td>
                --
              </td>
              <td>
                <input type="file">
              </td>
            </tr>
            <tr>
              <td>
                --width
              </td>
              <td>图片宽度，请输入3-15之间的数字</td>
              <td><i-Input value="4"></i-Input></td>
              <td><i-Input value="4"></i-Input></td>
            </tr>
            <tr>
              <td>
                --title
              </td>
              <td>标题，默认为null</td>
              <td><i-Input value="null"></i-Input></td>
              <td><i-Input value="null"></i-Input></td>
            </tr>
            <tr>
              <td>
                --par1
              </td>
              <td>多选项示例参数</td>
              <td>
                <i-Select v-model="formItem.sel_1"  :multiple="true" >
                  <i-Option v-for="item in formItem.cityList" :value="item.value" :key="item.value">{{ item.label }}</i-Option>
                </i-Select>
              </td>
              <td>
                <i-Select v-model="formItem.sel_2"  multiple >
                  <i-Option v-for="item in formItem.cityList" :value="item.value" :key="item.value">{{ item.label }}</i-Option>
                </i-Select>
              </td>
            </tr>
            <tr>
              <td>--par2</td>
              <td>单选示例参数</td>
              <td>
                <i-Select>
                  <i-Option value="1">yes</i-Option>
                  <i-Option value="2">no</i-Option>
                </i-Select>
              </td>
              <td>
                <i-Select>
                  <i-Option value="1">yes</i-Option>
                  <i-Option value="2">no</i-Option>
                </i-Select>
              </td>
            </tr>
            <tr>
              <td>--par3</td>
              <td>文本域示例参数</td>
              <td><i-Input type="textarea" placeholder="请输入..."></i-Input></td>
              <td><i-Input type="textarea" placeholder="请输入..."></i-Input></td>
            </tr>
            <tr>
              <td>--par4</td>
              <td>色彩选择示例参数</td>
              <td> <Color-Picker v-model="formItem.color" /></td>
              <td><Color-Picker v-model="formItem.color" /></td>
            </tr>
            <tr>
              <td>--par5</td>
              <td>线配置文件，需json格式</td>
              <td>--</td>
              <td><input type="file"></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="panel mt-10 ">
      <div class="panel-heading">
        <i class="icon i-32"></i>命令脚本预览(根据示例文件及参数）
      </div>
      <div class="panel-body">
        <div class="well f-18" style="font-family: Consolas,Menlo,Courier,monospace">
          Rscript scatter_plot_high.R --input sample.txt --width 4 --output output.txt
        </div>
        <div class="text-c mt-40">
          <button type="button" class="btn btn-outline mr-40">取消</button>
          <button type="button" class="btn btn-main" onclick="location.href='创建应用4.html'">提交审核</button>
        </div>
        <div class="mt-40"></div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {
              formItem:{
                radio:"",
                color:"#379cf8",
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
                sel_1:[],
                sel_2:[]
              }
            }
        },
        methods: {}
    }
</script>
