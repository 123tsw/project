<template>
    <div>
        <div>
            <el-button type="success"  @click="dialogVisible = true">添加&nbsp;&nbsp;&nbsp;<el-icon><Plus /></el-icon></el-button>
            <el-drawer v-model="dialogVisible" title="添加药品" width="30%" draggable>
                <span>
                    <h2>添加药品</h2>
                    <el-form-item label="药品目录id" prop="ypmlid">
                        <el-input v-model="form.ypmlid" placeholder="药品目录id" />
                    </el-form-item>
                    <el-form-item label="药品编码" prop="ypbm">
                        <el-input v-model="form.ypbm" placeholder="药品编码" />
                    </el-form-item>
                    <el-form-item label="通用拼音码" prop="typym">
                        <el-input v-model="form.typym" placeholder="通用拼音码" />
                    </el-form-item>
                    <el-form-item label="商品名称" prop="spmc">
                        <el-input v-model="form.spmc" placeholder="商品名称" />
                    </el-form-item>
                    <el-form-item label="商品拼音码" prop="sppym">
                        <el-input v-model="form.sppym" placeholder="商品拼音码" />
                    </el-form-item>
                    <el-form-item label="药品单价" prop="ypdj">
                        <el-input v-model="form.ypdj" placeholder="药品单价" />
                    </el-form-item>
                    <el-form-item label="药品库存" prop="ypkc">
                        <el-input v-model="form.ypkc" placeholder="药品库存" />
                    </el-form-item>
                    <el-form-item label="药品类型" prop="yplx">
                        <el-input v-model="form.yplx" placeholder="药品类型" />
                    </el-form-item>
                    <el-form-item label="基本药标识" prop="jbybs">
                        <el-input v-model="form.jbybs" placeholder="基本药标识" />
                    </el-form-item>
                    <el-form-item label="抗生素标识" prop="kssbs">
                        <el-input v-model="form.kssbs" placeholder="抗生素标识" />
                    </el-form-item>
                    <el-form-item label="是否疫苗" prop="sfym">
                        <el-input v-model="form.sfym" placeholder="是否疫苗" />
                    </el-form-item>
                    <el-form-item label="是否试敏" prop="sfsm">
                        <el-input v-model="form.sfsm" placeholder="是否试敏" />
                    </el-form-item>
                    <el-form-item label="药品规格" prop="ypgg">
                        <el-input v-model="form.ypgg" placeholder="药品规格" />
                    </el-form-item>
                    <el-form-item label="药品剂型" prop="ypjx">
                        <el-input v-model="form.ypjx" placeholder="药品剂型" />
                    </el-form-item>
                    <el-form-item label="包装材料" prop="bzcl">
                        <el-input v-model="form.bzcl" placeholder="包装材料" />
                    </el-form-item>
                    <el-form-item label="生产日期" prop="scrq">
                        <el-input v-model="form.scrq" placeholder="生产日期" />
                    </el-form-item>
                    <el-form-item label="失效日期" prop="sxrq">
                        <el-input v-model="form.sxrq" placeholder="失效日期" />
                    </el-form-item>
                    <el-form-item label="成人常用剂量" prop="crcyjl">
                        <el-input v-model="form.crcyjl" placeholder="成人常用剂量" />
                    </el-form-item>
                    <el-form-item label="成人最大剂量" prop="crzdjl">
                        <el-input v-model="form.crzdjl" placeholder="成人最大剂量" />
                    </el-form-item>
                    <el-form-item label="小儿常用剂量" prop="xrcyjl">
                        <el-input v-model="form.xrcyjl" placeholder="小儿常用剂量" />
                    </el-form-item>
                    <el-form-item label="小儿最大剂量" prop="xrzdjl">
                        <el-input v-model="form.xrzdjl" placeholder="小儿最大剂量" />
                    </el-form-item>
                    <el-form-item label="药品说明" prop="ypsm">
                        <el-input v-model="form.ypsm" placeholder="药品说明" />
                    </el-form-item>
                    <el-form-item label="产地id" prop="cdid">
                        <el-input v-model="form.cdid" placeholder="产地id" />
                    </el-form-item>
                    <el-form-item label="厂家id" prop="cjid">
                        <el-input v-model="form.cjid" placeholder="厂家id" />
                    </el-form-item>
                    <el-form-item label="供应商id" prop="gysid">
                        <el-input v-model="form.gysid" placeholder="供应商id" />
                    </el-form-item>
                    <el-form-item label="有效状态" prop="yxzt">
                        <el-input v-model="form.yxzt" placeholder="有效状态" />
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
            <el-input v-model="searchWord" class="input1" placeholder="输入药品关键字">
                <template #append>
                    <el-button icon="Search" @click="handleSearch" />
                </template>
            </el-input>
        </div>
        <el-table :data="tableData" style="width: 100%" max-height="650">
            <el-table-column fixed prop="ypmlid" label="药品目录id" width="150" />
            <el-table-column prop="ypbm" label="药品编码" width="120" />
            <el-table-column prop="typym" label="通用拼音码" width="120" />
            <el-table-column prop="spmc" label="商品名称" width="120" />
            <el-table-column prop="sppym" label="商品拼音码" width="120" />
            <el-table-column prop="ypdj" label="药品单价" width="120" />
            <el-table-column prop="ypkc" label="药品库存" width="120" />
            <el-table-column prop="yplx" label="药品类型" width="120" />
            <el-table-column prop="jbybs" label="基本药标识" width="120" />
            <el-table-column prop="kssbs" label="抗生素标识" width="120" />
            <el-table-column prop="sfym" label="是否疫苗" width="120" />
            <el-table-column prop="sfsm" label="是否试敏" width="120" />
            <el-table-column prop="ypgg" label="药品规格" width="120" />
            <el-table-column prop="ypjx" label="药品剂型" width="120" />
            <el-table-column prop="bzcl" label="包装材料" width="120" />
            <el-table-column prop="scrq" label="生产日期" width="120" />
            <el-table-column prop="sxrq" label="失效日期" width="120" />
            <el-table-column prop="crcyjl" label="成人常用剂量" width="120" />
            <el-table-column prop="crzdjl" label="成人最大剂量" width="120" />
            <el-table-column prop="xrcyjl" label="小儿常用剂量" width="120" />
            <el-table-column prop="xrzdjl" label="小儿最大剂量" width="120" />
            <el-table-column prop="ypsm" label="药品说明" width="120" />
            <el-table-column prop="cdid" label="产地id" width="120" />
            <el-table-column prop="cjid" label="厂家id" width="120" />
            <el-table-column prop="gysid" label="供应商id" width="120" />
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
        ypmlid: '',
        ypbm: '',
        typym: '',
        spmc: '',
        sppym: '',
        ypdj: '',
        ypkc: '',
        yplx: '',
        jbybs: '',
        kssbs: '',
        sfym: '',
        sfsm: '',
        ypgg: '',
        ypjx: '',
        bzcl: '',
        scrq: '',
        sxrq: '',
        crcyjl: '',
        crzdjl: '',
        xrcyjl: '',
        xrzdjl: '',
        ypsm: '',
        cdid: '',
        cjid: '',
        gysid: '',
        yxzt: '',
    })
    const searchWord = ref('')


    const dialogVisible = ref(false)
    const tableData = ref([
        {
            ypmlid: '2016-05-01',
            ypbm: 'Tom',
            typym: 'California',
            spmc: 'Los Angeles',
            sppym: 'No. 189, Grove St, Los Angeles',
            ypdj: 'CA 90036',
            ypkc: 'CA 90036',
            yplx: 'CA 90036',
            jbybs: 'CA 90036',
            kssbs: 'CA 90036',
            sfym: 'CA 90036',
            sfsm: 'CA 90036',
            ypgg: 'CA 90036',
            ypjx: 'CA 90036',
            bzcl: 'CA 90036',
            scrq: 'CA 90036',
            sxrq: 'CA 90036',
            crcyjl: 'CA 90036',
            crzdjl: 'CA 90036',
            xrcyjl: 'CA 90036',
            xrzdjl: 'CA 90036',
            ypsm: 'CA 90036',
            cdid: 'CA 90036',
            cjid: 'CA 90036',
            gysid: 'CA 90036',
            yxzt: 'CA 90036',
        }
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