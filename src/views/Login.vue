<template>
    <div class="img">
        <el-form :model="form" ref="formRef" :rules="rules" label-width="100px">
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
                <el-form-item>
                    <el-button type="primary" @click="onSubmit(formRef)">登录</el-button>
                </el-form-item>
                <span>没有账号？<font style="color: #f60;" @click="handleClick">立即注册</font></span>
        </el-form>
    </div>
</template>

<script setup>
    import { ref,reactive } from 'vue'
    import { useUserTokenStore } from '../stores/userToken';
    import { useRouter } from 'vue-router';

    import { ElMessage } from 'element-plus';
    const formRef = ref()
    const router = useRouter()


    const userTokenStore = useUserTokenStore()
    const ida = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/


    const form = reactive({
        username: '',
        password: ''
    })

    const rules = reactive({
        username: [
            { required: true, message: '手机号不能为空', trigger: 'blur' },
            { pattern: ida, message: '请输入正确的身份证号', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
        ]
    })

    const handleClick = () => {
        userTokenStore.clearToken()
        location.href = '/zhuce' 
    }

    const onSubmit = (formEl) =>{
        if (!formEl) return
        formEl.validate((valid, fields) => {
            if(!ida.test(form.username)){
                ElMessage.error('请输入正确身份证号')
                
            }else{
                if(valid){
                    console.log(form)
                    ElMessage.success('登录成功')
                    router.push('/')
                }else{
                    ElMessage.error('登录失败')
                }
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