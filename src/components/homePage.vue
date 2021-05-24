<template>
    <div id = "bodypage">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/homePage' }"><span>主页</span></el-breadcrumb-item>
        </el-breadcrumb>
        <div id = "topCard">
            <el-row :gutter="25">
                <el-col :span="8"><el-card><i class="fa fa-bar-chart fa-fw"></i>羊只数量<br><span>100</span>&nbsp;只</el-card></el-col>
                <el-col :span="8"><el-card><i class="fa fa-eyedropper fa-fw"></i>接种数量<br><span>12</span>&nbsp;只</el-card></el-col>
                <el-col :span="8"><el-card><i class="fa fa-cubes fa-fw"></i>饲料库存<br><span>5</span>&nbsp;吨</el-card></el-col>
            </el-row>
            <el-row :gutter="25">
                <el-col :span="8"><el-card><i class="fa fa-user-o fa-fw"></i>用户数量<br><span>15</span>&nbsp;名</el-card></el-col>
                <el-col :span="8"><el-card><i class="fa fa-user fa-fw"></i>在线用户<br><span>8</span>&nbsp;名</el-card></el-col>
                <el-col :span="8"><el-card><i class="fa fa-yen fa-fw"></i>收入支出<br><span>10000</span>&nbsp;元</el-card></el-col>
            </el-row>
        </div>
        <div id="body">
            <h2>后续内容开发中......</h2>
        </div>
        
    </div>

</template>

<script>
export default{


};

</script>

<style Lang="less" scoped>
*{
    color:#4b9100;
}
.el-card{
    color:#4b9100;
}
.el-breadcrumb span{
    color: #4b9100;
    cursor: pointer;
    font-weight: bold;
}
.el-card{
    height: 100px;
    margin-top: 30px;
}
#topCard{
    margin:0 20px 0 20px;
    box-shadow: 0 0 1px rgba(128, 128, 128, 0.185) !important;
}
#topCard span{
    display: inline-block;
    margin: 5px 0 0 20px;
    font-size: 25px;
    font-weight: bold;
}
#body{
    height:500px;
    box-shadow: 0px 0px 3px rgba(128, 128, 128, 0.356);
    margin:20px;
    margin-top: 30px;
    overflow: hidden;
    padding: 30px;
    background-color: #FFF;
}
</style>
</style>