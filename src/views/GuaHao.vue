<!-- 贺玉全代码 -->

<template>
    <div class="all">
    <h1 style="margin-bottom: 10px; margin-left: 10px;margin-top: 10px;">门诊挂号</h1>
        <!-- 查询区域 -->
    <div class="CXsf">
    <div class="SFcx">
          <el-input   v-model="SFvalue" placeholder="输入身份证号查询" />
    </div>
    <el-button style="margin-top: 36px" type="primary" @click="handleCx(SFvalue)">查询</el-button>

        <!-- 新建 -->
         <el-button style="margin-top: 35px" bg type="primary" text @click="dialogFormVisible = true">
             新建 
       </el-button>

          <el-dialog  v-model="dialogFormVisible" title="新建挂号">


            <el-form :model="formXj" :rules="rules"  ref="formRef">


              <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
                <el-input v-model="formXj.name" autocomplete="off" />
              </el-form-item>

              <el-form-item label="性别" prop="xb" :label-width="formLabelWidth">
                <el-input v-model="formXj.xb" autocomplete="off" />
              </el-form-item>

              <el-form-item label="年龄" prop="age" :label-width="formLabelWidth">
                <el-input v-model="formXj.age" autocomplete="off" />
              </el-form-item>                                                                               

              <el-form-item label="电话" prop="tel" :label-width="formLabelWidth">
                <el-input v-model="formXj.tel" autocomplete="off" />
              </el-form-item>

              <el-form-item label="医保卡号" prop="YB" :label-width="formLabelWidth">
                <el-input v-model="formXj.YB" autocomplete="off" />
              </el-form-item>

              <el-form-item label="家庭住址" prop="Zz" :label-width="formLabelWidth">
                <el-input v-model="formXj.Zz" autocomplete="off" />
              </el-form-item>


              <el-form-item label="最后就诊时间" prop="Jz" :label-width="formLabelWidth">
                <el-input v-model="formXj.Jz" autocomplete="off" />
              </el-form-item>

              <el-form-item label="联系人姓名" prop="Lxr" :label-width="formLabelWidth">
                <el-input v-model="formXj.Lxr" autocomplete="off" />
              </el-form-item>

              <el-form-item label="联系人电话" prop="LxrTel" :label-width="formLabelWidth">
                <el-input v-model="formXj.LxrTel" autocomplete="off" />
              </el-form-item>

              <el-form-item label="联系人与患者关系" prop="LxrGx" :label-width="formLabelWidth">
                <el-input v-model="formXj.LxrGx" autocomplete="off" />
              </el-form-item>


            </el-form>


            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button><!-- 取消就返回页面 -->
                <el-button type="primary" @click="xinJiaN()">新建</el-button><!-- 点击之后发送ajax请求(post)然后把新建的数据打包给post携带的参数 后端就会保存 -->
              </span>
            </template>
          </el-dialog>
    </div>



    <!-- 患者信息区域 -->
    <div class="common-layout">
    <el-container>

        
        <!-- 当日患者区域 -->
      <el-aside style="background: #c8c9cc; margin-right: 10px; height: 800px;" width="200px">
            <h1 style="margin-bottom: 20px; margin-top: 20px;" ><el-icon><Notification /></el-icon>当日患者</h1>
            <ul v-for="item in list" :key="item.id" ><!-- 这里发送ajax get请求 然后把接受到的数据循环进来就行了 -->
                <li style="margin-bottom: 10px;">
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
                <el-select style="margin-left: 5px;" v-model="HZXBValue">
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

        <!-- 费用计算区域 -->
        <el-table :data="tableData" stripe border style="margin-top: 20px;">
          
          <el-table-column class="bg"  label="费用项目" align="center">

          <el-table-column class="bg"  label="挂号费" align="center">
              <el-table-column class="bg"  label="诊查费" align="center">
                    <el-table-column class="bg"  label="工本费" align="center">
                        <div>合计</div>
                      </el-table-column>
              </el-table-column>
          </el-table-column>        

          </el-table-column>


          <el-table-column class="bg"  label="金额(元)" align="center">

            <el-table-column class="bg"  label="5.00" align="center">
              <el-table-column class="bg"  label="20.00" align="center">
                    <el-table-column class="bg"  label="2.00" align="center">
                     <div style="font-size: 20px;color: red;">27.00</div>
                      </el-table-column>
              </el-table-column>
          </el-table-column>        


          </el-table-column>


        </el-table>

        <div style="display: flex; margin-top: 10px;">
          <div style="width: 70px; height: 30px;line-height: 30px; background:#a0cfff;color: white;text-align: center;">费用减免</div> &nbsp;
          <div style="font-size: 14px;margin-top: 5px;">减免金额 : <span>7.00元  <!-- 后端数据替换 --> </span></div>
        </div>
       

        <!-- 付款方式区域 -->


        <el-table :data="tableData" stripe border style="margin-top: 20px;">
          
          <el-table-column class="bg"  label="自费应缴" align="center">

          <el-table-column class="bg"  label="现金" align="center">
              <el-table-column class="bg"  label="微信" align="center">
              <el-table-column class="bg"  label="银联卡" align="center">

                        <div>实缴
                          <div style="border-top: 1px solid #ccc;">
                            找零
                          </div>
                        </div>
              </el-table-column>
             </el-table-column>        
            </el-table-column>
          </el-table-column>


          <el-table-column class="bg"  label="5.00" align="center">

            <el-table-column class="bg"  label="10.00" align="center">
              <el-table-column class="bg"  label="" align="center">
                    <el-table-column class="bg"  label="" align="center">
                     <div style="font-size: 20px;color: red;">
                      10.00
                      <div style="font-size: 20px;color: red; border-top: 1px solid #ccc;">5.00</div>
                      </div>
                      </el-table-column>
              </el-table-column>
          </el-table-column>        


          </el-table-column>


        </el-table>

        <br><br>
        <el-button type="primary" style="margin-left: 100px;" @click="handleGuaHao()">确认挂号</el-button>
        </div>


        </el-container>


        </div>


    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus'

const dialogFormVisible = ref(false)
const formLabelWidth = '300px'

const formRef = ref()


const SFvalue = ref('') //身份证查询
const nameValue = ref('')//名字
const HZXBValue = ref('性别')//性别
const ageValue = ref('')//年龄
const telValue = ref('')//电话
const YBvalue = ref('')//医保
const ZzValue = ref('')//主治
const JzValue = ref('')//最后就诊时间
const LxrValue = ref('')//联系人姓名
const LxrTelValue = ref('')//联系人电话
const LxrGxValue = ref('')//联系人与患者的关系
const telYz = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
const sFyz = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/
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
// 挂号信息数据
const form = reactive({
    region:'性别',
    ks:'请选择科室',
    YS: '请选择医生',
    bb:'请选择班别'
})


//新建挂号数据
const formXj = reactive({
  name : '',
  xb:'',
  age : '',
  tel : '',
  YB : '',
  Zz : '',
  Jz : '',
  Lxr : '',
  LxrTel : '',
  LxrGx : '',
})

// 结算数据
const formJs = reactive({

})
// 查询
const handleCx = (SFvalue) => { 
  
  var jg =  hzk.value.some(item =>{
  return SFvalue == item.sfz
  })

  if(jg == true){
    ElMessage('此人在患者库里')
  }else{
    ElMessage('查无此人或者身份证号输入错误')
  }
  SFvalue = ''

}


//新建
const xinJiaN = () => {
    
}

const handleLi = () => {

}

const remove = () => {

}

const handleGuaHao = () => {

}
// 当日患者假数据
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

//患者库假数据
const hzk = ref([
    {
        id:1,
        sfz:'211321200205061111',
        name:"张三",
        gender:"男",
        age:"50",
        ks:"内科"
    },
    {
        id:2,
        sfz:'211321200205061112',
        name:"王五",
        gender:"男",
        age:"50",
        ks:"内科"
    },
    {
        id:3,
        sfz:'211321200205061113',
        name:"李四",
        gender:"男",
        age:"50",
        ks:"内科"
    },
    {
        id:4,
        sfz:'211321200205061114',
        name:"赵六",
        gender:"男",
        age:"50",
        ks:"内科"
    },
    {
        id:5,
        sfz:'211321200205061115',
        name:"田七",
        gender:"男",
        age:"50",
        ks:"内科"
    },
    {
        id:6,
        sfz:'211321200205061116',
        name:"白八",
        gender:"男",
        age:"50",
        ks:"内科"
    },
])


// 新建校验


const rules = reactive({
  name: [
    { required: true, message: '姓名不能为空', trigger: 'blur' },
    
  ],
  xb: [
    { required: true, message: '性别不能为空', trigger: 'blur' },
    
  ],
  age: [
    { required: true, message: '年龄不能为空', trigger: 'blur' },
    
  ],
  tel: [
    { required: true, message: '电话不能为空', trigger: 'blur' },
    { pattern: telYz, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  YB: [
    { required: true, message: '医保卡号不能为空', trigger: 'blur' },
    
  ],
  Zz: [
    { required: true, message: '住址不能为空', trigger: 'blur' },
    
  ],
  Jz: [
    { required: true, message: '最后就诊时间不能为空', trigger: 'blur' },
    
  ],
  Lxr: [
    { required: true, message: '联系人不能为空', trigger: 'blur' },
    
  ],
  LxrTel: [
    { required: true, message: '联系人电话不能为空', trigger: 'blur' },
    { pattern: telYz, message: '请输入正确的手机号', trigger: 'blur' }

    
  ],
  LxrGx: [
    { required: true, message: '与患者关系不能为空', trigger: 'blur' },
    
  ],
  sfFormSRK: [
    { required: true, message: '身份证号不能为空', trigger: 'blur' },
    { pattern: sFyz, message: '请输入正确的身份证号', trigger: 'blur' }
  ]

})


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
    height: 800px;
    background:#dedfe0;
    padding: 10px;
    margin: 10px;
    margin-top: 0px;
}


</style>