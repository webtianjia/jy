<template>
  <div>
    <div class="panel ">
      <div class="panel-body">
        <Steps :current="1" class="mt-40 ml-50">
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
        <i class="icon i-28"></i>应用上传
      </div>
      <div class="panel-body">
        <i-Form  :label-width="100" style="width: 500px">
          <Form-Item label="程序类型">
            <Radio-Group v-model="formItem.radio">
              <Radio label="R程序"></Radio>
              <Radio label="Perl程序"></Radio>
            </Radio-Group>
          </Form-Item>
          <Form-Item label="上传程序包">
            <input type="file">
          </Form-Item>
          <Form-Item label="依赖程序包">
            <input type="file">
          </Form-Item>
          <Form-Item label="环境版本">
            <i-Select>
              <i-Option value="linux" >linux</i-Option>
            </i-Select>
          </Form-Item>
          <Form-Item label="备注">
            <i-Input  type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请描述用于程序运行的环境或特殊要求，供后台管理员进行配置及准备。"></i-Input>
          </Form-Item>
        </i-Form>
      </div>
    </div>
    <div class="panel mt-10 ">
      <div class="panel-heading">
        <i class="icon i-29"></i>参数配置
      </div>
      <div class="panel-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
            <tr>
              <th>参数名称</th>
              <th>参数值</th>
              <th>类型</th>
              <th>对应选项</th>
              <th>是否必填</th>
              <th>参数说明</th>
              <th style="width: 100px" class="text-c">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in options">
              <td>
                <i-Input v-model="item.name"   placeholder="请输入" ></i-Input>
              </td>
              <td>
                <i-Input v-model="item.value"   placeholder="请输入"></i-Input>
              </td>
              <td>
                <i-Select v-model="item.type">
                  <i-Option value="0">文本框</i-Option>
                  <i-Option value="1">整数输入</i-Option>
                  <i-Option value="2">小数输入</i-Option>
                  <i-Option value="3">选项</i-Option>
                  <i-Option value="4">二级选项</i-Option>
                  <i-Option value="5">上传单个文件</i-Option>
                  <i-Option value="6">上传多个文件</i-Option>
                  <i-Option value="7">色彩选择</i-Option>
                </i-Select>
              </td>
              <td>
                <button v-show="item.type==3" class="btn btn-text col-main" type="button" @click="show_option(index,1)">选项详情</button>
                <button v-show="item.type==4" class="btn btn-text col-main" type="button" @click="show_option(index,2)">选项详情</button>
                <div v-show="item.type!=3&&item.type!=4">--</div>
              </td>
              <td>
                <i-Select v-model="item.required" >
                  <i-Option value="1">是</i-Option>
                  <i-Option value="0">否</i-Option>
                </i-Select>
              </td>
              <td>
                <i-input v-model="item.text"></i-input>
              </td>
              <td class="text-c">
                <button @click="del_options(index)" class="btn btn-text col-main">删除</button>
              </td>
            </tr>
            </tbody>
          </table>
          <div>
            <button @click="add_options" type="button" class="btn btn-main">添加参数</button>
          </div>
        </div>
        <div class="text-c">
          <button type="button" class="btn btn-outline mr-40">取消</button>
          <button type="button" class="btn btn-main" onclick="location.href='创建应用3.html'">下一步</button>
        </div>
        <div class="mt-40"></div>
      </div>
    </div>
    <Modal v-model="model_1">
      <p slot="header">
        <span>添加选项</span>
      </p>
      <div class="table-responsive">
        <table class="table">
          <thead>
          <tr>
            <td>选项名称</td>
            <td>选项值</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in on_list">
            <td><i-input v-model="item.name"></i-input></td>
            <td><i-input v-model="item.value"></i-input></td>
            <td><button type="button" class="btn btn-text col-main" @click="del_child_option(index)">删除</button></td>
          </tr>
          </tbody>
        </table>
        <div>
          <button type="button" @click="add_child_option(1)" class="btn btn-main">添加选项</button>
        </div>
      </div>
      <div slot="footer">
        <button type="button" class="btn btn-outline" @click="model_1=false">取消</button>
        <button type="button" @click="keep_child_option(1)" class="btn btn-main">保存</button>
      </div>
    </Modal>
    <Modal v-model="model_2" :width="800">
      <p slot="header">
        <span>添加选项</span>
      </p>
      <div class="table-responsive">
        <table class="table ">
          <thead>
          <tr>
            <td>选项名称</td>
            <td>选项值</td>
            <td>子选项参数&nbsp;&nbsp;&nbsp;&nbsp;子选择值</td>
            <td></td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,$index) in on_list">
            <td><i-input v-model="item.name"></i-input></td>
            <td><i-input v-model="item.value"></i-input></td>
            <td>
              <div v-for="(two,two_index) in item.option" :r="$index" :c="two_index" class="mb-5">
                <i-input v-model="two.name" style="width: 60px;" class="mr-10"></i-input>
                <i-input v-model="two.value" style="width: 60px;"></i-input>
                <button class="col-main btn btn-text" @click="del_two_option($index,two_index)">删除</button>
              </div>
              <button class="btn btn-text col-main" @click="add_two_option($index)">添加子选项</button>
            </td>
            <td><button type="button" class="btn btn-text col-main" @click="del_child_option($index)">删除</button></td>
          </tr>
          </tbody>
        </table>
        <div>
          <button @click="add_child_option(2)" type="button" class="btn btn-main">添加选项</button>
        </div>
      </div>
      <div slot="footer">
        <button type="button" class="btn btn-outline" @click="model_2=false">取消</button>
        <button type="button" @click="keep_child_option(2)"  class="btn btn-main">保存</button>
      </div>
    </Modal>
  </div>
</template>
<script>
    export default {
        data(){
            return {
              formItem:{
                radio:"",
                number:2,
              },
              options_index:null,/*options index*/
              on_list:[],/*选项中间存储*/
              options:[
                {
                  name:null,
                  value:null,
                  type:null,
                  sel_option:null,
                  required:null,
                  text:"",
                  one_option:[/*一级选项*/
                    {
                      name:"",
                      value:"",
                    }
                  ],
                  two_option:[/*二级选项*/
                    {
                      name:"",
                      value:"",
                      option:[
                        {
                          name:"",
                          value:""
                        }
                      ]
                    }
                  ]
                }
              ]
            }
        },
        methods: {
          add_options(){/*添加选项*/
            this.options.push(
              {
                name:null,
                type:null,
                sel_option:null,
                required:null,
                text:"",
                one_option:[/*一级选项*/
                  {
                    name:"",
                    value:"",
                  }
                ],
                two_option:[/*二级选项*/
                  {
                    name:"",
                    value:"",
                    option:[
                      {
                        name:"",
                        value:""
                      }
                    ]
                  }
                ]
              }
            )
          },
          del_options(index){/*删除选项*/
            this.options.splice(index,1)
          },
          show_option(index,type){
            if(type===1){
              this.model_1=true;
              this.on_list=this.options[index].one_option;
              this.options[index].two_option=[{}];/*清空2级*/
            }else if(type===2) {
              this.model_2=true;
              this.on_list=this.options[index].two_option;
              this.options[index].one_option=[{}];/*清空1级*/
            }
            this.options_index=index;
          },
          add_child_option(type){/*添加选项*/
            if(type===1){
              this.on_list.push({
                name:"",
                value:""
              })
            }else if(type===2) {
              this.on_list.push({
                name:"",
                value:"",
                option:[
                  {
                    name:"",
                    value:""
                  }
                ]
              })
            }

          },
          del_child_option(index){/*删除选项1*/
            this.on_list.splice(index,1)
          },
          keep_child_option(type){/*保存选项1*/
            var index=this.options_index
            if(type===1){
              this.options[index].one_option=this.on_list;
              this.model_1=false;
            }else if(type===2) {
              this.options[index].two_option=this.on_list
              this.model_2=false;
            }
          },
          add_two_option($index,two_index){/*二级选项的子选项*/
            this.on_list[$index].option.push(
              {
                name:"",
                value:""
              } );
          },
          del_two_option($index,two_index){/*删除2级子选项*/
            this.on_list[$index].option.splice(two_index,1)
          }
        }
    }
</script>
