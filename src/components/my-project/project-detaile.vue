<template>
  <div class="market application">
    <div class="panel mb-0 ">
      <div class="panel-body">
        <div class="title mr-40">项目编号：Seal-0001 项目名称：我是一个项目名称 应用程序：我是一个应用程序</div>
        <button class="btn btn-main" @click="info_modal=true"><i class="i-25"></i>应用说明</button>
      </div>
    </div>
    <div class="panel mt-10 application-form">
      <i-Form ref="formValidate"  :label-width="100">
        <div class="form-title">设置参数</div>
        <Form-Item class="mt-40" label="参数名称1">
          <Row>
            <i-Col span="18">
              <p><a href="../07.我的文件/查看文件.html">index.css</a></p>
            </i-Col>
          </Row>
        </Form-Item>
        <Form-Item label="参数名称2">
          <Row>
            <i-Col span="18">
              <p><a href="../07.我的文件/查看文件.html">index.RGB</a></p>
            </i-Col>
          </Row>
        </Form-Item>
        <Form-item label="参数名称3">
          <Row>
            <i-Col span="18">
              <p>AABB</p>
            </i-Col>
          </Row>
        </Form-item>
        <Form-item label="参数名称4">
          <Row>
            <i-Col span="18">
              <p>ccdd</p>
            </i-Col>
          </Row>
        </Form-item>
        <Form-item label="参数名称5">
          <Row>
            <i-Col span="18">
              <p>123</p>
            </i-Col>
          </Row>
        </Form-item>
        <Form-item label="参数名称6">
          <Row>
            <i-Col span="18">
              <p>xaz</p>
            </i-Col>
          </Row>
        </Form-item>
        <Form-item label="参数名称7">
          <Row>
            <i-Col span="18">
              <p>15, 20, 25</p>
            </i-Col>
          </Row>
        </Form-item>
        <Form-item label="参数名称8">
          <Row>
            <i-Col span="18">
              <p>不成熟</p>
            </i-Col>
          </Row>
        </Form-item>
        <Form-item label="参数名称9">
          <Row>
            <i-Col span="18">
              <p>#ff6001</p>
            </i-Col>
          </Row>
        </Form-item>
        <div class="well">
          <p><span class="f-14 mr-20" style="font-weight: bold">运行结果</span><a class="col-main mr-20" href="#">result1.txt</a> <a class="col-main mr-20" href="#">result2.txt</a></p>
        </div>
        <div class="text-c">
          <button type="button" class="btn btn-outline mr-40" @click="history.go(-1)">返回</button>

          <button type="button" class="btn btn-main  mr-40" @click="location.href='../04.应用市场/运行.html'">修改</button>
        </div>
        <div class="mt-30"></div>
      </i-Form>
    </div>
    <!--应用说明-->
    <Modal
      :width="800"
      v-model="info_modal"
      title="应用说明"
      class="application-info"
      class-name="vertical-center-modal">
      <div class="msg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci architecto assumenda at consectetur consequuntur dolorem doloribus earum est facilis iste, itaque molestias odit officia perferendis provident, quia quidem sequi.
        <img src="../images/list/4.png" alt="">
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
  </div>
</template>
<script>
    export default {
        data(){
            return {
              info_modal:false
            }
        },
        methods: {}
    }
</script>
