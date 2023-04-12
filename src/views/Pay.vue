<template>
    <div class="pay">
        <h4>门诊收退记录</h4>
        <div class="box1">
            <el-select v-model="value" class="m-2" placeholder="Select">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="value" class="m-2" placeholder="Select">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="value" class="m-2" placeholder="Select">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-input v-model="form.name" value="输入单据号" />
            <el-input v-model="form.name" value="输入患者姓名" />
            <div class="demo-date-picker">
                <div class="block">
                    <el-date-picker v-model="value1" type="daterange" range-separator="To" start-placeholder="Start date"
                        end-placeholder="End date" :size="size" />
                </div>
            </div>
        </div>
        <div class="box2">
            <el-button type="query" plain>查询</el-button>
            <el-button type="anew" plain>条件重置</el-button>
            <el-button type="print" plain>打印</el-button>
            <el-button type="success" plain>Success</el-button>
        </div>
        <div class="box3">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
            </el-table>
            <div>
                <el-pagination small layout="prev, pager, next" :total="50" />
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { reactive } from 'vue'
import { ref } from 'vue';
// do not use same name with ref
//el-form的逻辑
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
const value = ref('')

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]


//表格
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
]
const onSubmit = () => {
    console.log('submit!')
}
//
const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
    {
        text: 'Last week',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
        },
    },
    {
        text: 'Last month',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
        },
    },
    {
        text: 'Last 3 months',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
        },
    },
]
</script>
  

<style scoped>
.pay{
    margin: 100px ;
}
.box1 {
    width: 100%;
    height: 60px;
    background: pink;
}

.el-select {
    width: 100px;
    margin-left: 20px;
    margin-top: 3px;
}

.el-input {
    width: 120px;
    margin-left: 20px;
    margin-top: 3px;
}

/* 日期 */
.demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
    display: inline;
}

.demo-date-picker .block {
      text-align: center; 
    border-right: solid 1px var(--el-border-color);
    display: inline;
    margin-left: 20px;
    float: right;
}

.demo-date-picker .block:last-child {
    border-right: none;
    display: inline;
    margin-top: 3px;

}

.demo-date-picker .demonstration {
    display: inline;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-top: 3px;
}

.box2{
    float: right;
    height: 40px;
}
</style>