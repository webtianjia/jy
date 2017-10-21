<template>
  <div class="market run">
    <div class="panel mb-0 ">
      <div class="panel-body">
        <div class="title mr-40">项目编号：Seal-0001 项目名称：我是一个项目名称 应用程序：我是一个应用程序</div>
        <button class="btn btn-main" @click="info_modal=true"><i class="i-25"></i>应用说明</button>
      </div>
    </div>
    <div class="panel mt-10 application-form">
      <i-Form ref="formValidate" :model="formValidate"  :label-width="100">
        <div class="form-title">设置参数</div>
        <Form-Item class="mt-40" label="输入文件一">
          <Row>
            <i-Col span="18">
              <input type="file" class="btn ">
            </i-Col>
            <i-Col span="6">
                <span class="mr-40 tip">
                    <Tooltip placement="top">
                            <Icon type="help-circled" size="20"></Icon>
                            <div slot="content">
                                <p>显示多行信息</p>
                                <p><i>可以自定义样式</i></p>
                            </div>
                    </Tooltip>
                  </span>
              <button type="button" class="btn">示例</button>
            </i-Col>
          </Row>
        </Form-Item>
        <Form-Item label="输入文件二">
          <Row>
            <i-Col span="18">
              <input type="file" class="btn ">
            </i-Col>
            <i-Col span="6">
              <span class="mr-40 tip">
                    <Tooltip placement="top">
                  <Icon type="help-circled" size="20"></Icon>
                  <div slot="content">
                      <p>显示多行信息</p>
                      <p><i>可以自定义样式</i></p>
                  </div>
              </Tooltip>
              </span>
              <button type="button" class="btn">示例</button>
            </i-Col>
          </Row>
        </Form-Item>
        <Form-item label="输入性选项">
          <Row>
            <i-Col span="18">
              <i-Input  placeholder="请输入参数" style="width: 500px"></i-Input>
            </i-Col>
            <i-Col span="6">
                  <span class="mr-40 tip">
                        <Tooltip placement="top">
                      <Icon type="help-circled" size="20"></Icon>
                      <div slot="content">
                          <p>显示多行信息</p>
                          <p><i>可以自定义样式</i></p>
                      </div>
                  </Tooltip>
                  </span>
              <button type="button" class="btn">示例</button>
            </i-Col>
          </Row>
        </Form-item>
        <Form-item label="下拉性选项">
          <Row>
            <i-Col span="18">
              <i-Select  placeholder="请选择" style="width: 500px">
                <i-Option value="beijing">北京市</i-Option>
                <i-Option value="shanghai">上海市</i-Option>
                <i-Option value="shenzhen">深圳市</i-Option>
              </i-Select>
            </i-Col>
            <i-Col span="6">
                                                    <span class="mr-40 tip">
                                                          <Tooltip placement="top">
                                                        <Icon type="help-circled" size="20"></Icon>
                                                        <div slot="content">
                                                            <p>显示多行信息</p>
                                                            <p><i>可以自定义样式</i></p>
                                                        </div>
                                                    </Tooltip>
                                                    </span>
              <button type="button" class="btn">示例</button>
            </i-Col>
          </Row>
        </Form-item>
        <Form-item label="时间日期型选项">
          <Row>
            <i-Col span="18">
              <Date-Picker type="date" placeholder="选择日期" style="width: 250px"></Date-Picker>
              <Time-Picker type="time" placeholder="选择时间" style="width: 250px"></Time-Picker>
            </i-Col>
            <i-Col span="6">
                                                    <span class="mr-40 tip">
                                                          <Tooltip placement="top">
                                                        <Icon type="help-circled" size="20"></Icon>
                                                        <div slot="content">
                                                            <p>显示多行信息</p>
                                                            <p><i>可以自定义样式</i></p>
                                                        </div>
                                                    </Tooltip>
                                                    </span>
              <button type="button" class="btn">示例</button>
            </i-Col>
          </Row>
        </Form-item>
        <Form-item label="数字输入框">
          <Row>
            <i-Col span="18">
              <Input-Number :max="10" :min="1" style="width: 500px"></Input-Number>
            </i-Col>
            <i-Col span="6">
                                                    <span class="mr-40 tip">
                                                          <Tooltip placement="top">
                                                        <Icon type="help-circled" size="20"></Icon>
                                                        <div slot="content">
                                                            <p>显示多行信息</p>
                                                            <p><i>可以自定义样式</i></p>
                                                        </div>
                                                    </Tooltip>
                                                    </span>
              <button type="button" class="btn">示例</button>
            </i-Col>
          </Row>
        </Form-item>
        <Form-item label="单选">
          <Row>
            <i-Col span="18">
              <Radio-Group v-model="formValidate.radio">
                <Radio label="金斑蝶"></Radio>
                <Radio label="爪哇犀牛"></Radio>
                <Radio label="印度黑羚"></Radio>
              </Radio-Group>
            </i-Col>
            <i-Col span="6">
                                                    <span class="mr-40 tip">
                                                          <Tooltip placement="top">
                                                        <Icon type="help-circled" size="20"></Icon>
                                                        <div slot="content">
                                                            <p>显示多行信息</p>
                                                            <p><i>可以自定义样式</i></p>
                                                        </div>
                                                    </Tooltip>
                                                    </span>
              <button type="button" class="btn">示例</button>
            </i-Col>
          </Row>
        </Form-item>
        <Form-item label="多选">
          <Row>
            <i-Col span="18">
              <Checkbox-Group v-model="formValidate.checked">
                <Checkbox label="吃饭"></Checkbox>
                <Checkbox label="睡觉"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
              </Checkbox-Group>
            </i-Col>
            <i-Col span="6">
                <span class="mr-40 tip">
                      <Tooltip placement="top">
                    <Icon type="help-circled" size="20"></Icon>
                    <div slot="content">
                        <p>显示多行信息</p>
                        <p><i>可以自定义样式</i></p>
                    </div>
                </Tooltip>
                </span>
              <button type="button" class="btn">示例</button>
            </i-Col>
          </Row>
        </Form-item>
        <Form-item label="文本域">
          <Row>
            <i-Col span="18">
              <i-Input style="width: 500px" v-model="formValidate.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-Input>
            </i-Col>
        <i-Col span="6">
                <span class="mr-40 tip">
                      <Tooltip placement="top">
                    <Icon type="help-circled" size="20"></Icon>
                    <div slot="content">
                        <p>显示多行信息</p>
                        <p><i>可以自定义样式</i></p>
                    </div>
                </Tooltip>
                </span>
              <button type="button" class="btn">示例</button>
            </i-Col>
          </Row>
        </Form-item>
        <Form-item label="色彩选择">
          <Row>
            <i-Col span="18">
              <Color-Picker :value="formValidate.color" />
            </i-Col>
          <i-Col span="6">
                  <span class="mr-40 tip">
                        <Tooltip placement="top">
                      <Icon type="help-circled" size="20"></Icon>
                      <div slot="content">
                          <p>显示多行信息</p>
                          <p><i>可以自定义样式</i></p>
                      </div>
                  </Tooltip>
                  </span>
              <button type="button" class="btn">示例</button>
            </i-Col>
          </Row>
        </Form-item>
        <div class="text-c">
          <button @click="preservation" type="button" class="btn btn-outline mr-40">保存</button>
          <button @click="payment_modal=true" type="button" class="btn btn-main  mr-40" >提交</button>
          <button type="button" class="btn btn-success">按示例文件及参数运行</button>
        </div>
        <div class="mt-30"></div>
      </i-Form>
    </div>
    <!--应用说明-->
    <Modal
      :width="800"
      v-model="info_modal"
      title="应用说明"
      class="application-alert"
      class-name="vertical-center-modal">
      <div class="msg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci architecto assumenda at consectetur consequuntur dolorem doloribus earum est facilis iste, itaque molestias odit officia perferendis provident, quia quidem sequi.
        <img src="../../assets/images/list/4.png" alt="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti, ullam. Beatae cupiditate, deleniti dolorum eum facere itaque magni officia omnis, perspiciatis porro qui quibusdam tempora ut vero voluptatibus! Incidunt.
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda consectetur dolorum
          eius enim, eos eveniet harum ipsum libero molestias, nesciunt nulla officiis, perspiciatis
          quisquam quos tempora unde vitae voluptates!
        </div>
        <div>Animi aperiam aut, autem beatae ea, explicabo id illum libero magnam porro, quas quos
          ratione recusandae sunt unde ut voluptatem voluptates. Cupiditate dolore doloremque ducimus,
          facilis iure minima praesentium sit.
        </div>
        <div>Cumque laudantium minima quis saepe. A architecto autem commodi dolorem, fugit incidunt
          laboriosam libero maiores minus, mollitia odit perspiciatis placeat praesentium quos,
          recusandae rem repellat repudiandae similique sit totam? Enim.
        </div>
        <div>Accusantium aliquid blanditiis dignissimos ea, earum, in libero neque omnis perspiciatis
          sequi tempora ut vero voluptatibus? Beatae doloribus eum fugiat fugit quidem repellat
          temporibus voluptate? Consectetur dolorem ipsam unde veritatis?
        </div>
        <div>Aperiam architecto blanditiis cupiditate illum minus provident quas quasi, temporibus vel.
          Accusamus beatae consectetur doloribus, eligendi expedita iure iusto natus nemo odio quaerat
          sapiente sed sit sunt tempore velit, veniam!
        </div>
        <div>Aliquam aut consequatur deleniti dolores ea earum error eveniet ex excepturi explicabo
          fugit, illo in iure iusto nam nostrum omnis pariatur quaerat quo, repellat sapiente soluta
          sunt tempore temporibus velit.
        </div>
        <div>Amet atque consequatur consequuntur deserunt dicta, dignissimos eveniet expedita incidunt
          iure nesciunt pariatur quo, ratione recusandae reprehenderit ut vero, vitae. Ad expedita
          mollitia nostrum porro recusandae repudiandae saepe sequi, vel.
        </div>
        <div>Aliquam amet commodi cumque eos excepturi harum maiores modi, nihil, nostrum obcaecati quas
          vel! Earum pariatur rerum sapiente tempora tempore? Accusamus aliquid amet debitis eius
          harum nesciunt, odio sed totam!
        </div>
        <div>Aliquam consequuntur ex iste iusto laborum minima nesciunt nobis nulla numquam obcaecati
          odio, quaerat recusandae similique, soluta tenetur ut vel. Ad cupiditate illum nisi
          praesentium quaerat saepe soluta temporibus vitae.
        </div>
        <div>Amet aspernatur beatae corporis, culpa distinctio ea exercitationem, in itaque iure quis
          quo, quos sint suscipit unde vitae? A accusamus dolore, doloribus eos non quae quasi quidem
          quis sit tempora.
        </div>
      </div>
      <div slot="footer" class="text-c" style="border: none">
        <button  class="btn btn-main" @click="info_modal=false">确认</button>
      </div>
    </Modal>
    <!--支付&充值-->
    <Modal
      :width="400"
      v-model="payment_modal"
      class-name="vertical-center-modal">
      <div class="f-14">
        <div class="mt-20">您本次使用的应用    聚类分析V1.3</div>
        <div class="mt-20">需支付*币合计：<span class="col-red">J$ 0.99</span></div>
        <div v-show="balance<=total" class="mt-20">当前可用余额不足：<span class="col-red">J$ 0.19</span></div>
      </div>
      <div slot="footer" class="text-c">
        <button v-show="balance>=total" class="btn btn-main" @click="confirm_payment">确认支付</button>
        <button v-show="balance<total" class="btn btn-main" @click="recharge">去充值</button>
        <div class="mt-30"></div>
      </div>
    </Modal>
    <!--保存-->
    <Modal
      class="f-14"
      :width="400"
      v-model="preservation_model"
      class-name="vertical-center-modal">
      <div class="f-14">
        <div class="mt-20">
          <p>您的任务已保存至任务列表，您可通过在我的<a class="col-main" href="#">项目列表</a>中进行查看。</p>
        </div>
      </div>
      <div slot="footer" class="text-c">
        <button class="btn btn-main mt-20" @click="preservation_model=false">我知道了</button>
        <p class="f-12 col-999 mt-10">5秒后自动关闭 </p>
        <div class="mt-20"></div>
      </div>

    </Modal>
  </div>
</template>
<script>
  export  default {
    data(){
      return {
        info_modal:false,/*说明弹框*/
        payment_modal:false,/*支付弹框*/
        preservation_model:false,/*保存弹框*/
        balance:1,/*账号余额*/
        total:10,/*总价*/
        formValidate:{
          radio:"印度黑羚",
          checked:[],
          textarea:"",
          color:"#379CF8"
        }
      }
    },
    methods: {
      confirm_payment(){/*支付*/
        this.payment_modal=false;
        alert("支付成功")
      },
      recharge(){/*充值*/
        this.payment_modal=false;
        this.$router.replace({path:"/recharge"})
      },
      preservation(){/*保存*/
        this.preservation_model=true;
        setTimeout(()=>{
          this.preservation_model=false;
        },5000)
      }
    }
  }
</script>
