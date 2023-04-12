<!-- 贺玉全代码 -->
<template>
    <div class="all">
    <h1 style="margin-bottom: 10px; margin-left: 10px;margin-top: 10px;">门诊挂号</h1>
        <!-- 查询区域 -->
    <div class="CXsf">
    <div class="SFcx">
        身份证号：<el-input style="width: 700px;" v-model="SFvalue" placeholder="输入身份证号查询" />
    </div>
    <el-button style="margin-top: 36px" type="primary" @click="handleCx()">查询</el-button>
                  <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
                  新建
                </el-button>

                <el-drawer v-model="drawer" title="I am the title" :with-header="false">
                  <span>Hi there!</span>
                </el-drawer>
    </div>



    <!-- 患者信息区域 -->
    <div class="common-layout">
    <el-container>

        
        <!-- 当日患者区域 -->
      <el-aside style="background: #c8c9cc; margin-right: 10px; height: 800px;" width="200px">
            <h1 style="margin-bottom: 20px; margin-top: 20px;" ><el-icon><Notification /></el-icon>当日患者</h1>
            <ul v-for="item in list" :key="item.id" >
                <li style="margin-bottom: 10px;" @click="handleLi()">
                    {{ item.name }}&nbsp&nbsp
                    {{ item.gender }}&nbsp&nbsp
                    {{ item.age }}&nbsp&nbsp
                    {{ item.ks }}
                    <el-popconfirm title="确定删除当前患者档案？">
                      <template #reference>
                        <el-button style="width: 30px;">删除</el-button>
                      </template>
                    </el-popconfirm>
                </li>
            </ul>
        </el-aside>


      <!-- 患者挂号区域 -->
      <el-main>

        <!-- 患者信息区域 -->

        <div class="HZxx">

            <h1><el-icon ><UserFilled /></el-icon>患者信息</h1>

            <el-row style="margin-top: 20px;">
              <el-col :span="2"><div class="grid-content ep-bg-purple" style="margin-top: 5px;" />姓名：</el-col>
              <el-col :span="4"><div class="grid-content ep-bg-purple-light" /><el-input v-model="nameValue" ></el-input></el-col>
              <el-col :span="3" ><div class="grid-content ep-bg-purple-light" />
                <el-select style="margin-left: 5px;" v-model="form.region" >
                  <el-option label="男" value="shanghai" />
                  <el-option label="女" value="beijing" />
                </el-select>
                </el-col>
              <el-col :span="2"><div class="grid-content ep-bg-purple" style="margin-top: 5px;" />年龄:</el-col>
              <el-col :span="3"><div class="grid-content ep-bg-purple-light" /><el-input v-model="ageValue" ></el-input></el-col>
              <el-col :span="2"><div class="grid-content ep-bg-purple" style="margin-top: 5px;" />电话:</el-col>
              <el-col :span="8"><div class="grid-content ep-bg-purple-light" /><el-input v-model="telValue"  ></el-input></el-col>
            </el-row>
            
            <el-row style="margin-top: 20px;">
              <el-col :span="3"><div class="grid-content ep-bg-purple" style="margin-top: 5px;" />医保卡号</el-col>
              <el-col :span="6"><div class="grid-content ep-bg-purple-light" /><el-input v-model="YBvalue" ></el-input></el-col>
              <el-col :span="3"><div class="grid-content ep-bg-purple" style="margin-top: 5px;" />家庭住址</el-col>
              <el-col :span="12"><div class="grid-content ep-bg-purple-light" /><el-input v-model="ZzValue" ></el-input></el-col>
            </el-row>

            <el-row style="margin-top: 20px;">
              <el-col :span="3.5"><div class="grid-content ep-bg-purple" style="margin-top: 5px;" />最后就诊时间</el-col>
              <el-col :span="12"><div class="grid-content ep-bg-purple-light" /><el-input v-model="JzValue" ></el-input></el-col>
              <el-col :span="3"><div class="grid-content ep-bg-purple" style=" margin-top: 5px;" />联系人姓名</el-col>
              <el-col :span="5"><div class="grid-content ep-bg-purple-light" /><el-input v-model="LxrValue" ></el-input></el-col>
            </el-row>

            <el-row style="margin-top: 20px;">
              <el-col :span="3"><div class="grid-content ep-bg-purple" style="margin-top: 5px;" />联系人电话</el-col>
              <el-col :span="9"><div class="grid-content ep-bg-purple-light" /><el-input v-model="LxrTelValue" ></el-input></el-col>
              <el-col :span="4.5"><div class="grid-content ep-bg-purple" style="margin-top: 5px;" />联系人与患者关系</el-col>
              <el-col :span="5"><div class="grid-content ep-bg-purple-light" /><el-input v-model="LxrGxValue" ></el-input></el-col>
            </el-row>
      

        </div>



        <!-- 患者挂号信息区域 -->

        <div class="GuaHaoXx">
            <h2>挂号信息</h2>
            <el-row style="margin-top: 10px;">

                <el-col :span="8" ><div class="grid-content ep-bg-purple-light" />
                <el-select style="margin-left: 5px;" v-model="form.ks" >
                  <el-option label="男" value="shanghai" />
                  <el-option label="女" value="beijing" />
                    </el-select>
                    </el-col>

                    <el-col :span="8" ><div class="grid-content ep-bg-purple-light" />
                <el-select style="margin-left: 5px;" v-model="form.YS" >
                  <el-option label="男" value="shanghai" />
                  <el-option label="女" value="beijing" />
                </el-select>
                </el-col>


                <el-col :span="8" ><div class="grid-content ep-bg-purple-light" />
                <el-select style="margin-left: 5px;" v-model="form.bb" >
                  <el-option label="男" value="shanghai" />
                  <el-option label="女" value="beijing" />
                </el-select>
                </el-col>

            </el-row>

        <el-table :data="tableData" stripe border style="margin-top: 20px;" >
          
          <el-table-column class="bg" prop="KSID" label="科室" align="center">
          </el-table-column>
          <el-table-column class="bg" prop="RYXM" label="医生" align="center">
          </el-table-column>
          <el-table-column class="bg" prop="GHF" label="号别(费用)" align="center" >
          </el-table-column>
          <el-table-column class="bg" prop="RYSFZH" label="人员身份证号" align="center" width="180">
          </el-table-column>
          <el-table-column class="bg" prop="RYZC" label="班别" align="center">
          </el-table-column>
          <el-table-column class="bg" prop="sjmbid" label="时间段" align="center" width="150">
          </el-table-column>
          <el-table-column class="bg" prop="hys" label="余号" align="center">
          </el-table-column>
  
  
          </el-table>

        </div>

      </el-main>

      <!-- 收费结算 -->
      <div class="JieSuaN">
        <h1>收费结算</h1>
        </div>


        </el-container>


        </div>


    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const drawer = ref('false')

const SFvalue = ref('') //身份证查询
const nameValue = ref('')//名字
const ageValue = ref('')//年龄
const telValue = ref('')//电话
const YBvalue = ref('')//医保
const ZzValue = ref('')//主治
const JzValue = ref('')//最后就诊时间
const LxrValue = ref('')//联系人姓名
const LxrTelValue = ref('')//联系人电话
const LxrGxValue = ref('')//联系人与患者的关系


// 假数据
const tableData = ref([
    {
        KSID:'内科',
        RYXM:'张三',
        GHF: '18',
        RYSFZH: '211321200211268989',
        RYZC: '上午',
        sjmbid: '08:00-11:30',
        hys: '12'
    }
])

const form = reactive({
    region:'性别',
    ks:'请选择科室',
    YS: '请选择医生',
    bb:'请选择班别'
})

// 查询
const handleCx = () => {

}
const handleXj = () => {
    
}

const handleLi = () => {

}

const remove = () => {

}


const list = ref([
    {
        id:1,
        name:"张三",
        gender:"男",
        age:"50",
        ks:"内科"
    },
    {
        id:2,
        name:"王五",
        gender:"男",
        age:"50",
        ks:"内科"
    },
    {
        id:3,
        name:"李四",
        gender:"男",
        age:"50",
        ks:"内科"
    },
])
</script>

<style lang="scss" scoped>

.all{
    width: 1300px;
    margin-left: 10px;
}
.CXsf{
    display: flex;
    height: 100px;
    background:  #dedfe0;
    margin-bottom: 20px;

}
.CXsf .SFcx{
    width: 800px;
    line-height: 100px;
    margin-left: 20px;
}
.el-main .HZxx{
    width: 730px;
    height: 300px;
    border: 1px solid #ccc;
    background:#dedfe0;
    padding: 10px;
    padding-top: 35px;
}
.GuaHaoXx{
    width: 730px;
    height: 251px;
    border: 1px solid #ccc;
    background: #dedfe0;
    padding: 10px;
    padding-top: 20px;
    margin-top: 20px;
}
.JieSuaN{
    width: 200px;
    height: 500px;
    background:#dedfe0;
    padding: 10px;
    margin: 10px;
}
.bg{
    background: #000;
}

</style>