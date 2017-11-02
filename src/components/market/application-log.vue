<template>
  <div class="container">
    <div class="panel application-log mt-20">
      <div style="min-height: 500px">
        <table class="table  ">
          <tbody>
          <tr>
            <td width="100">运行编号</td>
            <td>TREZ004</td>
          </tr>
          <tr>
            <td>运行时间</td>
            <td>2017-10-10 10:10:10</td>
          </tr>
          <tr>
            <td>运行用户ID</td>
            <td>081902801</td>
          </tr>
          <tr>
            <td>返回内容</td>
            <td><code>warning:<.script src="code-highligh/highlight.pack.js"></.script></code></td>
          </tr>
          </tbody>
        </table>
        <table class="table  ">
          <tbody>
          <tr>
            <td width="100">运行编号</td>
            <td>TREZ003</td>
          </tr>
          <tr>
            <td>运行时间</td>
            <td>2017-10-10 10:10:10</td>
          </tr>
          <tr>
            <td>运行用户ID</td>
            <td>081902801</td>
          </tr>
          <tr>
            <td>返回内容</td>
            <td><code>warning:<.script src="code-highligh/highlight.pack.js"></.script></code></td>
          </tr>
          </tbody>
        </table>
        <table class="table ">
          <tbody>
          <tr>
            <td width="100">运行编号</td>
            <td>TREZ002</td>
          </tr>
          <tr>
            <td>运行时间</td>
            <td>2017-10-10 10:10:10</td>
          </tr>
          <tr>
            <td>运行用户ID</td>
            <td>081902801</td>
          </tr>
          <tr>
            <td>返回内容</td>
            <td><code>warning:<.script src="code-highligh/highlight.pack.js"></.script></code></td>
          </tr>
          </tbody>
        </table>
        <table class="table ">
          <tbody>
          <tr>
            <td width="100">运行编号</td>
            <td>TREZ001</td>
          </tr>
          <tr>
            <td>运行时间</td>
            <td>2017-10-10 10:10:10</td>
          </tr>
          <tr>
            <td>运行用户ID</td>
            <td>081902801</td>
          </tr>
          <tr>
            <td>返回内容</td>
            <td><code>warning:<.script src="code-highligh/highlight.pack.js"></.script></code></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="rg  text-r">
        <Page :total="100" show-elevator class="mr-20"></Page>
      </div>
      <div class="text-c mb-20"><router-link class="btn btn-main" :to="{name:'应用详情',path:'/market/detail'}" >返回</router-link></div>
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
