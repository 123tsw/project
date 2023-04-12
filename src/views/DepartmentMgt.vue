<template>
    <div class="box1">
        <el-button type="primary" plain>增加</el-button>
        <el-tabs :tab-position="tabPosition"  class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane v-for="item in list " :key="item.id" :label= item.dename >
<!--             <el-table :data="tableData" border style="width: 100%" v-for="date in list2 " :key="date.id" :label= date.dename>
                  <el-table-column prop="name" label="子级科室id" width="160" />
                  <el-table-column prop="date" label="子级科室名" width="160" />
                  <el-table-column prop="name" label="负责人" width="160" />
                  <el-table-column prop="name" label="负责人联系电话" width="160" />
                  <el-table-column prop="name" label="科室状态" width="160" />
                  <el-table-column prop="name" label="父级科室id" width="160" />
            </el-table> -->
        </el-tab-pane>
    </el-tabs>
    </div>
</template>

<script setup>
import { timePanelSharedProps } from 'element-plus/es/components/time-picker/src/props/shared';
import { ref,computed } from 'vue'
const tabPosition = ref('left');
/* const activeName = computed(() => list.value[0].dename) */
const handleClick = () =>{

}
let list = [
    { id: 1, dename: '消暑' },
    { id: 2, dename: '小米' },
    { id: 3, dename: '小麦' },
    { id: 1, dename: '消暑' },
    { id: 2, dename: '小米' },
    { id: 3, dename: '小麦' },
    { id: 1, dename: '消暑' },
    { id: 2, dename: '小米' },
    { id: 3, dename: '小麦' },
    { id: 1, dename: '消暑' },
    { id: 2, dename: '小米' },
    { id: 3, dename: '小麦' },
    { id: 1, dename: '消暑' },
    { id: 2, dename: '小米' },
    { id: 3, dename: '小麦' },
    { id: 1, dename: '消暑' },
    { id: 2, dename: '小米' },
    { id: 3, dename: '小麦' },
]
let list2 = [
    { id: 1, dename: '消暑' },
    { id: 2, dename: '小米' },
    { id: 3, dename: '小麦' },
    { id: 1, dename: '消暑' },
    { id: 2, dename: '小米' },
    { id: 3, dename: '小麦' },
    { id: 1, dename: '消暑' },
    { id: 2, dename: '小米' },
    { id: 3, dename: '小麦' },
    { id: 1, dename: '消暑' },
    { id: 2, dename: '小米' },
    { id: 3, dename: '小麦' },
    { id: 1, dename: '消暑' },
    { id: 2, dename: '小米' },
    { id: 3, dename: '小麦' },
    { id: 1, dename: '消暑' },
    { id: 2, dename: '小米' },
    { id: 3, dename: '小麦' },
]
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },

]


</script>

<style scoped>
.box1{
    margin: 150px 100px;
    width: 700px;
    height: 400px;
}
.box1 .el-button{
    margin-left: 480px;
    margin-bottom: 10px;
}
.demo-tabs {

    height: 400px;
    background-color: #d6cbfa;
    opacity: .7;
    font-size: 30px;
}
/* .el-tab-pane {
    background-color: #d6cbfa;
    opacity: .7;
    width: 200px;
    height: 400px;
} */

/* .el-main {
    background-color: #e1d8fe;
    opacity: .7;
    height: 400px;
} */

/* .common-layout .office {
    border-bottom: 1px solid black;
    font-size: 30px;
    height: 50px;
    line-height: 50px;
}
 */
/*.common-layout .el-main .el-table{
     border-top:1px solid grey;
    border-right:1px solid grey; 
    
}*/
/* .common-layout .el-main .el-table .el-table-column{
    border: 1px solid grey;
} */
/* .common-layout .el-main .el-table .el-pagination{
    margin-bottom: 3px;
} */
</style>