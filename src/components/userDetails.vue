<template>
    <div id = "bodypage">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/homePage' }"><span id = "mainpage">主页</span></el-breadcrumb-item>
            <el-breadcrumb-item>个人信息</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
            <table>
                <tr>
                    <th>用户名</th>
                    <td>fff</td>
                </tr>
                <tr>
                    <th>电话</th>
                    <td>fff</td>
                </tr>
                <tr>
                    <th>权限</th>
                    <td>fff</td>
                </tr>
                <tr>
                    <th>住址</th>
                    <td>fff</td>
                </tr>
                <tr>
                    <th>邮箱</th>
                    <td>fff</td>
                </tr>
            </table>
        </div>
    </div>
</template>
  
<script>
export default {

}
</script>
  
<style Lang="less" scoped>
  tr th{
      padding:0 200px 0 50px;
  }
</style>
  