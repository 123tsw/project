<template>
    <div>
        <el-form :model="form" label-width="80px" ref="formRef">
            <el-row>
                <el-col :span="6">
                    <el-form-item label="患者姓名" prop="HZXM">
                        <el-input v-model="form.HZXM" placeholder="请输入患者姓名"/>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="手机号" prop="BRDH">
                        <el-input v-model="form.BRDH" placeholder="请输入手机号"/>
                    </el-form-item>
                   
                </el-col>
                <el-col :span="6">                   
                    <el-form-item label="身份证号" prop="HZSFZH">
                        <el-input v-model="form.HZSFZH" placeholder="请输入身份证号"/>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item>
                        <el-button 
                        type="primary" 
                        plain
                        @click="onSearch(formRef)"
                        >
                            <el-icon><search /></el-icon>
                            <span>搜索</span>
                        </el-button>
                        <el-button 
                        type="primary" 
                        plain 
                        @click="onReset(formRef)"
                        >
                            <el-icon><Loading /></el-icon>
                            <span>重置</span>
                        </el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <el-table :data="tableData" style="width: 100%" border >
            <el-table-column prop="HZXM" label="姓名" width="180" />
            <el-table-column prop="BRDH" label="电话" width="180" />
            <el-table-column prop="HZSFZH" label="身份证号" />
            <el-table-column prop="HZNL" label="年龄" />
            <el-table-column prop="HZXB" label="性别" />
            <el-table-column prop="JTZZ" label="地址" />
        </el-table>
        <el-pagination 
        background 
        layout="prev, pager, next" 
        :total="tableData.length"
        :page-size="pagesize" />
    </div>
</template>

<script setup>
import {ref,reactive} from 'vue'
const formRef = ref()
const form = reactive({
    HZXM:'',
    BRDH:'',
    HZSFZH:'',
    HZNL:'',
    HZXB:'',
    JTZZ:'',
    
})
// 每页有2个数据
const pagesize =ref(2)
const tableData =[
    {
        HZXM: '2016-05-03',
        BRDH: 'Tom',
        HZSFZH: 'No. 189, Grove St, Los Angeles',
        HZNL:'12',
        HZXB:'女',
        JTZZ:'辽宁省'
    },
    {
        HZXM: '2016-05-03',
        BRDH: 'Tom',
        HZSFZH: 'No. 189, Grove St, Los Angeles',
        HZNL:'12',
        HZXB:'男',
        JTZZ:'大连市'
    },
    {
        HZXM: '2016-05-03',
        BRDH: 'Tom',
        HZSFZH: 'No. 189, Grove St, Los Angeles',
        HZNL:'12',
        HZXB:'男',
        JTZZ:'大连市'
    },
    {
        HZXM: '2016-05-03',
        BRDH: 'Tom',
        HZSFZH: 'No. 189, Grove St, Los Angeles',
        HZNL:'12',
        HZXB:'男',
        JTZZ:'大连市'
    }
]
// 方法区=======================================================================
const onReset =()=>{
    formRef.value.resetFields()
}
</script>

<style lang="scss" scoped>
.el-table{
    margin-bottom: 20px;
    margin-top: 20px;
}
</style>