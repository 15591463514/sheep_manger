<template>
    <div id = "bodypage">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/homePage' }"><span id = "mainpage">主页</span></el-breadcrumb-item>
            <el-breadcrumb-item>羊群管理</el-breadcrumb-item>
            <el-breadcrumb-item><span>羊只信息</span></el-breadcrumb-item>
            <el-breadcrumb-item><span>新增信息</span></el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片区 -->
        <div>
            <h2 style="text-align: center;margin-top: 20px;">敏盖白绒山羊卡片</h2>
            <template> 
                <el-form inline :model="tableData[0]">
                    <el-form-item label="编号:" label-width="190px">
                        <el-input type="number" autocomplete="off" v-model="tableData[0].code" size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="园区/羊场:" label-width="190px">
                        <el-input type="text" autocomplete="off" size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="户主:" label-width="170px">
                        <el-input type="text" autocomplete="off" size="mini"></el-input>
                    </el-form-item>
                    <el-table :data="tableData" border>
                        <el-table-column label="基本情况" align="center">
                            <template slot-scope="scope">
                                <el-form-item label="个体号:" label-width="80px">
                                    <el-input type="text" style="width: 80px;" size="mini"></el-input>
                                </el-form-item>
                                <el-form-item label="品种:" label-width="80px">
                                    <el-input type="text" style="width: 80px;" size="mini"></el-input>
                                </el-form-item>
                                <el-form-item label="性别:" label-width="80px">
                                    <el-input type="text" style="width: 80px;" size="mini"></el-input>
                                </el-form-item>
                                <el-form-item label="出生日期:" label-width="80px">
                                    <el-input type="text" style="width: 80px;" size="mini"></el-input>
                                </el-form-item>
                                <el-form-item label="初生重:" label-width="80px">
                                    <el-input type="text" style="width: 80px;" size="mini"></el-input>
                                </el-form-item>
                                <el-form-item label="断奶重:" label-width="80px">
                                    <el-input type="text" style="width: 80px;" size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column label="系谱档案" align="center">
                            <template slot-scope="scope">
                                <div id="div1">
                                    <el-form-item label="个体号:" label-width="60px">
                                        <el-input type="text" style="width: 30px;" size="mini"></el-input>
                                    </el-form-item>
                                </div>
                                <div id="div1">
                                    <el-form-item label="父号:" label-width="50px">
                                        <el-input type="text" style="width: 50px;" size="mini"></el-input>
                                    </el-form-item>
                                    <el-form-item label="母号:" label-width="50px">
                                        <el-input type="text" style="width: 50px;" size="mini"></el-input>
                                    </el-form-item>
                                </div>
                                <div id="div2">
                                    <el-form-item label="祖父号:" label-width="80px">
                                        <el-input type="text" style="width: 50px;" size="mini"></el-input>
                                    </el-form-item>
                                    <el-form-item label="祖母号:" label-width="80px">
                                        <el-input type="text" style="width: 50px;" size="mini"></el-input>
                                    </el-form-item>
                                    <el-form-item label="外祖父号:" label-width="80px">
                                        <el-input type="text" style="width: 50px;" size="mini"></el-input>
                                    </el-form-item>
                                    <el-form-item label="外祖母号:" label-width="80px">
                                        <el-input type="text" style="width: 50px;" size="mini"></el-input>
                                    </el-form-item>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="种羊照片" align="center">
                            <el-upload class="upload-demo" drag multiple list-type="picture" action="https://jsonplaceholder.typicode.com/posts/">
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过5M</div>
                            </el-upload>
                        </el-table-column>
                    </el-table>
                    <el-table :data="tableData" border>
                        <el-table-column label="年度" align="center">
                            <template slot-scope="scope">
                                <el-form-item>
                                    <el-input></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column label="体高" align="center">
                            <template slot-scope="scope">
                                <el-form-item>
                                    <el-input></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column label="体长" align="center">
                            <template slot-scope="scope">
                                <el-form-item>
                                    <el-input></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column label="胸围" align="center">
                            <template slot-scope="scope">
                                <el-form-item>
                                    <el-input></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column label="体重" align="center">
                            <template slot-scope="scope">
                                <el-form-item>
                                    <el-input></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column label="绒长度" align="center">
                            <template slot-scope="scope">
                                <el-form-item>
                                    <el-input></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column label="绒细度" align="center">
                            <template slot-scope="scope">
                                <el-form-item>
                                    <el-input></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column label="产绒量" align="center">
                            <template slot-scope="scope">
                                <el-form-item>
                                    <el-input></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column label="等级" align="center">
                            <template slot-scope="scope">
                                <el-form-item>
                                    <el-input></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column label="备注" align="center">
                            <template slot-scope="scope">
                                <el-form-item>
                                    <el-input></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-tooltip class="item" effect="dark" content="保存" placement="top" :enterable="false">
                        <el-button @click="save" type="success" icon="el-icon-document" id="theUp"></el-button>
                    </el-tooltip>
                </el-form>
            </template>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                tableData:[{
                    code:null,
                    garden:null,
                    master:null,
                    individualNumber:null,
                    variety:null,
                    sex:null,
                    birthDate:null,
                    theAge:null,
                    theLevel:null,
                    birthWeight:null,
                    weaningWeight:null,
                    fatherNumber:null,
                    motherNumber:null,
                    grandfatherNumber:null,
                    grandmotherNumber:null,
                    maternalGrandfatherNumber:null,
                    maternalGrandmotherNumber:null,
                    theYear:null,
                    theHeigth:null,
                    theLength:null,
                    chest:null,
                    weight:null,
                    woolLength:null,
                    woolThickness:null,
                    cashmereYield:null,
                    level:null,
                    remark:null
                }],
                dialogVisible:[
                    {searchPage:false},
                    {addPage:false},
                    {checkPage:false},
                ],
            }
        },
        methods:{
            handleClose(done) {
                this.$messagebox.confirm('确认关闭？')
                .then(_ => {done();})
                .catch(_ => {});
            },
            save() {
                this.$messagebox.confirm('该信息将被保存, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'primary'
                }).then(() => {
                this.$message({type: 'success',message: '保存成功!'});
                this.$router.push("/sheep_Info");
                }).catch(() => {
                this.$message({type: 'info',message: '已取消保存'});          
                });
            },
        }
    }
</script>

<style Lang = "less" scoped>
*{
    color:#4b9100;
}
.el-form-item>>>.el-input__inner{
    border: none;
    border-bottom: 1px solid rgb(184, 183, 183);
    border-radius: 0px;
    background-color: transparent;
}

#div1{
    width:120px;
    display: inline-block;
    vertical-align: middle;
}
#div1 .el-form-item{
    padding:15px 0 !important;
}
#div2{
    width:150px;
    display: inline-block;
    vertical-align: middle;
}
#theUp{
    height:45px;
    width: 90px;
    position: relative;
    left:85%;
    margin: 20px;
}
</style>