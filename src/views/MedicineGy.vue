<template>
    <div>
        <div>
            <el-button type="success"  @click="dialogVisible = true">添加&nbsp;&nbsp;&nbsp;<el-icon><Plus /></el-icon></el-button>
            <el-drawer v-model="dialogVisible" width="50%" draggable>
                <span>
                    <h2>添加供应商</h2>
                    <el-form-item class="input2" label="供应商id" prop="gysid">
                        <el-input v-model="form.gysid" placeholder="供应商id" />
                    </el-form-item>
                    <el-form-item label="供应商编码" prop="gysbm">
                        <el-input v-model="form.gysbm" placeholder="供应商编码" />
                    </el-form-item>
                    <el-form-item label="供应商名称" prop="gysmc">
                        <el-input v-model="form.gysmc" placeholder="供应商名称" />
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
                    <el-form-item label="供应商传真" prop="gyscz">
                        <el-input v-model="form.gyscz" placeholder="供应商传真" />
                    </el-form-item>
                    <el-form-item label="供应商地址" prop="gysdz">
                        <el-input v-model="form.gysdz" placeholder="供应商地址" />
                    </el-form-item>
                    <el-form-item label="供应商邮编" prop="gysyb">
                        <el-input v-model="form.gysyb" placeholder="供应商邮编" />
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
                        完成
                        </el-button>
                    </span>
                </template>
            </el-drawer>
            <el-input v-model="searchWord" class="input1" placeholder="输入供应商关键字">
                <template #append>
                    <el-button icon="Search" @click="handleSearch" />
                </template>
            </el-input>
        </div>
        <el-table :data="tableData" style="width: 100%" max-height="650">
            <el-table-column fixed prop="gysid" label="供应商id" width="150" />
            <el-table-column prop="gysbm" label="供应商编码" width="120" />
            <el-table-column prop="gysmc" label="供应商名称" width="120" />
            <el-table-column prop="pym" label="拼音码" width="120" />
            <el-table-column prop="yyfw" label="应用范围"  width="120" />
            <el-table-column prop="frdb" label="法人代表" width="120" />
            <el-table-column prop="lxdh" label="联系电话" width="120" />
            <el-table-column prop="gyscz" label="供应商传真" width="120" />
            <el-table-column prop="gysdz" label="供应商地址" width="120" />
            <el-table-column prop="gysyb" label="供应商邮编" width="120" />
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
    import { ref,reactive } from 'vue'
    const form = reactive({
        gysid: '',
        gysbm: '',
        gysmc: '',
        pym: '',
        yyfw: '',
        frdb: '',
        lxdh: '',
        gyscz: '',
        gysdz: '',
        gysyb: '',
        xydm: '',
        bzsm: '',
        yxzt: '',
    })
    const searchWord = ref('')

    const dialogVisible = ref(false)

    const tableData = ref([
        {
            gysid: '2016-05-01',
            gysbm: 'Tom',
            gysmc: 'California',
            pym: 'Los Angeles',
            yyfw: 'CA 90036',
            frdb: 'CA 90036',
            lxdh: 'CA 90036',
            gyscz: 'CA 90036',
            gysdz: 'CA 90036',
            gysyb: 'CA 90036',
            xydm: 'CA 90036',
            bzsm: 'CA 90036',
            yxzt: 'CA 90036',
        },
        {
            gysid: '2016-05-01',
            gysbm: 'Tom',
            gysmc: 'California',
            pym: 'Los Angeles',
            yyfw: 'CA 90036',
            frdb: 'CA 90036',
            lxdh: 'CA 90036',
            gyscz: 'CA 90036',
            gysdz: 'CA 90036',
            gysyb: 'CA 90036',
            xydm: 'CA 90036',
            bzsm: 'CA 90036',
            yxzt: 'CA 90036',
        },
        {
            gysid: '2016-05-01',
            gysbm: 'Tom',
            gysmc: 'California',
            pym: 'Los Angeles',
            yyfw: 'CA 90036',
            frdb: 'CA 90036',
            lxdh: 'CA 90036',
            gyscz: 'CA 90036',
            gysdz: 'CA 90036',
            gysyb: 'CA 90036',
            xydm: 'CA 90036',
            bzsm: 'CA 90036',
            yxzt: 'CA 90036',
        },
    ])

    const deleteRow = (index) => {
        tableData.value.splice(index, 1)
    }

    const handleSearch = () =>{}
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