<template>
  <div>
    <div class="panel">
      <div class="mt-20 ml-10">
        <Row>
          <i-Col span="12">
            <ul class="tabs">
              <li class="mr-80" @click="type=0" :class="{'active':type===0}">
                <a class="ml-5" href="javascript:void(0)">
                  <span>新创建</span>
                  <span class="badge">4</span>
                </a>
                <i></i>
              </li>
              <li class="mr-80" @click="type=1"  :class="{'active':type===1}">
                <a  class="ml-5" href="javascript:void(0)">
                  <span>运行中</span>
                  <span class="badge">56</span>
                </a>
                <i></i>
              </li>
              <li class="mr-80" @click="type=2"  :class="{'active':type===2}">
                <a  class="ml-5" href="javascript:void(0)">
                  <span>已完成</span>
                  <span class="badge">56</span>
                </a>
                <i></i>
              </li>
              <li                       @click="type=3"  :class="{'active':type===3}">
                <a  class="ml-5" href="javascript:void(0)">
                  <span>已删除</span>
                  <span class="badge">4</span>
                </a>
                <i></i>
              </li>
            </ul>
          </i-Col>
          <i-Col span="7">
            <i-Input  placeholder="项目编号/项目名称/应用名称" class="search-input ml-50" style="width: 270px;" >
              <i-Button slot="append" class="search-btn">搜索</i-Button>
            </i-Input>
          </i-Col>
          <i-Col span="5">
            <div class="text-r create_new_project">
              <button type="button" @click="modal=true" class="btn btn-main"><Icon type="plus" class="mr-5 mt-5" size="24"></Icon>创建新项目</button>
            </div>
          </i-Col>
        </Row>
      </div>
      <div style="margin-top: 14px"></div>
    </div>
    <!--新创建-->
    <div v-if="type===0"  class="panel mt-10">
      <table class="table table-hover">
        <thead >
        <tr class="bg_f8f8f8">
          <td><img class="mr-5" src="../../assets/images/icons/i-49.png">项目编号</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-48.png">项目名称</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-50.png">应用程序</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-51.png">创建时间</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-40.png">操作</td>
        </tr>
        </thead>
        <tbody class="col-666">
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列...序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation mr-20" @click="edit">
              <Icon type="ios-compose-outline" size="22"></Icon>
              <span class="info-text">编辑</span>
            </a>
            <a class="operation" @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列...序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation mr-20" @click="edit">
              <Icon type="ios-compose-outline" size="22"></Icon>
              <span class="info-text">编辑</span>
            </a>
            <a class="operation" @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列...序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation mr-20" @click="edit">
              <Icon type="ios-compose-outline" size="22"></Icon>
              <span class="info-text">编辑</span>
            </a>
            <a class="operation" @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列...序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation mr-20" @click="edit">
              <Icon type="ios-compose-outline" size="22"></Icon>
              <span class="info-text">编辑</span>
            </a>
            <a class="operation" @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列...序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation mr-20" @click="edit">
              <Icon type="ios-compose-outline" size="22"></Icon>
              <span class="info-text">编辑</span>
            </a>
            <a class="operation" @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列...序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation mr-20" @click="edit">
              <Icon type="ios-compose-outline" size="22"></Icon>
              <span class="info-text">编辑</span>
            </a>
            <a class="operation" @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列...序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation mr-20" @click="edit">
              <Icon type="ios-compose-outline" size="22"></Icon>
              <span class="info-text">编辑</span>
            </a>
            <a class="operation" @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>序列比对 V1.3序列比1.3序列序列...序列比对 V1.3序列比1.3序列序列...</p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation mr-20" @click="edit">
              <Icon type="ios-compose-outline" size="22"></Icon>
              <span class="info-text">编辑</span>
            </a>
            <a class="operation" @click="confirm">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="mt-50 text-r">
        <Page :total="100" show-elevator class="mr-20"></Page>
      </div>
      <div class="mt-30"></div>
    </div>
    <!--新创建END-->

    <!--运行中-->
    <div v-else-if="type===1" class="panel mt-10">
      <table class="table table-hover">
        <thead >
        <tr class="bg_f8f8f8">
          <td><img class="mr-5" src="../../assets/images/icons/i-49.png">项目编号</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-48.png">项目名称</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-50.png">应用程序</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-53.png">输入文件</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-52.png">提交时间</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-40.png">操作</td>
        </tr>
        </thead>
        <tbody class="col-666">
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>小鼠EGFR基因序列比对小鼠EGFR基因序列比对</p>
          </td>
          <td>
            <p><a href="#" class="link">序列比对 V1.3序列比1.3序列序列...序列比对 V1.3序列比1.3序列序列...</a></p>
          </td>
          <td>
            <p><a href="#" class="link">2个文件2个文件2文件,,,2个文件2个文件2文件,,,2个文件2个文件2文件,,,2个文件2个文件2文件,,,</a></p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation ml-20" @click="look">
              <Icon type="ios-search" size="22"></Icon>
              <span class="info-text">查看</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>小鼠EGFR基因序列比对小鼠EGFR基因序列比对</p>
          </td>
          <td>
            <p><a href="#" class="link">序列比对 V1.3序列比1.3序列序列...序列比对 V1.3序列比1.3序列序列...</a></p>
          </td>
          <td>
            <p><a href="#" class="link">2个文件2个文件2文件,,,2个文件2个文件2文件,,,2个文件2个文件2文件,,,2个文件2个文件2文件,,,</a></p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation ml-20" @click="look">
              <Icon type="ios-search" size="22"></Icon>
              <span class="info-text">查看</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>小鼠EGFR基因序列比对小鼠EGFR基因序列比对</p>
          </td>
          <td>
            <p><a href="#" class="link">序列比对 V1.3序列比1.3序列序列...序列比对 V1.3序列比1.3序列序列...</a></p>
          </td>
          <td>
            <p><a href="#" class="link">2个文件2个文件2文件,,,2个文件2个文件2文件,,,2个文件2个文件2文件,,,2个文件2个文件2文件,,,</a></p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation ml-20" @click="look">
              <Icon type="ios-search" size="22"></Icon>
              <span class="info-text">查看</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>小鼠EGFR基因序列比对小鼠EGFR基因序列比对</p>
          </td>
          <td>
            <p><a href="#" class="link">序列比对 V1.3序列比1.3序列序列...序列比对 V1.3序列比1.3序列序列...</a></p>
          </td>
          <td>
            <p><a href="#" class="link">2个文件2个文件2文件,,,2个文件2个文件2文件,,,2个文件2个文件2文件,,,2个文件2个文件2文件,,,</a></p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation ml-20" @click="look">
              <Icon type="ios-search" size="22"></Icon>
              <span class="info-text">查看</span>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="mt-50 text-r">
        <Page :total="100" show-elevator class="mr-20"></Page>
      </div>
      <div class="mt-30"></div>
    </div>
    <!--运行中END-->

    <!--已完成-->
    <div v-else-if="type===2" class="panel mt-10">
      <table class="table table-hover">
        <thead >
        <tr class="bg_f8f8f8">
          <td><img class="mr-5" src="../../assets/images/icons/i-49.png">项目编号</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-48.png">项目名称</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-53.png">输入文件</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-54.png">输出文件</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-52.png">完成时间</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-40.png">操作</td>
        </tr>
        </thead>
        <tbody class="col-666">
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>小鼠EGFR基因序列比对小鼠EGFR基因序列比对</p>
          </td>
          <td>
            <p><a href="#" class="link">2个文件2个2个文件2个文件2文 ...2个文件2个2个文件2个文件2文 ...</a></p>
          </td>
          <td>
            <p><a href="#" class="link">seq1.faseq1.faseq1.f,,,seq1.faseq1.faseq1.f,,,</a></p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation mr-10">
              <Icon type="ios-download-outline" size="22"></Icon>
              <span class="info-text">下载</span>
            </a>
            <a class="operation mr-10" @click="look">
              <Icon type="ios-search" size="22"></Icon>
              <span class="info-text">查看</span>
            </a>
            <a class="operation" @click="del">
              <Icon type="ios-close-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>小鼠EGFR基因序列比对小鼠EGFR基因序列比对</p>
          </td>
          <td>
            <p><a href="#" class="link">2个文件2个2个文件2个文件2文 ...2个文件2个2个文件2个文件2文 ...</a></p>
          </td>
          <td>
            <p><a href="#" class="link">seq1.faseq1.faseq1.f,,,seq1.faseq1.faseq1.f,,,</a></p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation mr-10">
              <Icon type="ios-download-outline" size="22"></Icon>
              <span class="info-text">下载</span>
            </a>
            <a class="operation mr-10" @click="look">
              <Icon type="ios-search" size="22"></Icon>
              <span class="info-text">查看</span>
            </a>
            <a class="operation" @click="del">
              <Icon type="ios-close-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>小鼠EGFR基因序列比对小鼠EGFR基因序列比对</p>
          </td>
          <td>
            <p><a href="#" class="link">2个文件2个2个文件2个文件2文 ...2个文件2个2个文件2个文件2文 ...</a></p>
          </td>
          <td>
            <p><a href="#" class="link">seq1.faseq1.faseq1.f,,,seq1.faseq1.faseq1.f,,,</a></p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation mr-10">
              <Icon type="ios-download-outline" size="22"></Icon>
              <span class="info-text">下载</span>
            </a>
            <a class="operation mr-10" @click="look">
              <Icon type="ios-search" size="22"></Icon>
              <span class="info-text">查看</span>
            </a>
            <a class="operation" @click="del">
              <Icon type="ios-close-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>小鼠EGFR基因序列比对小鼠EGFR基因序列比对</p>
          </td>
          <td>
            <p><a href="#" class="link">2个文件2个2个文件2个文件2文 ...2个文件2个2个文件2个文件2文 ...</a></p>
          </td>
          <td>
            <p><a href="#" class="link">seq1.faseq1.faseq1.f,,,seq1.faseq1.faseq1.f,,,</a></p>
          </td>
          <td>
            <p>2017-08-09 15:23:45</p>
          </td>
          <td>
            <a class="operation mr-10">
              <Icon type="ios-download-outline" size="22"></Icon>
              <span class="info-text">下载</span>
            </a>
            <a class="operation mr-10" @click="look">
              <Icon type="ios-search" size="22"></Icon>
              <span class="info-text">查看</span>
            </a>
            <a class="operation" @click="del">
              <Icon type="ios-close-outline" size="22"></Icon>
              <span class="info-text">删除</span>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="mt-50 text-r">
        <Page :total="100" show-elevator class="mr-20"></Page>
      </div>
      <div class="mt-30"></div>
    </div>
    <!--已完成END-->

    <!--已取消-->
    <div v-else-if="type===3" class="panel mt-10">
      <table class="table table-hover">
        <thead >
        <tr class="bg_f8f8f8">
          <td> <Checkbox  indeterminat="true">全选</Checkbox></td>
          <td><img class="mr-5" src="../../assets/images/icons/i-49.png">项目编号</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-48.png">项目名称</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-50.png">应用程序</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-53.png">输入文件</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-54.png">输出文件</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-40.png">操作</td>
        </tr>
        </thead>
        <tbody class="col-666">
        <tr>
          <td>
            <Checkbox  indeterminat="true"></Checkbox>
          </td>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>小鼠EGFR基因序列比对小鼠EGFR基因序列比对</p>
          </td>
          <td>
            <p><a href="#" class="link">2个文件2个2个文件2个文件2文 ...2个文件2个2个文件2个文件2文 ...</a></p>
          </td>
          <td>
            <p>2个文件2个文件2文,,,2个文件2个文件2文,,,2个文件2个文件2文,,,2个文件2个文件2文,,,</p>
          </td>
          <td>
            <p><a href="#" class="link">seq1.faseq1.faseq1.f,,,seq1.faseq1.faseq1.f,,,</a></p>
          </td>
          <td>
            <a class="operation mr-10">
              <Icon type="ios-undo-outline" size="22"></Icon>
              <span class="info-text">恢复</span>
            </a>
            <a class="operation" @click="clear">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">清除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <Checkbox  indeterminat="true"></Checkbox>
          </td>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>小鼠EGFR基因序列比对小鼠EGFR基因序列比对</p>
          </td>
          <td>
            <p><a href="#" class="link">2个文件2个2个文件2个文件2文 ...2个文件2个2个文件2个文件2文 ...</a></p>
          </td>
          <td>
            <p>2个文件2个文件2文,,,2个文件2个文件2文,,,2个文件2个文件2文,,,2个文件2个文件2文,,,</p>
          </td>
          <td>
            <p><a href="#" class="link">seq1.faseq1.faseq1.f,,,seq1.faseq1.faseq1.f,,,</a></p>
          </td>
          <td>
            <a class="operation mr-10">
              <Icon type="ios-undo-outline" size="22"></Icon>
              <span class="info-text">恢复</span>
            </a>
            <a class="operation" @click="clear">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">清除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <Checkbox  indeterminat="true"></Checkbox>
          </td>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>小鼠EGFR基因序列比对小鼠EGFR基因序列比对</p>
          </td>
          <td>
            <p><a href="#" class="link">2个文件2个2个文件2个文件2文 ...2个文件2个2个文件2个文件2文 ...</a></p>
          </td>
          <td>
            <p>2个文件2个文件2文,,,2个文件2个文件2文,,,2个文件2个文件2文,,,2个文件2个文件2文,,,</p>
          </td>
          <td>
            <p><a href="#" class="link">seq1.faseq1.faseq1.f,,,seq1.faseq1.faseq1.f,,,</a></p>
          </td>
          <td>
            <a class="operation mr-10">
              <Icon type="ios-undo-outline" size="22"></Icon>
              <span class="info-text">恢复</span>
            </a>
            <a class="operation" @click="clear">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">清除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <Checkbox  indeterminat="true"></Checkbox>
          </td>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>小鼠EGFR基因序列比对小鼠EGFR基因序列比对</p>
          </td>
          <td>
            <p><a href="#" class="link">2个文件2个2个文件2个文件2文 ...2个文件2个2个文件2个文件2文 ...</a></p>
          </td>
          <td>
            <p>2个文件2个文件2文,,,2个文件2个文件2文,,,2个文件2个文件2文,,,2个文件2个文件2文,,,</p>
          </td>
          <td>
            <p><a href="#" class="link">seq1.faseq1.faseq1.f,,,seq1.faseq1.faseq1.f,,,</a></p>
          </td>
          <td>
            <a class="operation mr-10">
              <Icon type="ios-undo-outline" size="22"></Icon>
              <span class="info-text">恢复</span>
            </a>
            <a class="operation" @click="clear">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">清除</span>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <Checkbox  indeterminat="true"></Checkbox>
          </td>
          <td>
            <p>SEAL-0000001项编号...</p>
          </td>
          <td>
            <p>小鼠EGFR基因序列比对小鼠EGFR基因序列比对</p>
          </td>
          <td>
            <p><a href="#" class="link">2个文件2个2个文件2个文件2文 ...2个文件2个2个文件2个文件2文 ...</a></p>
          </td>
          <td>
            <p>2个文件2个文件2文,,,2个文件2个文件2文,,,2个文件2个文件2文,,,2个文件2个文件2文,,,</p>
          </td>
          <td>
            <p><a href="#" class="link">seq1.faseq1.faseq1.f,,,seq1.faseq1.faseq1.f,,,</a></p>
          </td>
          <td>
            <a class="operation mr-10">
              <Icon type="ios-undo-outline" size="22"></Icon>
              <span class="info-text">恢复</span>
            </a>
            <a class="operation" @click="clear">
              <Icon type="ios-trash-outline" size="22"></Icon>
              <span class="info-text">清除</span>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="mt-50 text-r">
        <Page :total="100" show-elevator class="mr-20"></Page>
      </div>
      <div class="mt-30"></div>
    </div>
    <!--已取消END-->
    <Modal
      :width="400"
      ok-text="创建"
      v-model="modal"
      title="创建项目"
      @on-ok="ok"
      class-name="vertical-center-modal">
      <i-Form  :label-width="80">
        <Form-Item label="项目名称">
          <i-Input style="width: 200px"  placeholder="项目名称"></i-Input>
        </Form-Item>
        <Form-Item label="应用程序">
          <i-Select style="width: 200px">
            <Option-Group label="我的应用">
              <i-Option value="1">应用一<span class="rg">免费</span></i-Option>
              <i-Option value="2">应用二<span class="rg">J$1.00</span></i-Option>
            </Option-Group>
            <Option-Group label="应用市场">
              <i-Option value="1">应用一 <span class="rg">免费</span></i-Option>
              <i-Option value="2">应用二 <span class="rg">J$1.00</span></i-Option>
              <i-Option value="3">应用二 <span class="rg">J$1.00</span></i-Option>
            </Option-Group>
          </i-Select>
        </Form-Item>
        <Form-Item label="项目编号">
          <span>“应用代码”-201475</span>
        </Form-Item>
      </i-Form>
    </Modal>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        type:0,
        modal:false
      }
    },
    methods:{
      confirm () {
        this.$Modal.confirm({
          title: '是否删除该消息?',
          content: '<p>删除以后将不可恢复!</p>',
          onOk: () => {
            this.$Message.info('删除成功');
          },
          onCancel: () => {
            this.$Message.info('也是删除');
          }
        });
      },
      read(){
        this.$Message.info('操作成功!');
      },
      look(){
        location.href="../04.应用市场/运行.html"
      },
      edit(){
        location.href="../04.应用市场/运行.html"
      },
      clear(){
        this.$Modal.confirm({
          title: '彻底清除项目',
          content: '<p>您的文件及配置参数将一并删除，不可恢复！</p><p class="col-red">是否彻底清除该项目？</p>',
          onOk: () => {
            this.$Message.info('清除成功！');
          },
          onCancel: () => {
            this.$Message.info('清除失败');
          }
        });
      },
      del(){
        this.$Modal.confirm({
          title: '删除项目',
          content: '<p>是否删除该项目？</p>',
          onOk: () => {
            this.$Message.info('删除成功');
          },
          onCancel: () => {
            this.$Message.info('也是删除');
          }
        });
      },
      ok(){
        location.href="../04.应用市场/运行.html"
      }
    }
  }
</script>
