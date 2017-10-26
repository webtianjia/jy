<template>
  <div class="panel">
    <div class="panel-heading">
      <i class="icon i-55"></i>平台公告
    </div>
    <div class="panel-body">
      <table class="table table-hover">
        <tbody>
           <tr v-for="i in 5">
          <td>
            <p><router-link to="/use_help/public_detail" class="link">春节假期服务安排通知</router-link></p>
          </td>
          <td>
            <p style="max-width: 700px;"><router-link to="/use_help/public_detail"  style="width: 700px;" class="link col-666">尊敬的客户 :您好！在2017年春节即将来临，尊敬的客户 :您好！在2017年春节即将来临，尊敬的客户 :您好！在2017年春节即将来临，尊敬的客户 :您好！在2017年春节即将来临，</router-link></p>
          </td>
          <td>
            <p>2017-8-29</p>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="mt-50 text-r">
        <Page :total="100" show-elevator class="mr-20"></Page>
      </div>
      <div class="mt-30"></div>
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
