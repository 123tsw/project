<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <h2>大连鞋盒医院</h2>
                <div class="user-info">
                    <el-dropdown>
                        <span>
                            欢迎：田诗雯主任医师
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        active-text-color="#fcc"
                        background-color="#67acc9"
                        :default-active="active"
                        text-color="#fff"
                        router
                    >
                        <el-menu-item index="/home">
                            <el-icon><HomeFilled /></el-icon> 首页
                        </el-menu-item>
                        <el-menu-item index="/Medicine">
                            <el-icon><List /></el-icon> 药品管理
                        </el-menu-item>
                        <el-menu-item index="3">
                            <el-icon><Checked /></el-icon> 看病就诊
                        </el-menu-item>
                        <el-menu-item index="4">
                            <el-icon><Grid /></el-icon> 科室管理
                        </el-menu-item>
                        <el-menu-item index="5">
                            <el-icon><TrendCharts /></el-icon> 医生管理
                        </el-menu-item>
                    

                        
                    </el-menu>
                </el-aside>
                <el-main>
                    <el-breadcrumb separator="/">
                        <TransitionGroup name="slide">
                            <el-breadcrumb-item v-for="item in breadcrumbs" :key="item">{{ item }}</el-breadcrumb-item>
                        </TransitionGroup>
                    </el-breadcrumb>
                    <RouterView />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { useUserTokenStore } from '../stores/userToken';

    const userTokenStore = useUserTokenStore()
    const route = useRoute()
    const active = ref(route.path)
    const handleLogout = () => {
        userTokenStore.clearToken()
        location.href = '/Login' 
    }

</script>

<style lang="scss" scoped>
    .el-header{
        background: skyblue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        font-size: 25px;
    }
    .user-info{
        display: flex;
        align-items: center;
    }
    .user-info span {
        margin-left: 10px;
        cursor: pointer;
        outline: none;
        font-size: 20px;
    }
    .el-aside{
        background-color: #67acc9;
    }
    .el-menu{
        height: calc(100vh - 100px);
    }
</style>
