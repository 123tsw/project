<!-- 贺玉全代码 -->
<template>
    <div>

        <el-container>
            <div class="YSXQ">
            <h1>医生详情</h1>
            <el-button  type="primary" @click="handleFH" >返回</el-button>
            </div>
            <h2>基本信息</h2>
            <!-- 头部 -->
          <el-header>
            
            <img src="https://marketplace.canva.cn/CHnos/MAB4YrCHnos/2/tl/canva-MAB4YrCHnos.png" alt="">

            <!-- 资料部分 -->
            <div class="ZLBF">

            <div class="JS">
                <div class="ZL BGH">姓名</div>
                <div class="ZL ">张三</div>

                <div class="ZL BGH">性别</div>
                <div class="ZL ">张三</div>
            </div>

            <div class="JS">
                <div class="ZL BGH">联系电话</div>
                <div class="ZL ">张三</div>

                <div class="ZL BGH">身份证号</div>
                <div class="ZL ">张三</div>
            </div>

            <div class="JS">
                <div class="ZL BGH">职称</div>
                <div class="ZL ">张三</div>

                <div class="ZL BGH">挂号费</div>
                <div class="ZL ">张三</div>
                
            </div>

            <div class="JS">
                <div class="ZL BGH">科室</div>
                <div class="ZL ">张三</div>

                <div class="ZL BGH">账号</div>
                <div class="ZL ">张三</div>
            </div>

            </div>

          </el-header>

          <!-- 擅长介绍部分 -->
          <div class="main">
            <div>
                <h2>擅长</h2>
                <div class="SCZL">

                </div>
            </div>
          </div>



            <!-- 医生简介介绍部分 -->
          <div class="footer">
            <h2>简介</h2>
            <div class="JJJS"></div>
          </div>


        </el-container> 

    </div>
</template>

<script setup>
import { ref  } from 'vue';
import router from '../router';

const handleFH = () => {
    router.push('/PatientTreatment')
}
</script>

<style lang="scss" scoped>
.el-container{
    width: 1000px;
    border: 1px solid #ccc;
}
.el-container .YSXQ{
    width: 1000px;
    height: 50px;
    display: flex;
}
.el-container h2{
    font-size: 16px;
    background: #a9a9a9;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ccc;
}
.el-container .YSXQ h1{
    margin-top: 6px;
    font-size: 26px;
    width: 200px;
    margin-right: 680px;

}
.el-container .YSXQ .el-button{
    width: 72px;
    height: 40px;
    margin-top: 10px;
}
.el-header{
    width: 1000px;
    height: 200px;
    display: flex;
    // border: 1px solid #ccc;
}


.el-header img{
    width: 200px;
    height: 200px;
    border-right: 2px solid #ccc;
}
.el-header .ZLBF{
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 5px;

}
.el-header .ZLBF .ZL{
    width: 180px;
    height: 50px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 50px;
}
.el-header .ZLBF .BGH{
    background: #a9a9a9;
    margin-left: 5px;
}
.JS{
    display: flex;
}
.main{
    margin-top: 30px;
    border: 1px solid #ccc;
    height: 190px;
}
.SCZL{
    height: 170px;
    border-top: 1px solid #ccc;
}
.JJJS{
    border-top: 1px solid #ccc;
    height: 600px;
}
</style>