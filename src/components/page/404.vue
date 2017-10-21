<template>
  <div>
      <div class="main">
        <div class="c-404"></div>
        <div class="text-c mt-80">
          <router-link :to="{name:'首页',path:'/index'}" class="btn btn-main ml-60">返回首页</router-link>
        </div>
      </div>
        <footer-item></footer-item>
  </div>
</template>
<script>
  import footerItem from "../comm/footer.vue"
    export default {
        data(){
            return {}
        },
        methods: {

        },
        components:{footerItem}
    }
</script>
