<template>
      <div>
        <div class="panel mt-10">
          <div class="mt-10 ml-10">
            <div style="height: 30px;line-height: 30px">
              <span class="ml-20">/某某某某人的云空间</span>
              <div class="text-r create_new_project file_btn" style="width: 440px;">
                <a @click="is_editCode=!is_editCode" class="btn btn-main mr-20"><img class="mr-5" src="../../assets/images/icons/i-82.png">{{is_editCode==false?"编辑":"保存"}}</a>
                <a class="btn btn-main mr-20"><img class="mr-5" src="../../assets/images/icons/i-75.png">下载</a>
                <a @click="share_model=true" class="btn btn-main mr-20"><img class="mr-5" src="../../assets/images/icons/i-75.png">分享</a>
                <a class="btn btn-main mr-5"><img class="mr-5" src="../../assets/images/icons/i-76.png">删除</a>
              </div>
              <div class="f-12 col-666 ml-20 mt-5" style="line-height: 0">2017-12-05  13:23:34  728kb</div>
            </div>
          </div>
          <div class="mt-20"></div>
        </div>
        <div  class="panel mt-10 positon-r" style="min-height: 750px;padding: 10px;background-color: #f8f8f8">
          <div v-show="!is_editCode" v-highlight >
            <pre>
              <code v-html="code"></code>
            </pre>
          </div>
          <div v-show="is_editCode" style="background-color: #fff">
            <i-Input v-model="code" type="textarea" :autosize="{minRows: 5,maxRows: 500}" placeholder="请输入..."></i-Input>
          </div>
        </div>
        <!--分享-->
        <Modal
          class="f-14"
          :width="400"
          v-model="share_model"
          title="分享"
          class-name="vertical-center-modal">
          <div class="f-14">
            <label class="text-c center-block">分享链接</label>
            <div class="mt-10" style=" background-color: #f8f8f8"><pre><code class="css"> http://www.genechem.com.cn/  http://www.genechem.com.cn/  http://www.genechem.com.cn/</code></pre></div>
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
    export default {
        data(){
            return {
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
              share_model:false,
                is_editCode:false,
                code:`
                .hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #333;
  color: white;
}

.hljs-name,
.hljs-strong {
  font-weight: bold;
}

.hljs-code,
.hljs-emphasis {
  font-style: italic;
}

.hljs-tag {
  color: #62c8f3;
}

.hljs-variable,
.hljs-template-variable,
.hljs-selector-id,
.hljs-selector-class {
  color: #ade5fc;
}

.hljs-string,
.hljs-bullet {
  color: #a2fca2;
}

.hljs-type,
.hljs-title,
.hljs-section,
.hljs-attribute,
.hljs-quote,
.hljs-built_in,
.hljs-builtin-name {
  color: #ffa;
}

.hljs-number,
.hljs-symbol,
.hljs-bullet {
  color: #d36363;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal {
  color: #fcc28c;
}

.hljs-comment,
.hljs-deletion,
.hljs-code {
  color: #888;
}

.hljs-regexp,
.hljs-link {
  color: #c6b4f0;
}

.hljs-meta {
  color: #fc9b9b;
}

.hljs-deletion {
  background-color: #fc9b9b;
  color: #333;
}

.hljs-addition {
  background-color: #a2fca2;
  color: #333;
}

.hljs a {
  color: inherit;


                `

            }
        },
      computed: {

      },
        methods: {}
    }
</script>
