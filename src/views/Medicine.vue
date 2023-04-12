<template>
    <div>
        <div class="count">
            <div>
                <el-input v-model="searchWord" placeholder="输入药品关键字">
                <template #append>
                    <el-button icon="Search" @click="handleSearch" />
                </template>
            </el-input>
            </div>
            <div>
                <el-dropdown>
                    <el-button type="primary">
                        请选择申请机构<el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div>
                <el-dropdown>
                    <el-button type="primary">
                        请选择申请状态<el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
        <div class="footer">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="sqzt" label="申请状态"/>
                <el-table-column prop="ypbm" label="药品编码" />
                <el-table-column prop="tym" label="通用名"  />
                <el-table-column prop="spm" label="商品名"  />
                <el-table-column prop="gg" label="规格"  />
                <el-table-column prop="jx" label="剂型"  />
                <el-table-column prop="jjdw" label="计价单位"/>
                <el-table-column prop="djxq" label="点击详情"/>
            </el-table>
        </div>
    </div>
</template>

<script setup>
    import {ref,reactive} from 'vue'

    const searchWord = ref('')

    const handleSearch = () =>{
        searchWord.value = ''
    }
    const tableData = [
        {
            sqzt: '待审核',
            ypbm: 10001,
            tym: '复方甘草片',
            spm:'复方甘草片',
            gg:'1g*100片/瓶',
            jx:'片型',
            jjdw:'瓶',
            djxq:'详情'
        },
        {
            sqzt: '审核通过',
            ypbm: '',
            tym: '',
            spm:'',
            gg:'',
            jx:'',
            jjdw:'',
            djxq:'详情'
        },
        {
            sqzt: '已录入目录',
            ypbm: '',
            tym: '',
            spm:'',
            gg:'',
            jx:'',
            jjdw:'',
            djxq:'详情'
        },
        {
            sqzt: '驳回',
            ypbm: '',
            tym: '',
            spm:'',
            gg:'',
            jx:'',
            jjdw:'',
            djxq:'详情'       },
    ]

</script>

<style lang="scss" scoped>
    .order-head{
        display: flex;
        justify-content: space-between;
        margin: 50px;
    }
    .el-input{
        width: 200px;
    }
    .count{
        display: flex;
        justify-content: space-between;
        margin: 50px;
    }
    .footer{
        display: flex;
        justify-content: space-between;
        margin: 50px;
    }
    .el-table{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
   
</style>