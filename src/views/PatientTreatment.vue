<!-- 贺玉全代码 -->
<template>
    <el-container>
        <h1 style=" margin: 20px 0px 20px 20px;" ><el-icon><UserFilled /></el-icon>医生管理</h1>
        <!-- 头部 -->
      <el-header>
        <div>
            <p><el-icon><Menu /></el-icon>  筛选</p>
            <!-- 搜索和选择区域 -->
            <div class="select">
                 <div class="search">
                 <el-input v-model="input"  placeholder="输入医生姓名搜索" /><el-button @click="handleSearch()" style="height: 40px" icon="Search"  />
                </div>
                <el-select  class="m-2" placeholder="请选择科室" size="large">
                   <el-option
                     
                   />
                   
                 </el-select>

                 <el-select  class="m-2" placeholder="请选择职称" size="large">
                   <el-option
                   />
                 </el-select>
                 
                 <el-button @click="handleSx()" class="selectBtn"  type="primary">筛选</el-button>
            </div>
        </div>
      </el-header>

      <!-- 列表 -->
      <el-main>
        <p><el-icon><Menu /></el-icon>  医生列表</p>

        <!-- 表格 -->
        <el-table :data="tableData" stripe>
          
        <el-table-column prop="RYXM" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="RYXB" label="人员性别" align="center">
        </el-table-column>
        <el-table-column prop="RYLXDH" label="人员联系电话" align="center" width="150">
        </el-table-column>
        <el-table-column prop="RYSFZH" label="人员身份证号" align="center" width="180">
        </el-table-column>
        <el-table-column prop="RYZC" label="人员职称" align="center">
        </el-table-column>
        <el-table-column prop="KSID" label="所属科室" align="center">
        </el-table-column>
        <el-table-column label="操作" fixed="right" align="center" width="300">
            <el-button type="primary" size="small" @click="handleDoctor()">医生资料</el-button>
            <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-popconfirm title="确定删除当前医生信息？">
                      <template #reference>
                        <el-button style="width: 50px;">删除</el-button>
                      </template>
                    </el-popconfirm>
        </el-table-column>


        </el-table>
  

        <div class="tableLast" style="margin-top: 20px">
            <el-button type="success" size="large" @click="handleAdd()" style="margin-top: 13px;">增加科室</el-button>
                  <el-popconfirm title="确定批量删除？">
                      <template #reference>
                        <el-button style="margin-top: 20px">批量删除</el-button>
                      </template>
                    </el-popconfirm>
          <p>共10页/100条数据</p>
           <el-pagination background layout="prev, pager, next" :total="1000" />
        </div>
    



      </el-main>
    </el-container>
</template>

<script setup>
import { ref } from 'vue'
import router from '../router';
//表格插件
import { ElTable } from 'element-plus'

const input = ref('')
//查询医生
const handleSearch = () => {

}

//筛选
const handleSx = () => {

}

//医生资料
const handleDoctor = () => {
    router.push('/DoctorZL')
}
//编辑
const handleEdit = () => {

}
//删除
const remove = () => {

}
//增加科室
const handleAdd = () => {

}

//批量删除
const toggleSelection = () => {

}


//假数据
const tableData = ref([
  {
    RYXM: '张三',
    RYXB: '男',
    RYLXDH:'15012341234',
    RYSFZH:'211321200206123020',
    RYZC:'主治医师',
    KSID:'内科'
  },
  {
    RYXM: '张三',
    RYXB: '男',
    RYLXDH:'15012341234',
    RYSFZH:'211321200206123020',
    RYZC:'主治医师',
    KSID:'内科'
  }, {
    RYXM: '张三',
    RYXB: '男',
    RYLXDH:'15012341234',
    RYSFZH:'211321200206123020',
    RYZC:'主治医师',
    KSID:'内科'
  }, {
    RYXM: '张三',
    RYXB: '男',
    RYLXDH:'15012341234',
    RYSFZH:'211321200206123020',
    RYZC:'主治医师',
    KSID:'内科'
  }, {
    RYXM: '张三',
    RYXB: '男',
    RYLXDH:'15012341234',
    RYSFZH:'211321200206123020',
    RYZC:'主治医师',
    KSID:'内科'
  }, {
    RYXM: '张三',
    RYXB: '男',
    RYLXDH:'15012341234',
    RYSFZH:'211321200206123020',
    RYZC:'主治医师',
    KSID:'内科'
  },
  
])





</script>

<style lang="scss" scoped>
.el-container{
width: 1000px;
}
.el-header{
height: 200px;
width: 1000px;
border: 1px solid #ccc;
}
.el-header p{
    height: 60px;
    line-height: 60px;
    background: #ccc;
    border-bottom: 1px solid #abaaaa;
}
.el-main{
    width: 1000px;
    border: 1px solid #ccc;
}
.select{
    display: flex;
    justify-content:center
}
.search{
    display: flex;
}
.m-2{
    margin-left: 20px;
}
.iconSearch{
    margin-top: 10px;
    width: 30px;
}
.selectBtn{
    margin-left: 20px;
    margin-top: 3px;
}

// 列表样式
.el-main{
width: 1000px;
}
.el-main p{
    height: 60px;
    line-height: 60px;
    background: #ccc;
    border-bottom: 1px solid #abaaaa;
}
.tableLast{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 60px;
}


.tableLast p{
   width: 200px;
    background: none;
    border: none;
   margin-top: 1px;
}
</style>