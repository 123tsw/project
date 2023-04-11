<template>
    <h2>面包屑-患者管理/患者信息</h2>
    <div>
        <el-form 
        :model="form" 
        label-width="100px"
        ref="formRef"
        >
        <el-row>
            <el-col :span="12">
                <el-form-item label="身份证号" prop="HZSFZH">
                    <el-input v-model="form.HZSFZH" />
                </el-form-item>
                </el-col>
                <el-col :span="12">    
                <el-form-item label="患者姓名" prop="HZXM">
                    <el-input v-model="form.HZXM" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="患者年龄" prop="HZNL">
                    <el-input v-model="form.HZNL" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="性别" prop="HZXB">
                    <el-radio-group v-model="radio1" class="ml-4">
                        <el-radio label="男" size="large">男</el-radio>
                        <el-radio label="女" size="large">女</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="电话号码" prop="BRDH">
                    <el-input v-model="form.BRDH" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="联系人姓名" prop="LXRXM">
                    <el-input v-model="form.LXRXM"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="与患者关系" prop="LXRYHZGX">
                    <el-select v-model="form.LXRYHZGX" class="m-2" placeholder="请选择" size="default">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="联系人电话" prop="LXRDH">
                    <el-input v-model="form.LXRDH"/>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="地址" prop="JTZZ">
                    <div style="border: 1px solid #ccc">
                        <Toolbar
                            style="border-bottom: 1px solid #ccc;  width: 700px;"
                            :editor="editorRef"
                            :defaultConfig="toolbarConfig"
                            :mode="mode"
                        />
                        <Editor
                            style="height: 300px; overflow-y: hidden;"
                            v-model="valueHtml"
                            :defaultConfig="editorConfig"
                            :mode="mode"
                            @onCreated="handleCreated"
                        />
                    </div>
                </el-form-item>
            </el-col>
        </el-row> 
        <el-form-item>
            <el-button type="success" plain @click="onsubmit(formRef)">提交</el-button>
        </el-form-item>       
        </el-form>
    </div>
</template>

<script setup>
import {ref,reactive,computed,shallowRef} from 'vue'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ElMessage } from 'element-plus';
const formRef =ref()
const form =reactive({
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
})
const radio1 =ref('男')
const options =[
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
// 地址
const editorRef = shallowRef()
const toolbarConfig =ref({})
const mode =ref('default')
const editorConfig = { placeholder: '请输入内容...' }
const valueHtml = ref('<p><br></p>')

// ---------------------------方法区------------------------------------
const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
// 提交按钮，弹出提交成功
const onsubmit =(formEl)=>{
    if (!formEl) return 
    formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit');
            ElMessage.success('提交成功')
        }else {
            console.log('error submit!', fields)
            ElMessage.success('提交失败')
        }
    })
}
</script>

<style lang="scss" scoped>
.el-form{
  width: 500px;
  margin-top: 50px;
}
.el-input{
    width: 200px;
}
</style>