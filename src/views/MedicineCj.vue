<template>
    <div>
        <div>
            <el-button type="success"  @click="dialogVisible = true">添加&nbsp;&nbsp;&nbsp;<el-icon><Plus /></el-icon></el-button>
            <el-drawer v-model="dialogVisible" width="30%" draggable>
                <span>
                    <h2>添加厂家</h2>
                    <el-form-item class="input2" label="厂家id" prop="cjid">
                        <el-input v-model="form.cjid" placeholder="厂家id" />
                    </el-form-item>
                    <el-form-item label="厂家编码" prop="cjbm">
                        <el-input v-model="form.cjbm" placeholder="厂家编码" />
                    </el-form-item>
                    <el-form-item label="厂家名称" prop="cjmc">
                        <el-input v-model="form.cjmc" placeholder="厂家名称" />
                    </el-form-item>
                    <el-form-item label="拼音码" prop="pym">
                        <el-input v-model="form.pym" placeholder="拼音码" />
                    </el-form-item>
                    <el-form-item label="应用范围" prop="yyfw">
                        <el-input v-model="form.yyfw" placeholder="应用范围" />
                    </el-form-item>
                    <el-form-item label="法人代表" prop="frdb">
                        <el-input v-model="form.frdb" placeholder="法人代表" />
                    </el-form-item>
                    <el-form-item label="联系电话" prop="lxdh">
                        <el-input v-model="form.lxdh" placeholder="联系电话" />
                    </el-form-item>
                    <el-form-item label="厂家传真" prop="cjcz">
                        <el-input v-model="form.cjcz" placeholder="厂家传真" />
                    </el-form-item>
                    <el-form-item label="厂家地址" prop="cjdz">
                        <el-input v-model="form.cjdz" placeholder="厂家地址" />
                    </el-form-item>
                    <el-form-item label="厂家邮编" prop="cjyb">
                        <el-input v-model="form.cjyb" placeholder="厂家邮编" />
                    </el-form-item>
                    <el-form-item label="备注说明" prop="bzsm">
                        <el-input v-model="form.bzsm" placeholder="备注说明" />
                    </el-form-item>
                    <el-form-item label="有效状态" prop="yxzt">
                        <el-input v-model="form.yxzt" placeholder="有效状态" />
                    </el-form-item>
                    <el-form-item label="统一社会信用代码信用代码" prop="xydm">
                        <el-input v-model="form.xydm" placeholder="统一社会信用代码信用代码" />
                    </el-form-item>

                </span>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">
                            确定
                        </el-button>
                    </span>
                </template>
            </el-drawer>
            <el-input v-model="searchWord" class="input1" placeholder="输入厂家关键字">
                <template #append>
                    <el-button icon="Search" @click="handleSearch" />
                </template>
            </el-input>
        </div>
        <el-table :data="tableData" style="width: 100%" max-height="650">
            <el-table-column fixed prop="cjid" label="厂家id" width="150" />
            <el-table-column prop="cjbm" label="厂家编码" width="120" />
            <el-table-column prop="cjmc" label="厂家名称" width="120" />
            <el-table-column prop="pym" label="拼音码" width="120" />
            <el-table-column prop="yyfw" label="应用范围"  width="120" />
            <el-table-column prop="frdb" label="法人代表" width="120" />
            <el-table-column prop="lxdh" label="联系电话" width="120" />
            <el-table-column prop="cjcz" label="厂家传真" width="120" />
            <el-table-column prop="cjdz" label="厂家地址" width="120" />
            <el-table-column prop="cjyb" label="厂家邮编" width="120" />
            <el-table-column prop="xydm" label="统一社会信用代码信用代码" width="120" />
            <el-table-column prop="bzsm" label="备注说明" width="120" />
            <el-table-column prop="yxzt" label="有效状态" width="120" />
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button
                        link
                        type="primary"
                        size="small"
                        @click.prevent="deleteRow(scope.$index)"
                    >
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="tableData.length" />
    </div>
</template>
    
<script setup>
    import { ref ,reactive} from 'vue'
    const form = reactive({
        cjid: '',
        cjbm: '',
        cjmc: '',
        pym: '',
        yyfw: '',
        frdb: '',
        lxdh: '',
        cjcz: '',
        cjdz: '',
        cjyb: '',
        xydm: '',
        bzsm: '',
        yxzt: '',
    })
    const searchWord = ref('')


    const dialogVisible = ref(false)

    const tableData = ref([
        {
            cjid: '2016-05-01',
            cjbm: 'Tom',
            cjmc: 'California',
            pym: 'Los Angeles',
            yyfw: 'CA 90036',
            frdb: 'CA 90036',
            lxdh: 'CA 90036',
            cjcz: 'CA 90036',
            cjdz: 'CA 90036',
            cjyb: 'CA 90036',
            xydm: 'CA 90036',
            bzsm: 'CA 90036',
            yxzt: 'CA 90036',
        },
    ])

    const deleteRow = (index) => {
        tableData.value.splice(index, 1)
    }
</script>

<style lang="scss" scoped>
    .input1{
        width: 250px;
        margin-left: 50px;
    }
    h2{
        text-align: center;
    }
    .input2{
        margin-top: 18px;
    }
</style>