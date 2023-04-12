<template>
   <!--  <h2>面包屑-患者管理/患者信息</h2> -->
   <div>111</div>
    <div class="common-layout">
        <el-container>
            <el-aside width="400px">
                <h2 style="padding: 10px;padding-bottom: 0;">患者档案</h2>
                <el-form 
                :model="userform" 
                label-width="100px"
                ref="formRef"
                class="el-form-left"
                >
                <el-form-item label="身份证号" prop="hzsfzh">
                    <el-input v-model="userform.hzsfzh" disabled/>
                </el-form-item>    
                <el-form-item label="患者姓名" prop="HZXM">
                    <el-input v-model="userform.HZXM" disabled/>
                    <el-button style="margin-left: 5px;" @click="handleHZXM"><el-icon><Avatar /></el-icon></el-button>
                </el-form-item>
                 <el-form-item label="患者年龄" prop="HZNL">
                    <el-input v-model="userform.HZNL" />
                </el-form-item>     
                <el-form-item label="性别" prop="HZXB">
                    <el-radio-group v-model="userform.HZXB" class="ml-4">
                        <el-radio label="男" size="large">男</el-radio>
                        <el-radio label="女" size="large">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="电话号码" prop="BRDH">
                    <el-input v-model="userform.BRDH" disabled/>
                </el-form-item>
                <el-form-item label="地址信息" prop="JTZZ">
                    <el-input 
                    v-model="userform.JTZZ" 
                    type="textarea" 
                    placeholder="请输入地址信息"  
                    maxlength="30"
                    show-word-limit
                    
                    />
                </el-form-item>
                <el-form-item 
                label="过敏史" 
                prop="GMS"
                maxlength="30"
                show-word-limit
                
                >
                <el-input v-model="userform.GMS" type="textarea" placeholder="请输入过敏史" />
                </el-form-item>      
                </el-form>
                <el-dialog
                    v-model="dialogVisible"
                    title="选择挂号患者"
                    width="600px"
                    center
                >
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="HZXM" label="患者姓名"  />
                    <el-table-column prop="LSBH" label="流水编号"  />
                    <el-table-column prop="GHLX" label="挂号类型" />
                    <el-table-column label="操作">
                        <template #default>
                            <el-button size="small" type="success" plain @click="handleJiezhen(formRef)">
                                <el-icon><Check /></el-icon>
                                <span>接诊</span>
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                </el-dialog>
            </el-aside>
            <el-container>
                <el-header>
                    <div>
                        <el-text class="mx-1" type="success" >病例id：</el-text>
                        <el-text v-model="form1.blid">{{form1.blid}}</el-text><!-- 到时候再传数据 -->
                    </div>
                    <div>
                        <el-button type="success" plain @click="hadleSave"><el-icon><Check /></el-icon><span>保存病例</span></el-button>
                        <el-button type="primary" plain @click="handleFinish"><el-icon><Finished /></el-icon><span>就诊完成</span></el-button>
                    </div>
                </el-header>
                <el-main>
                    <el-tabs v-model="activeName" class="demo-tabs">
                        <el-tab-pane label="病例" name="first">
                            <el-form 
                            :model="userform" 
                            label-width="70px"
                            class="el-form-right">
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="发病日期">
                                        <el-date-picker
                                            v-model="userform.jzrq"
                                            type="date"
                                            placeholder="选择一个好日子"
                                        />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="接诊类型">
                                <el-input  v-model="form1.JZLX" />
                                </el-form-item>
                                </el-col>
                            </el-row>
                            <el-form-item label="主诉">
                                <el-input v-model="form1.zs" type="textarea" />
                            </el-form-item>
                            <el-form-item label="诊断信息">
                                <el-input v-model="form1.zs" type="textarea" />
                            </el-form-item>
                            <el-form-item label="医生建议">
                                <el-input v-model="form1.zs" type="textarea" />
                            </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="处方" name="second">
                            <el-button type="success" @click="handleMedicine">
                                <el-icon><Plus /></el-icon>
                                <span>添加药用处方</span>
                            </el-button>
                            <el-button type="success" @click="handleCheck">
                                <el-icon><Plus /></el-icon>
                                <span>添加检查处方</span>
                            </el-button>
                        </el-tab-pane>
                    </el-tabs>
                    <!-- 添加药方弹窗 -->
                    <el-dialog v-model="dialogVisible1" title="添加【药用】处方" center class="yaofang">
                        <el-button type="success" class="add" @click="sureAddM">确定添加</el-button>
                        <el-table :data="medicineData">
                        <el-table-column prop="id" label="序号" />
                        <el-table-column prop="ypmc" label="药品名称" />
                        <el-table-column prop="num" label="数量" />
                        <el-table-column prop="dj" label="单价(元)" />
                        <el-table-column prop="jine" label="金额(元)" />
                    </el-table>
                    <el-button type="primary" class="medicine-button" @click="handleYaopin"><el-icon><Plus /></el-icon><span>添加药品项</span></el-button>
                    </el-dialog>
                    <el-drawer
                    v-model="dialogVisible2"
                    >
                    <h2 style="text-align: center;margin-bottom: 20px;">药品列表</h2>
                    <el-form :model="form1" label-width="60px" class="mform">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="关键字">
                                    <el-input v-model="form1.GJZ" placeholder="请输入关键字"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-button type="primary" style="margin-left: 5px;"><el-icon><search /></el-icon>搜索</el-button>
                                <el-button type="primary"><el-icon><search /></el-icon>重置</el-button>
                            </el-col>
                        </el-row>
                        <el-table
                            border 
                            ref="multipleTableRef"
                            :data="medicineList"
                            style="width: 100%" 
                            @selection-change="handleSelectionChange"
                            
                        >
                            <el-table-column type="selection" width="55" />
                            <el-table-column prop="YPID" label="药品ID" width="120" >
                            
                            </el-table-column>
                            <el-table-column prop="YPMC" label="药品名称" width="120" />
                            <el-table-column prop="KCL" label="库存量" show-overflow-tooltip />
                        </el-table>
                        <el-button type="primary" plain class="mlistbtn" @click="handleAddM">
                            <el-icon><Plus /></el-icon>
                            <span>添加并关闭</span>
                        </el-button>
                    </el-form>
                    </el-drawer>
                    <!-- 添加检查处方弹窗 -->
                    <el-dialog v-model="dialogVisible3" title="添加【检查】处方" center class="yaofang">
                        <el-button type="success" class="add" @click="sureAddC">确定添加</el-button>
                        <el-table :data="checkData">
                            <el-table-column prop="id1" label="序号" />
                            <el-table-column prop="xmmc1" label="项目名称" />
                            <el-table-column prop="dw1" label="单位" />
                            <el-table-column prop="dj1" label="单价(元)" />
                            <el-table-column prop="jine1" label="金额(元)" />
                            <el-table-column label="操作" />
                        </el-table>
                    <el-button type="primary" class="medicine-button" @click="handleChecklist"><el-icon><Plus /></el-icon><span>添加检查项</span></el-button>
                    </el-dialog>
                    <el-drawer
                    v-model="dialogVisible4"
                    >
                    <h2 style="text-align: center;margin-bottom: 20px;">检查项目列表</h2>
                    <el-form :model="form1" label-width="60px" class="mform">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="关键字">
                                    <el-input v-model="form1.GJZ" placeholder="请输入关键字"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-button type="primary" style="margin-left: 5px;"><el-icon><search /></el-icon>搜索</el-button>
                                <el-button type="primary"><el-icon><search /></el-icon>重置</el-button>
                            </el-col>
                        </el-row>
                        <el-table
                            border 
                            ref="multipleTableRef"
                            :data="checkList"
                            style="width: 100%" 
                            @selection-change="handleSelectionChange"
                            
                        >
                            <el-table-column type="selection" width="55" />
                            <el-table-column prop="xmfyid" label="项目费用ID" width="120" >
                            
                            </el-table-column>
                            <el-table-column prop="xmmc" label="项目名称" width="120" />
                            <el-table-column prop="gjz" label="关键字" show-overflow-tooltip />
                            <el-table-column prop="dj" label="单价" show-overflow-tooltip />
                        </el-table>
                        <el-button type="primary" plain class="mlistbtn" @click="handleAddC"><el-icon><Plus /></el-icon><span>添加并关闭</span></el-button>
                    </el-form>
                    </el-drawer>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import axios from 'axios'
import {ref,reactive,onMounted} from 'vue'
import { ElMessage } from 'element-plus';
import { ElNotification } from 'element-plus'
const formRef =ref()
const userform =reactive({
    hzsfzh:'2106231xxxx1',
    HZXM:'张三',
    HZXB:'女',
    HZNL:'20',
    BRDH:'15112341234',
    JTZZ:'辽宁省大连市',
    jzrq:new Date(),
    GMS:'青霉素过敏',
})
const form1 =reactive({
    JZLX:'初诊',
    zs:'1',
    blid:'',
    GJZ:'',
    YPID:'',
    YPMC:'',
    KCL:''
})

const medicineList =[
{
        'YPID':'1',
        'YPMC':'青霉素',
        'KCL':'9999'
    },
    {
        'YPID':'2',
        'YPMC':'青霉素555',
        'KCL':'9999'
    },
    {
        'YPID':'3',
        'YPMC':'青霉素2222',
        'KCL':'9999'
    },
    {
        'YPID':'4',
        'YPMC':'青霉素33',
        'KCL':'9999'
    },
    {
        'YPID':'5',
        'YPMC':'青霉素2',
        'KCL':'9999'
    },
    {
        'YPID':'5',
        'YPMC':'青霉素2',
        'KCL':'9999'
    },
    {
        'YPID':'5',
        'YPMC':'青霉素2',
        'KCL':'9999'
    },
    {
        'YPID':'5',
        'YPMC':'青霉素2',
        'KCL':'9999'
    },
    {
        'YPID':'5',
        'YPMC':'青霉素2',
        'KCL':'9999'
    },
    {
        'YPID':'5',
        'YPMC':'青霉素2',
        'KCL':'9999'
    },
]
const checkList =[
    {
        xmfyid:'',
        xmmc:'',
        gjz:'',
        dj:''
    },
]
// 患者信息头像点击弹出
const dialogVisible = ref(false)
// 药品处方点击弹出
const dialogVisible1 = ref(false) 
// 药品列表弹出
const dialogVisible2 = ref(false) 
// 检查处方弹出
const dialogVisible3 = ref(false) 
// 检查列表弹出
const dialogVisible4 = ref(false) 
const orderType =ref('')
const activeName =ref('first')
// 全选
const multipleTableRef = ref()
const multipleSelection = ref([])
// ---------------------------方法区------------------------------------
// 开诊界面点击按钮显示已挂号人
const handleHZXM = ()=>{
    dialogVisible.value = true
}
const tableDataOrigin =[
    {
        HZXM:'张三',
        LSBH:'11111',
        GHLX:'门诊',
        
    }
]
const tableData =ref(tableDataOrigin)
// 提交按钮，弹出提交成功-暂时没有
const onsubmit =(formEl)=>{
    if (!formEl) return 
    formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit');
            ElMessage.success('提交成功')
        }else {
            console.log('error submit!', fields)
            ElMessage.success('提交失败')
        }
    })
}
// 接诊患者
const handleJiezhen = ()=>{
    ElMessage.success('接诊成功')
    dialogVisible.value =false;
}
// 添加药品处方
const handleMedicine =()=>{
    dialogVisible1.value=true
}
// 确定添加药品
const sureAddM =()=>{
    dialogVisible1.value = false
    ElMessage.success('添加成功！')
}
// 添加药品列表
const handleYaopin =()=>{
    dialogVisible2.value=true
} 
// 添加检查处方
const handleCheck =()=>{
    dialogVisible3.value=true
}
// 确定添加检查
const sureAddC =()=>{
    dialogVisible3.value = false
    ElMessage.success('添加成功！')
}
// 添加检查项列表
const handleChecklist =()=>{
    dialogVisible4.value=true
}
// 全选
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

// 保存病例
const hadleSave =()=>{
    ElMessage.success('保存成功')
}
// 完成就诊
const handleFinish = ()=>{
    ElMessage.success('完成就诊')
}
// 添加药品项-添加药品
const handleAddM =()=>{
    ElNotification({
        title: 'Success',
        message: '添加成功',
        type: 'success',
        showClose: false
    })
    dialogVisible2.value = false
}
// 添加检查项-添加检查
const handleAddC =()=>{
    ElNotification({
        title: 'Success',
        message: '添加成功',
        type: 'success',
        showClose: false
    })
    dialogVisible4.value = false
}

// ---------------------假数据区------------------------------------
/* onMounted(()=>{
    axios.get("/mock/bannerData").then(res=>{
      console.log("假数据结果",res.data);
    }).catch(error=>{
      console.log(error);
    })
}) */

</script>

<style lang="scss" scoped>
.el-form-left{
  width: 360px;
  margin-top: 50px;
}
.el-input{
    width: 200px;
}
.el-container{
    margin: 3px;
}
.el-aside{
    // border:1px solid #ccc;
    margin-top: 20px;
    border-left:1px solid #ccc;
    border-top:1px solid #ccc;
    margin-left: 10px;
    height: 600px;
    // box-shadow:  5px -5px 5px 5px #ccc;  
    box-shadow: 3px 3px 2px #ccc;
}
.el-form-right{
    margin-top: 10px;
}
.el-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background: #ccc;
    border: 1px solid #ccc;
    margin-top: 20px;
    box-shadow: -3px 3px 2px #ccc;
    margin-left: 10px;
}
.medicine-button{
    width: 100%;
    margin-top: 10px;
}
.mform{
    // height: 700px;
    width: 100%;
    // padding-left: 20px;
}
.mlistbtn{
    margin-left: 150px;
    margin-top: 10px;
    width: 150px;
}
.add{
    width: 150px;
}
</style>