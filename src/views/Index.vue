<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <h2>大连鞋盒医院</h2>
                <div class="user-info">
                    <el-dropdown>
                        <span>
                            欢迎：...主任医师
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
                        active-text-color="#5F9F9F"
                        background-color="#CCE8CF"
                        :default-active="active"
                        text-color="#5C3317"
                        router
                    >
                        <el-menu-item index="/home">
                            <el-icon><House /></el-icon> 首页
                        </el-menu-item>

                        <el-sub-menu index="/">
                            <template #title>
                                <el-icon><FirstAidKit /></el-icon>
                                <span>药品</span>
                            </template>
                            <el-menu-item index="/medicinegl"><el-icon><Notebook /></el-icon>药品管理</el-menu-item>
                            <el-menu-item index="/medicinegy"><el-icon><Van /></el-icon>供应商管理</el-menu-item>
                            <el-menu-item index="/medicinecj"><el-icon><OfficeBuilding /></el-icon>厂家管理</el-menu-item>
                        </el-sub-menu>

                        <el-sub-menu index="/">
                            <template #title>
                                <el-icon><Tickets /></el-icon>
                                <span>看病就诊</span>
                            </template>
                            <el-menu-item index="/guaHao"><el-icon><Cellphone /></el-icon>挂号</el-menu-item>
                            <el-menu-item index="/user"><el-icon><CirclePlus /></el-icon>新开就诊</el-menu-item>
                            <el-menu-item index="/userlist"><el-icon><FolderAdd /></el-icon>患者库</el-menu-item>
                        </el-sub-menu>

                        <el-menu-item index="/departmentmgt">
                            <el-icon><DataLine /></el-icon> 科室管理
                        </el-menu-item>

                        <el-menu-item index="/patienttreatment">
                            <el-icon><User /></el-icon> 医生管理
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
        background: #B7E8BD;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        font-size: 25px;
        color: #D98719;
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
        color: #D98719;
    }
    .el-aside{
        background-color: #CCE8CF;
    }
    .el-menu{
        height: calc(100vh - 100px);
    }
</style>
