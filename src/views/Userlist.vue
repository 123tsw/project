<template>  
<!-- <h2>患者管理/患者列表</h2>  -->
    <div class="order-head">
        <el-form :model="form" label-width="120px">
            <el-row>
                <el-col :span="8">
                    <el-form-item label="患者姓名">
                        <el-input
                        v-model="form.HZXM"
                        class="w-50 m-2 input2"
                        size="default"
                        placeholder="输入患者姓名进行查询" 
                        >
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="16">
                    <el-form-item label="身份证号">
                        <el-input v-model="form.HZSFZH"  placeholder="请输入身份证号..." />
                        <el-button type="primary" plain style="margin-left: 10px;" @click="hadlesearch">
                            <el-icon><Search /></el-icon><span>搜索</span>
                        </el-button>
                        <el-button type="primary" plain @click="handlereset">
                            <el-icon><Loading /></el-icon><span>重置</span>
                        </el-button>
                    </el-form-item>
                </el-col>
                
            </el-row>
        </el-form> 
        <el-dialog
            v-model="dialogVisible"
            title="选择挂号患者"
            width="200px"
        >
        </el-dialog>              
    </div>    
    
    <!-- 表格 -->
    <el-table 
    :data="tableData" 
    border
    style="width: 100%"
    
    stripe
    >
        <el-table-column prop="HZSFZH" label="身份证号" width="100" fixed />
        <el-table-column prop="HZXM" label="姓名" width="120" />
        <el-table-column prop="HZXB" label="性别" width="120" />
        <el-table-column prop="HZNL" label="年龄" width="120" />
        <el-table-column prop="BRDH" label="电话" width="120" />
        <el-table-column prop="JTZZ" label="住址" width="120" />
        <el-table-column prop="ZHJZSJ" label="最后就诊时间" width="120"/>
        <el-table-column prop="LXRXM" label="联系人姓名" width="120" />
        <el-table-column prop="LXRDH" label="联系人电话" width="120"/>
        <el-table-column prop="LXRYHZGX" label="与患者关系" width="120"/>
        <el-table-column width="250">
            <template #header>操作</template>
            <template #default>
                <el-button type="success" plain @click="handleEdit">修改</el-button>
                <el-button type="primary" plain @click="handleinfo">就诊记录</el-button>
            </template>
        </el-table-column>
        <el-table-column label="当前状态"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tableData.length"
      :page-size="pageSize"
      class="page-pos"
      @current-change="handelPage"
    />
</template>

<script setup>
import { useRoute } from 'vue-router';
import {ref,reactive,computed} from 'vue'
const router =useRoute()
const formRef = ref()
const pageSize =ref(2) //2个一页
const form =reactive({
    HZKS:'',
    JZXH:'',
    HZSFZH:'123',
    HZXM:'张三',
    HZXB:'',
    HZNL:'11',
    BRDH:'11',
    JTZZ:'辽宁省',
    ZHJZSJ:new Date(),
    LXRXM:'11',
    LXRDH:'11',
    LXRYHZGX:'',
    bingyin:''

})
const radio1 =ref('男')
const dialogVisible = ref(false)

const tableDataOrigin = [
    {
        HZSFZH:'11',
        HZXM:'11',
        HZXB:'11',
        HZNL:'11',
        BRDH:'11',
        JTZZ:'11',
        ZHJZSJ:'11',
        LXRXM:'11',
        LXRDH:'11',
        LXRYHZGX:'',
        userstate: '已就诊',
        JZXH:'01',

    },
    {
        HZSFZH:'112',
        HZXM:'11',
        HZXB:'11',
        HZNL:'11',
        BRDH:'11',
        JTZZ:'11',
        ZHJZSJ:'11',
        LXRXM:'11',
        LXRDH:'11',
        LXRYHZGX:'',
        userstate: '未就诊',
        JZXH:'02'
    },
    {
        HZSFZH:'113',
        HZXM:'11',
        HZXB:'11',
        HZNL:'11',
        BRDH:'11',
        JTZZ:'11',
        ZHJZSJ:'11',
        LXRXM:'11',
        LXRDH:'11',
        LXRYHZGX:'',
        userstate: '已就诊',
        JZXH:'03'
    },
    {
        HZSFZH:'112',
        HZXM:'11',
        HZXB:'11',
        HZNL:'11',
        BRDH:'11',
        JTZZ:'11',
        ZHJZSJ:'11',
        LXRXM:'11',
        LXRDH:'11',
        LXRYHZGX:'',
        userstate: '未就诊',
        JZXH:'04',


    },
]
const options = [
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
]
const hadlesearch = ()=>{}
const handlereset = ()=>{}


// tableData -> 分类的数据
const tableData =ref(tableDataOrigin)
// ----------------------方法区--------------------------
// 搜索按钮
const handelSearch = ()=>{}
const handleEdit = ()=>{}
// 点击就诊记录，弹出患者信息
const handleinfo = ()=>{
    dialogVisible.value = true
}









const handelPage = ()=>{}

// 筛选 
const handelState =()=>{
    
}
// 分页
const tablePageData = ref()
</script>

<style lang="scss" scoped>
.order-head{
    /* display: flex;
    justify-content: space-between;
    padding: 10px; */
    padding: 10px;
}
.input1{
    width: 200px;
}
.page-pos{
    float: right;
    margin: 20px;
    margin-top: 20px;
}
.el-button-add{
    margin-top: 15px;
    margin-left: 15px;
}
.el-input{
    width: 200px;
}
.input2{
    width: 200px;
}
</style>