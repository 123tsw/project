<template>
   <!--  <h2>面包屑-患者管理/患者信息</h2> -->
   <div>111</div>
    <div class="common-layout">
        <el-container>
            <el-aside width="400px">
                <h2 style="padding: 10px;padding-bottom: 0;">患者档案</h2>
                <el-form 
                :model="form" 
                label-width="100px"
                ref="formRef"
                class="el-form-left"
                >
                <el-form-item label="身份证号" prop="hzsfzh">
                    <el-input v-model="form.hzsfzh" disabled/>
                </el-form-item>    
                <el-form-item label="患者姓名" prop="HZXM">
                    <el-input v-model="form.HZXM" disabled/>
                    <el-button style="margin-left: 5px;" @click="handleHZXM"><el-icon><Avatar /></el-icon></el-button>
                </el-form-item>
                 <el-form-item label="患者年龄" prop="HZNL">
                    <el-input v-model="form.HZNL" />
                </el-form-item>     
                <el-form-item label="性别" prop="HZXB">
                    <el-radio-group v-model="form.HZXB" class="ml-4">
                        <el-radio label="男" size="large">男</el-radio>
                        <el-radio label="女" size="large">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="电话号码" prop="BRDH">
                    <el-input v-model="form.BRDH" disabled/>
                </el-form-item>
                <el-form-item label="地址信息" prop="JTZZ">
                    <el-input 
                    v-model="form.JTZZ" 
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
                <el-input v-model="form.GMS" type="textarea" placeholder="请输入过敏史" />
                </el-form-item>      
                </el-form>
                <el-dialog
                    v-model="dialogVisible"
                    title="选择挂号患者"
                    width="600px"
                >
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="HZXM" label="患者姓名"  />
                    <el-table-column prop="LSBH" label="流水编号"  />
                    <el-table-column prop="GHLX" label="挂号类型" />
                    <el-table-column label="操作">
                        <template #default>
                            <el-button size="small" type="success" plain @click="handleEdit(formRef)">
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
                        <el-text v-model="form.blid">{{form.blid}}</el-text><!-- 到时候再传数据 -->
                    </div>
                    <div>
                        <el-button type="success" plain><el-icon><Check /></el-icon><span>保存病例</span></el-button>
                        <el-button type="primary" plain><el-icon><Finished /></el-icon><span>就诊完成</span></el-button>
                    </div>
                </el-header>
                <el-main>
                    <el-tabs v-model="activeName" class="demo-tabs">
                        <el-tab-pane label="病例" name="first">
                            <el-form 
                            :model="form" 
                            label-width="70px"
                            class="el-form-right">
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="发病日期">
                                        <el-date-picker
                                            v-model="form.jzrq"
                                            type="date"
                                            placeholder="选择一个好日子"
                                        />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="接诊类型">
                                <el-input  v-model="form.JZLX" />
                                </el-form-item>
                                </el-col>
                            </el-row>
                            <el-form-item label="主诉">
                                <el-input v-model="form.zs" type="textarea" />
                            </el-form-item>
                            <el-form-item label="诊断信息">
                                <el-input v-model="form.zs" type="textarea" />
                            </el-form-item>
                            <el-form-item label="医生建议">
                                <el-input v-model="form.zs" type="textarea" />
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
                    <el-dialog v-model="dialogVisible1" title="添加【药用】处方" center>
                        <el-table :data="medicineData">
                        <el-table-column property="date" label="序号" />
                        <el-table-column property="name" label="药品名称" />
                        <el-table-column property="address" label="数量" />
                        <el-table-column property="address" label="金额" />
                    </el-table>
                    <el-button type="primary" class="medicine-button"><el-icon><Plus /></el-icon><span>添加药品项</span></el-button>
                    </el-dialog>
                   
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import {ref,reactive,computed} from 'vue'
import { ElMessage } from 'element-plus';

const formRef =ref()
const form =reactive({
    hzsfzh:'2106231xxxx1',
    HZXM:'张三',
    HZXB:'女',
    HZNL:'20',
    BRDH:'15112341234',
    JTZZ:'辽宁省大连市',
    jzrq:new Date(),
    GMS:'青霉素过敏',
    JZLX:'初诊',
    zs:'1',
    blid:'23'
})
/* const options =[
    {
        value:'父女'
    },
    {
        value:'父子'
    },
    {
        value:'母子'
    },
    {
        value:'母女'
    },
    {
        value:'配偶'
    },
    {
        value:'其他'
    },
] */
const dialogVisible = ref(false)
const dialogVisible1 = ref(false)
const orderType =ref('')
const activeName =ref('first')
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
// 提交按钮，弹出提交成功
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
const handleEdit = ()=>{}
const handleMedicine =()=>{
    dialogVisible1.value=true
}
/* const handleCheck =()=>{
    dialogVisible2.value=true
} */
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
</style>