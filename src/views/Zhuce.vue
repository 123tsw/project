<template>
    <div class="img">
        <div class="left">

        </div>
        <el-form :model="form" :rules="rules" label-width="100px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input
                    v-model="form.password"
                    type="password"
                    placeholder="请输入密码"
                    show-password
                />
            </el-form-item>
            <el-form-item label="确认密码：" prop="password">
                <el-input
                    v-model="form.password2"
                    type="password"
                    placeholder="请重输密码"
                    show-password
                />
            </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleLogon">注册</el-button>
                </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
    import{ElMessage} from 'element-plus'
    import { reactive } from 'vue'
    import { useUserTokenStore } from '../stores/userToken';

    const userTokenStore = useUserTokenStore()
    const telephone = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
    const mima = /^(?=.*[a-zA-Z])(?=.*\d).+$/


    const form = reactive({
        username: '',
        password: '',
        password2: '',
    })

    const rules = reactive({
        username: [
            { required: true, message: '手机号不能为空', trigger: 'blur' },
            { pattern: telephone, message: '请输入正确的手机号', trigger: 'blur' }
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
    const handleLogon = () => {
        if(form.password == form.password2&&form.password != ''){
            ElMessage.success('注册成功')
            userTokenStore.clearToken()
            location.href = '/Login' 
        }
        else{
            ElMessage.error('注册失败')
            form.password2 = ''
        }
        
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
        top: 300px;
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
</style>