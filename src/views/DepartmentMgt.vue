<template>
    <div>
        <h3>科室管理</h3>
        <div class="box1">
            <!-- 卡片视图区域 -->
            <el-card>
                <el-row :gutter="15">
                    <el-col :span="7">
                        <!-- 搜索框 -->
                        <el-input v-model="input4" class="w-50 m-2" placeholder="搜索">
                            <template #prefix>
                                <el-icon class="el-input__icon">
                                    <search />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-col>
                    <!-- 增加按钮 -->
                    <el-col :span="4">
                        <el-button type="primary" icon="Plus" @click="handleAdd">增加</el-button>
                        <!-- 增加按钮的弹窗 -->
                        <el-dialog v-model="dialogVisible" title="增加" width="300">
                            <el-form :model="form" label-width="120px" v-model="labelPosition">
                                <el-form-item label="子集科室id">
                                    <el-input v-model="form.name" />
                                </el-form-item>
                                <el-form-item label="子集科室名">
                                    <el-input v-model="form.name" />
                                </el-form-item>
                                <el-form-item label="负责人">
                                    <el-input v-model="form.name" />
                                </el-form-item>
                                <el-form-item label="负责人联系电话">
                                    <el-input v-model="form.name" />
                                </el-form-item>
                                <el-form-item label="状态管理">
                                    <el-switch v-model="form.delivery" />
                                </el-form-item>
                            </el-form>
                            <template #footer>
                                <span class="dialog-footer">
                                    <el-button>取消</el-button>
                                    <el-button type="primary">
                                        增加
                                    </el-button>
                                </span>
                            </template>
                        </el-dialog>
                    </el-col>
                </el-row>
            </el-card>
        </div>
        <!-- 科室标签页 -->
        <div class="box2">
            <el-tabs type="border-card" :tab-position="tabPosition">
                <el-tab-pane label="User">
                    <!-- 二级科室表格 -->
                    <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column prop="id" label="子级科室id" width="160" />
                        <el-table-column prop="zjks" label="子级科室名" width="160" />
                        <el-table-column prop="fzr" label="负责人" width="160" />
                        <el-table-column prop="number" label="负责人联系电话" width="160" />
                        <el-table-column prop="status" label="科室状态" width="160">
                            <el-switch v-model="value1" @click="handleSwitch" />
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="Config">Config</el-tab-pane>
                <el-tab-pane label="Role">Role</el-tab-pane>
                <el-tab-pane label="Task">Task</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup>
import { ref,reactive} from 'vue';
import { Search } from '@element-plus/icons-vue'//Calendar,  卡片->搜索框
const input4 = ref('')   //搜索
const tabPosition = ref('left') // 科室标签页在左面
const labelPosition = ref('right')
//增加按钮
const dialogVisible = ref(false)
const handleAdd = () => {
    dialogVisible.value = true
}
/* //增加按钮弹出框 */
const form = reactive({
  id: '',
  zjks: '',
  fzr: '',
  number: '',
  status: false,
})
//
/* //子科室表格 + 开关 */
const tableData = [
    {
        id: '2016-05-03',
        zjks: 'Tom',
        fzr: 'No. 189, Grove St, Los Angeles',
        number: 123444,
        status: [
            { lable: '启用', value: 1 },
            { lable: '启用', value: 1 },
        ]
    },
    {
        id: '2016-05-03',
        zjks: 'Tom',
        fzr: 'No. 189, Grove St, Los Angeles',
        number: 123444,
        status: [
            { lable: '启用', value: 1 },
            { lable: '启用', value: 1 },
        ]
    },
]
//开关
const value1 = ref(true);
const handleSwitch = () => {
    value1.value = false
}
</script>

<style scoped>
.box2 {
    margin-top: 20px;
}

.box2 .el-tabs {
    height: 500px;
}
.box1 .el-form-item{

}
</style>