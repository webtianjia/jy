
<template>
    <div>
      <div class="main about-us">
        <div class="banner">
          <img class="img-responsive"  src="../../assets/images/list/banner.png"/>
        </div>
        <div class="mt-20">
          <div class=" container">
            <nav id="subNav" class="about-nav">
              <a href="javascript:void (0)"  @click="goAnchor()" >关于平台</a>
              <a href="javascript:void (0)"  @click="goAnchor('#platform-link')" >平台链接</a>
              <a href="javascript:void (0)"  @click="goAnchor('#cooperative-partner')" >合作伙伴</a>
            </nav>
            <div class="content">
              <div id="about-us" class="panel txt-content">
                <div class="panel-body">
                  <h1 class="f-30 mt-30">关于Gcloud</h1>
                  <p class="text mt-30 f-16">
                    Gcoloud成立于2002年，是国内最大的疾病关键基因研究服务综合供应商。我们建立了国内最大的慢病毒文库，包含几乎覆盖人类所
                    有基因的，近15万个独立克隆；发现了数百个在特定肿瘤中发挥关键作用的候选靶标基因，并与遍及全国各地的300多家三级甲等医院
                    中，包含11种肿瘤研究领域的2000名临床科学家保持长期紧密的合作关系。自成立以来，我们承担并完成科技部、上海市科委各类肿
                    瘤靶标筛选相关科研课题30多项；申请用于肿瘤诊断或治疗的专利100余项，其中80%为基因靶标专利，20%为技术专利。目前已经授
                    权专利27项，是上海市的专利工作试点单位。
                  </p>
                  <div class="mt-50"></div>
                </div>
              </div>
              <div id="platform-link" class="panel mt-30 txt-content">
                <div class="panel-body">
                  <h1 class="f-30 mt-30">平台链接</h1>
                  <div class="media">
                    <div class="media-left">
                      <a href="#">
                        <img src="../../assets/images/list/link-1.png">
                      </a>
                    </div>
                    <div class="media-body">
                      <div class="f-18"><a class=" " href="#">HOPLCE 平台 <span class="col-main ml-20 ">www.9999.com</span></a></div>
                      <p class="link-text mt-10">目的 探讨非小细胞肺癌(NSCLC)  非手术治疗过程中灵敏度和特异性较高的肿瘤标志物以及肿瘤标志物以及以及
                        物组合,进一步研究TSGF及多肿瘤标志物 蛋白芯片 联合 检在NSCLC放化疗中的临床应用价值。
                      </p>
                    </div>
                  </div>
                  <div class="media">
                    <div class="media-left">
                      <a href="#">
                        <img src="../../assets/images/list/link-2.png">
                      </a>
                    </div>
                    <div class="media-body">
                      <div class="f-18"><a class=" " href="#">HOPLCE 平台 <span class="col-main ml-20 ">www.9999.com</span></a></div>
                      <p class="link-text mt-10">目的 探讨非小细胞肺癌(NSCLC)  非手术治疗过程中灵敏度和特异性较高的肿瘤标志物以及肿瘤标志物以及以及
                        物组合,进一步研究TSGF及多肿瘤标志物 蛋白芯片 联合 检在NSCLC放化疗中的临床应用价值。 方肿瘤标志标志
                        法  收集符合入组条件的NSC收集符合入组条件的NSC收集符合入组条件的NSC收集符合入组条件的
                      </p>

                    </div>
                  </div>
                  <div class="media">
                    <div class="media-left">
                      <a href="#"><img src="../../assets/images/list/link-3.png"></a>
                    </div>
                    <div class="media-body">
                      <div class="f-18"><a class=" " href="#">HOPLCE 平台 <span class="col-main ml-20 ">www.9999.com</span></a></div>
                      <p class="link-text mt-10">中心包括有医生房、治疗房及休息室，供顾客使用。为了使到顾客有耳目一新的感觉，APU等别选用了木纹及
                        白色的配搭。加上于入口处的一个灰色L型框架以隐藏电视框架，令到整体格调干净、整齐。于休息区，选用
                        具私隐度的磨砂玻璃 联合 检在NSCLC放化疗中的临床应用价值。
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              <div id="cooperative-partner" class="panel mt-30 txt-content">
                <div class="panel-body">
                  <h1 class="f-30 mt-30">合作伙伴</h1>
                  <div class="list mt-20">
                    <a href="#"><img src="../../assets/images/list/link-4.png"width="235" height="130"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                  </div>
                  <div class="mt-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer-item></footer-item>
    </div>
</template>

<script>
  import  headerItem from  "../comm/header.vue"
  import  footerItem from  "../comm/footer-1.vue"
  export default{
    data(){
      return{

      }
    },
    methods:{
      goAnchor(selector) {
        var top;
        if(!selector){
          top=0
        }else {
          top=$(selector).offset().top;
        }

        $(document).scrollTop(top)
      }
    },
    components:{footerItem}
  }
</script>
