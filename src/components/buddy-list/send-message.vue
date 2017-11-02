<template>
  <div>
    <div class="panel">
      <div class="panel-heading text-c">
        <i class="icon i-55"></i>与&nbsp;{{$route.params.id}}&nbsp;的站内信
      </div>
      <div class="panel-body">
        <div id="m-message" class="m-message">
          <ul>
            <li>
              <p class="time"><span>2017-05-12   16:37</span></p>
              <div class="main">
                <img class="avatar" width="40" height="40" src="../../assets/images/head.png">
                <div class="name">ALEX</div>
                <div class="text">
                  义勇军进行曲
                  田汉作词,聂耳作曲
                  起来!
                  不愿做奴隶的人们!
                  把我们的血肉,
                  筑成我们新的长城!
                  中华民族到了
                  最危险的时候,
                  每个人被迫着
                  发出最后的吼声!
                  起来!
                  起来!
                  起来!
                  我们万众一心,
                  冒着敌人的炮火
                  前进,
                  冒着敌人的炮火
                  前进!
                  前进!
                  前进!进!!
                </div>
              </div>
            </li>
            <li>
              <p class="time"><span>15:10</span></p>
              <div class="main this">
                <img class="avatar" width="40" height="40" src="../../assets/images/head.png">
                <div class="name">大熊</div>
                <div class="text">没吃药？</div>
              </div>
            </li>
            <li>
              <p class="time"><span>2017-05-12   16:37</span></p>
              <div class="main">
                <img class="avatar" width="40" height="40" src="../../assets/images/head.png">
                <div class="name">ALEX</div>
                <div class="text">在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？在吗？？？</div>
              </div>
            </li>
            <li>
              <p class="time"><span>15:10</span></p>
              <div class="main this">
                <img class="avatar" width="40" height="40" src="../../assets/images/head.png">
                <div class="name">大熊</div>
                <div class="text">不在</div>
              </div>
            </li>
            <li>
              <p class="time"><span>15:10</span></p>
              <div class="main this">
                <img class="avatar" width="40" height="40" src="../../assets/images/head.png">
                <div class="name">大熊</div>
                <div class="text">英文字体选择，不够高级，可以试试opensans,lato字体 现在字体有
                  点粗，显得不够精致！两份CBinsights的分析文档，关于亚马逊的战
                  略布局以及下一代电商发展的趋势。
                  <img src="../../assets/images/list/1.png" alt="">
                </div>
              </div>
            </li>
            <li v-for="item in message_list ">
              <p class="time"><span>15:10</span></p>
              <div class="main this">
                <img class="avatar" width="40" height="40" src="../../assets/images/head.png">
                <div class="name">大熊</div>
                <div class="text" v-text="item.text"></div>
                <div></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-heading">
        <div class="m-text">
          <textarea @keyup.13="send" v-model="text_value" placeholder="在此输入信息"></textarea>
        </div>
        <div class="text-r mt-10 m-upload">
          <Upload
            ref="upload"
            :show-upload-list="false"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            class="lf"
            style="width: 30px"
          >
            <div class="cursor" style="width: 28px;height: 30px;line-height: 30px "><Icon type="image" size="30"></Icon></div>
          </Upload>
          <button type="button" @click="send" class="btn btn-main">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {
              text_value:"",
              message_list:[],
              uploadList:[]
            }
        },
        methods: {
          send(){
            var text=this.text_value;
            if(text.trim()==""){
              this.$Message.warning('不能发送空消息!');
              return;
            }
            this.message_list.push({
              text:text
            });
            this.$Message.success('发送成功!');
            this.text_value="";
          },
          handleRemove (file) {
            // 从 upload 实例删除数据
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
          },
          handleSuccess (res, file) {
            // 因为上传过程为实例，这里模拟添加 url
            file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            file.name = '7eb99afb9d5f317c912f08b5212fd69a';
          },
          handleFormatError (file) {
            this.$Notice.warning({
              title: '文件格式不正确',
              desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
            });
          },
          handleMaxSize (file) {
            this.$Notice.warning({
              title: '超出文件大小限制',
              desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
            });
          },
          handleBeforeUpload () {
            const check = this.uploadList.length < 5;
            if (!check) {
              this.$Notice.warning({
                title: '最多只能上传 5 张图片。'
              });
            }
            return check;
          },
          message_bottom(){
            var container = this.$el.querySelector("#m-message");
            container.scrollTop = container.scrollHeight;
          }
        },
        watch:{
          message_list:function () {
            this.$nextTick(() => {
              this.message_bottom()
            });
          }
        },
      mounted(){
        this.message_bottom()
      }
    }
</script>
