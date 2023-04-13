<template>
    <div class="img">
        <div class="left">

        </div>
        <el-form :model="form" ref="formRef" :rules="rules" label-width="100px">
            <el-form-item label="身份证号" prop="username">
                <el-input v-model="form.username" placeholder="请输入身份证号"/>
            </el-form-item>
            <el-form-item label="手机号" prop="tele">
                <el-input v-model="form.tele" placeholder="请输入手机号"/>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name" placeholder="请输入姓名"/>
            </el-form-item>
            <el-row>
                <el-form-item label="性别" prop="gender">
                    <el-radio-group v-model="form.gender" class="ml-4">
                        <el-radio label="1" size="large">男</el-radio>
                        <el-radio label="2" size="large">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="职位">
                    <el-select v-model="form.job" placeholder="职位">
                        <el-option label="医生" value="医生" />
                        <el-option label="护士" value="护士" />
                    </el-select>
                </el-form-item>
            </el-row>
            
            <el-form-item label="密码" prop="password">
                <el-input
                    v-model="form.password"
                    type="password"
                    placeholder="请输入密码"
                    show-password
                />
            </el-form-item>
            <el-form-item label="确认密码" prop="password">
                <el-input
                    v-model="form.password2"
                    type="password"
                    placeholder="请重输密码"
                    show-password
                />
            </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleLogon(formRef)">注册</el-button>
                </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
    import{ElMessage} from 'element-plus'
    import { ref,reactive } from 'vue'
    import { useRouter } from 'vue-router';


    const router = useRouter()
    const formRef = ref()
    const ida = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/
    const telephone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
    const mima = /^(?=.*[a-zA-Z])(?=.*\d).+$/


    const form = reactive({
        username: '',
        tele:'',
        name:'',
        gender:'',
        password: '',
        password2: '',
    })

    const rules = reactive({
        username: [
            { required: true, message: '手机号不能为空', trigger: 'blur' },
            { pattern: ida, message: '请输入正确身份证号', trigger: 'blur' }
        ],
        tele:[    
            { required: true, message: '手机号不能为空', trigger: 'blur' },
            { pattern: telephone, message: '请输入正确手机号', trigger: 'blur' }
        ],
        name:[
            { required: true, message: '姓名不能为空', trigger: 'blur' },
        ],
        gender:[
            { required: true, message: '请选择性别', trigger: 'blur' },
        ],
        password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { pattern: mima, message: '密码组合为数字加英文', trigger: 'blur' }
        ],
        password2: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { pattern: mima, message: '两次密码不一致', trigger: 'blur' }
        ],
    })
    const handleLogon = (formEl) => {
        if (!formEl) return
        formEl.validate((valid, fields) => {
            if(form.password == form.password2&&form.password != ''&&form.tele != ''&&form.tele != 'name'&&form.username != 'name'){
                ElMessage.success('注册成功')
                router.push('/Login')
            }
            else{
                ElMessage.error('注册失败')
                form.password2 = ''
            }
        })
        
        
    }
</script>

<style lang="scss" scoped>
    .el-form{
        width: 500px;
        margin: 0 auto;
        background: white;
        padding: 30px;
        border-radius: 20px;
        position: relative;
        top: 200px;
        left: 250px;
        background: skyblue;
        box-sizing: border-box;
        padding-top: 100px;
    }
    font{
        cursor: pointer;
    }
    .img{
        height: 100vh;
        background: url(../../image/bg.jpg) no-repeat center;
    }
    .el-select{
        width: 100px;
    }
</style>