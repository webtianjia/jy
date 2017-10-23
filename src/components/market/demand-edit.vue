<template>
  <div class="panel " style="min-height: 500px">
    <div class="panel-heading">
      提交需求
    </div>
    <div class="panel-body">
      <i-Form :model="form_validate"  ref="form_validate"  :rules="ruleInline"   :label-width="100" class="mt-40 ml-20" style="width:800px" >
        <Form-Item label="标题" prop="title">
          <i-input v-model="form_validate.title"></i-input>
        </Form-Item>
        <Form-Item label="详细需求" prop="detail_information">
          <i-input v-model="form_validate.detail_information" type="textarea" :autosize="{minRows: 5,maxRows: 10}"></i-input>
        </Form-Item>
        <Form-Item label="上传附件">
          <input type="file">
        </Form-Item>
        <Form-Item label="联系人" prop="contacts">
          <i-input v-model="form_validate.contacts"></i-input>
        </Form-Item>
        <Form-Item label="联系方式" prop="contacts_information">
          <i-input v-model="form_validate.contacts_information"></i-input>
        </Form-Item>
        <Form-Item>
          <button type="button" class="btn btn-main" @click="has_Submit('form_validate')">确认</button>
        </Form-Item>
      </i-Form>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {
                form_validate:{
                    title:"",
                    detail_information:"",
                    contacts:"",
                    contacts_information:""
                },
                ruleInline: {
                  title: [
                  { required: true, message: '请填写标题', trigger: 'blur' }
                ],
                  detail_information: [
                  { required: true, message: '请填写详细需求', trigger: 'blur' },
                ],
                  contacts: [
                  { required: true, message: '请填写联系人', trigger: 'blur' },
                ],
                  contacts_information: [
                  { required: true, message: '请填写联系方式', trigger: 'change' },
                ]
              }
            }
        },
        methods: {
          has_Submit(name){
              this.$refs[name].validate((valid)=>{
                if (valid) {
                  this.$Message.success('提交成功!');
                  this.$router.replace({"name":"提交需求",path:"/control_panel/market/demand_submit"})
                } else {
                  this.$Message.error('表单验证失败!');
                }
              })
          }
        }
    }
</script>
