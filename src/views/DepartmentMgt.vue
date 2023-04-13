<template>
    <div class="box1">

        <el-dialog v-model="dialogVisible" title="增加" width="400">
            <el-form :model="form" label-width="120px">
                <el-form-item label="子级科室id" prop="id">
                    <el-input v-model="form.id" />
                </el-form-item>
                <el-form-item label="子级科室名称" prop="name">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="负责人" prop="fzr">
                    <el-input v-model="form.fzr" />
                </el-form-item>
                <el-form-item label="负责人姓名" prop="fzrname">
                    <el-input v-model="form.fzrname" />
                </el-form-item>
                <el-form-item label="Resources">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="禁用" />
                        <el-radio label="开启" />
                    </el-radio-group>
                </el-form-item>
                <template #footer>
                <span class="dialog-footer">
                    <el-button>取消</el-button>
                    <el-button type="primary">添加</el-button>
                </span>
            </template>
            </el-form>
  
        </el-dialog>
        <!-- 标签页 -->
        <el-button type="primary" icon="Plus" @click="handleAdd">增加</el-button>
        <el-tabs :tab-position="tabPosition" class="demo-tabs" @tab-click="handleClick" v-model="activeName">
            <el-tab-pane v-for="item in list " :key="item.id" :label=item.dename>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="name" label="子级科室id" width="160" />
                    <el-table-column prop="date" label="子级科室名" width="160" />
                    <el-table-column prop="name" label="负责人" width="160" />
                    <el-table-column prop="name" label="负责人联系电话" width="160" />
                    <template>
                        <el-table-column prop="name" label="科室状态" width="160" />
                        <el-select v-model="value" class="m-2" placeholder="Select" size="small">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
                    </template>
                    <el-table-column prop="name" label="父级科室id" width="160" />
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { timePanelSharedProps } from 'element-plus/es/components/time-picker/src/props/shared';
import { ref, reactive } from 'vue'
//标签页
const handleClick = () => {

}

const tabPosition = ref('left');

/* const activeName = computed(() => list.value[0].dename) */
//弹窗隐不隐藏
const dialogVisible = ref(false)
const handleAdd = () => {
    dialogVisible.value = true
}

const form = reactive({
    id: '',
    name: '',
    fzr: '',
    fzrname: ''
})
const rules = reactive({
    name: [
        { required: true, message: 'id不能为空', trigger: 'blur' },
    ],
    title: [
        { required: true, message: '科室名称不能为空', trigger: 'blur' },
    ],
    price: [
        { required: true, message: '负责人不能为空', trigger: 'blur' },
    ],
    info: [
        { required: true, message: '负责人姓名不能为空', trigger: 'blur' },
    ],
})
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
/* .box1 {
    margin: 150px 100px;
    width: 700px;
    height: 400px;
} */

.box1 .el-button {
    margin-left: 830px;
    margin-bottom: 10px;
}

.demo-tabs {

    height: 400px;
    background-color: #d6cbfa;
    opacity: .7;
    font-size: 30px;
}
.el-tabs{
    margin-bottom: 30px;
}
</style>