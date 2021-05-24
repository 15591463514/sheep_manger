<template>
    <div id = "bodypage">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/homePage' }"><span id = "mainpage">主页</span></el-breadcrumb-item>
            <el-breadcrumb-item><span>羊群管理</span></el-breadcrumb-item>
            <el-breadcrumb-item><span>羊只信息</span></el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 搜索页 -->
        <el-dialog
        title="请输入检索信息"
        :visible.sync="dialogVisible[0].searchPage"
        width="450px"
        :before-close="handleClose">
        <el-form :model="tableData[0]">
            <el-form-item label="编号" >
                <el-input type="text" autocomplete="off" v-model="tableData[0].code"></el-input>
            </el-form-item>
            <el-form-item label="户主">
                <el-input type="text" autocomplete="off" v-model="tableData[0].master"></el-input>
            </el-form-item>
            <el-form-item label="个体号">
                <el-input type="text" autocomplete="off" v-model="tableData[0].individualNumber"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible[0].searchPage = false">取 消</el-button>
            <el-button type="success" @click="dialogVisible[0].searchPage = false">确 定</el-button>
        </span>
        </el-dialog>
        <!-- 查看与编辑 -->
        <el-dialog
                title="敏盖白绒山羊卡片"
                :visible.sync="dialogVisible[2].checkPage"
                width="1300px"
                :before-close="handleClose">
            <div>
                <template> 
                    <el-form inline :model="row">
                        <el-form-item label="编号:" label-width="190px">
                            <el-input type="number" autocomplete="off" v-model="row.Herdsmanname" size="mini"></el-input>
                        </el-form-item>
                        <el-form-item label="园区/羊场:" label-width="190px">
                            <el-input type="text" autocomplete="off" v-model="row.Herdsmanname" size="mini"></el-input>
                        </el-form-item>
                        <el-form-item label="户主:" label-width="170px">
                            <el-input type="text" autocomplete="off" v-model="row.Herdsmanname" size="mini"></el-input>
                        </el-form-item>
                        <el-table :data="tableData" border>
                            <el-table-column label="基本情况" align="center">
                                <template slot-scope="scope">
                                    <el-form-item label="个体号:" label-width="80px">
                                        <el-input type="text" style="width: 80px;" v-model="row.Herdsmanname" size="mini"></el-input>
                                    </el-form-item>
                                    <el-form-item label="品种:" label-width="80px">
                                        <el-input type="text" style="width: 80px;" v-model="row.Herdsmanname" size="mini"></el-input>
                                    </el-form-item>
                                    <el-form-item label="性别:" label-width="80px">
                                        <el-input type="text" style="width: 80px;" v-model="row.Herdsmanname" size="mini"></el-input>
                                    </el-form-item>
                                    <el-form-item label="出生日期:" label-width="80px">
                                        <el-input type="text" style="width: 80px;" v-model="row.Herdsmanname" size="mini"></el-input>
                                    </el-form-item>
                                    <el-form-item label="初生重:" label-width="80px">
                                        <el-input type="text" style="width: 80px;" v-model="row.Herdsmanname" size="mini"></el-input>
                                    </el-form-item>
                                    <el-form-item label="断奶重:" label-width="80px">
                                        <el-input type="text" style="width: 80px;" v-model="row.Herdsmanname" size="mini"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column label="系谱档案" align="center">
                                <template slot-scope="scope">
                                    <div id="div1">
                                        <el-form-item label="个体号:" label-width="60px">
                                            <el-input type="text" style="width: 30px;" v-model="row.Herdsmanname" size="mini"></el-input>
                                        </el-form-item>
                                    </div>
                                    <div id="div1">
                                        <el-form-item label="父号:" label-width="50px">
                                            <el-input type="text" style="width: 50px;" v-model="row.Herdsmanname" size="mini"></el-input>
                                        </el-form-item>
                                        <el-form-item label="母号:" label-width="50px">
                                            <el-input type="text" style="width: 50px;" v-model="row.Herdsmanname" size="mini"></el-input>
                                        </el-form-item>
                                    </div>
                                    <div id="div2">
                                        <el-form-item label="祖父号:" label-width="80px">
                                            <el-input type="text" style="width: 50px;" v-model="row.Herdsmanname" size="mini"></el-input>
                                        </el-form-item>
                                        <el-form-item label="祖母号:" label-width="80px">
                                            <el-input type="text" style="width: 50px;" v-model="row.Herdsmanname" size="mini"></el-input>
                                        </el-form-item>
                                        <el-form-item label="外祖父号:" label-width="80px">
                                            <el-input type="text" style="width: 50px;" v-model="row.Herdsmanname" size="mini"></el-input>
                                        </el-form-item>
                                        <el-form-item label="外祖母号:" label-width="80px">
                                            <el-input type="text" style="width: 50px;" v-model="row.Herdsmanname" size="mini"></el-input>
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
                                        <el-input v-model="row.Herdsmanname"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column label="体高" align="center">
                                <template slot-scope="scope">
                                    <el-form-item>
                                        <el-input v-model="row.Herdsmanname"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column label="体长" align="center">
                                <template slot-scope="scope">
                                    <el-form-item>
                                        <el-input v-model="row.Herdsmanname"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column label="胸围" align="center">
                                <template slot-scope="scope">
                                    <el-form-item>
                                        <el-input v-model="row.Herdsmanname"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column label="体重" align="center">
                                <template slot-scope="scope">
                                    <el-form-item>
                                        <el-input v-model="row.Herdsmanname"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column label="绒长度" align="center">
                                <template slot-scope="scope">
                                    <el-form-item>
                                        <el-input v-model="row.Herdsmanname"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column label="绒细度" align="center">
                                <template slot-scope="scope">
                                    <el-form-item>
                                        <el-input v-model="row.Herdsmanname"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column label="产绒量" align="center">
                                <template slot-scope="scope">
                                    <el-form-item>
                                        <el-input v-model="row.Herdsmanname"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column label="等级" align="center">
                                <template slot-scope="scope">
                                    <el-form-item>
                                        <el-input v-model="row.Herdsmanname"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column label="备注" align="center">
                                <template slot-scope="scope">
                                    <el-form-item>
                                        <el-input v-model="row.Herdsmanname"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-form>
                </template>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button id = "checkPageButton" type="success" @click="dialogVisible[2].checkPage = false">修 改</el-button>
                <el-button type="success" @click="dialogVisible[2].checkPage = false">关 闭</el-button>
            </span>
        </el-dialog>
        <!-- 表格区 -->
        <h2 style="margin:10px 0 0 20px;">敏盖白绒山羊信息表</h2>
        <template>
            <el-button @click="dialogVisible[0].searchPage = true" round type="success" slot="append" icon="el-icon-search" style="margin: 10px 0 10px 20px;">搜索</el-button>
            <el-button @click="sheep_InfoUp" round type="success" slot="append" icon="el-icon-edit" style="margin: 10px 0 10px 10px;">新增</el-button>
        </template>
        <el-table :data="tableData" border stripe @row-click="getDetails">
            <el-table-column type="selection" width="35"></el-table-column>
            <el-table-column width="30px"><template slot-scope="scope">{{scope.$index+1}}</template></el-table-column>
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="备注:">
                            <span>{{ props.row.Remarks }}</span>
                        </el-form-item>
                        <el-form-item label="编号:">
                            <span>{{ props.row.code }}</span>
                        </el-form-item>
                        <el-form-item label="园区/羊场:">
                            <span>{{ props.row.garden }}</span>
                        </el-form-item>
                        <el-form-item label="户主:">
                            <span>{{ props.row.master }}</span>
                        </el-form-item>
                    </el-form>
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="个体号:">
                            <span>{{ props.row.individualNumber }}</span>
                            </el-form-item>
                        <el-form-item label="品种:">
                            <span>{{ props.row.variety }}</span>
                        </el-form-item>
                        <el-form-item label="性别:">
                            <span>{{ props.row.sex }}</span>
                        </el-form-item>
                        <el-form-item label="出生日期:">
                            <span>{{ props.row.birthDate }}</span>
                        </el-form-item>
                    </el-form>
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="年龄:">
                            <span>{{ props.row.theAge }}</span>
                        </el-form-item>
                        <el-form-item label="级别:">
                            <span>{{ props.row.theLevel }}</span>
                        </el-form-item>
                        <el-form-item label="初生重:">
                            <span>{{ props.row.birthWeight }}</span>
                        </el-form-item>
                        <el-form-item label="断奶重:">
                            <span>{{ props.row.weaningWeight }}</span>
                        </el-form-item>
                    </el-form>
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="父号:">
                            <span>{{ props.row.fatherNumber }}</span>
                        </el-form-item>
                        <el-form-item label="母号:">
                            <span>{{ props.row.motherNumber }}</span>
                        </el-form-item>
                        <el-form-item label="祖父号:">
                            <span>{{ props.row.grandfatherNumber }}</span>
                        </el-form-item>
                        <el-form-item label="祖母号">
                            <span>{{ props.row.grandmotherNumber }}</span>
                        </el-form-item>
                    </el-form>
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="外祖父号:">
                            <span>{{ props.row.maternalGrandfatherNumber }}</span>
                        </el-form-item>
                        <el-form-item label="外祖母号:">
                            <span>{{ props.row.maternalGrandmotherNumber }}</span>
                        </el-form-item>
                        <el-form-item label="种羊照片:">
                            <span>{{ props.row.sheepPicture }}</span>
                        </el-form-item>
                    </el-form>
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="年度:">
                            <span>{{ props.row.theYear }}</span>
                        </el-form-item>
                        <el-form-item label="体高:">
                            <span>{{ props.row.theHeigth }}</span>
                        </el-form-item>
                        <el-form-item label="体长:">
                            <span>{{ props.row.theLength }}</span>
                        </el-form-item>
                        <el-form-item label="胸围">
                            <span>{{ props.row.chest }}</span>
                        </el-form-item>
                    </el-form>
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="体重:">
                            <span>{{ props.row.weight }}</span>
                        </el-form-item>
                        <el-form-item label="绒长度:">
                            <span>{{ props.row.woolLength }}</span>
                        </el-form-item>
                        <el-form-item label="绒细度:">
                            <span>{{ props.row.woolThickness }}</span>
                        </el-form-item>
                        <el-form-item label="产绒量">
                            <span>{{ props.row.cashmereYield }}</span>
                        </el-form-item>
                    </el-form>
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="等级:">
                            <span>{{ props.row.level }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column prop="code" label="编号" align="center"></el-table-column>
            <el-table-column prop="garden" label="园区/羊场" align="center"></el-table-column>
            <el-table-column prop="master" label="户主" align="center"></el-table-column>
            <el-table-column label="基本情况" align="center">
                <el-table-column prop="individualNumber" label="个体号" align="center"></el-table-column>
                <el-table-column prop="variety" label="品种" align="center"></el-table-column>
                <el-table-column prop="sex" label="性别" align="center"></el-table-column>
                <el-table-column prop="birthDate" label="出生日期" align="center"></el-table-column>
                <el-table-column prop="theAge" label="年龄" align="center"></el-table-column>
                <el-table-column prop="theLevel" label="级别" align="center"></el-table-column>
                <el-table-column prop="birthWeight" label="初生重" align="center"></el-table-column>
                <el-table-column prop="weaningWeight" label="断奶重" align="center"></el-table-column>
            </el-table-column>
            <el-table-column label="系谱档案" align="center">
                <el-table-column prop="fatherNumber" label="父号" align="center"></el-table-column>
                <el-table-column prop="motherNumber" label="母号" align="center"></el-table-column>
                <el-table-column prop="grandfatherNumber" label="祖父号" align="center"></el-table-column>
                <el-table-column prop="grandmotherNumber" label="祖母号" align="center"></el-table-column>
                <el-table-column prop="maternalGrandfatherNumber" label="外祖父号" align="center"></el-table-column>
                <el-table-column prop="maternalGrandmotherNumber" label="外祖母号" align="center"></el-table-column>
            </el-table-column>
            <el-table-column label="种羊照片" align="center">
            </el-table-column>
            <el-table-column label="生长发育状况及性能测定" align="center">
                <el-table-column prop="theYear" label="年度" align="center"></el-table-column>
                <el-table-column prop="theHeigth" label="体高" align="center"></el-table-column>
                <el-table-column prop="theLength" label="体长" align="center"></el-table-column>
                <el-table-column prop="chest" label="胸围" align="center"></el-table-column>
                <el-table-column prop="weight" label="体重" align="center"></el-table-column>
                <el-table-column prop="woolLength" label="绒长度" align="center"></el-table-column>
                <el-table-column prop="woolThickness" label="绒细度" align="center"></el-table-column>
                <el-table-column prop="cashmereYield" label="产绒量" align="center"></el-table-column>
                <el-table-column prop="level" label="等级" align="center"></el-table-column>
            </el-table-column>
            <el-table-column prop="Remarks" label="备注" align="center"></el-table-column>
            <el-table-column prop="Operate" label="操作" align="center" fixed="right" width="140">
                <template slot-scope="scope">
                    <el-button-group>
                        <el-tooltip class="item" effect="dark" content="查看编辑" placement="top-start" :enterable="false">
                           <el-button @click="dialogVisible[2].checkPage = true" type="success" icon="el-icon-search"></el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="删除此行" placement="top-end" :enterable="false">
                                <el-button type="success" icon="el-icon-delete" @click="delteleitem(scope)"></el-button>
                        </el-tooltip>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
   export default{
        mounted:function(){
                this.totalnum();
            },
        data() {
            return {
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
                    sheepPicture:null,
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
                inputValue:{
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
                },
                inputValue1:{
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
                },
                dialogVisible:[
                    {searchPage:false},
                    {addPage:false},
                    {checkPage:false},
                ],
                queryInfo:{
                    query:null,
                    pagenum: 1,//当前页码
                    pagesize: 1,//当前每页显示的数据数
                },
                userlist:[],
                total:0,//当前共有数据量
                //储存当前行的信息
                row:{code:null,
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
                },
            };
        },
        methods: {
            //删除当前行数据
            delteleitem(scope) {
                console.log(scope)
                const index = scope.$index;
                this.$messagebox.confirm('此操作将永久删除该信息, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error'
                }).then(() => {
                this.tableData.splice(index,1)
                this.theHope()
                this.totalnum()
                this.$message({type: 'success',message: '删除成功!'});
                }).catch(() => {
                this.$message({type: 'info',message: '已取消删除'});          
                });
            },
            handleClose(done) {
                this.$messagebox.confirm('确认关闭？')
                .then(_ => {done();})
                .catch(_ => {});
            },
            add(){    
                this.inputValue = JSON.parse(JSON.stringify(this.inputValue1))//对inputValue1的值进行转义并赋值给inputValue,避免内存冲突
                for(var i in this.inputValue){
                if(this.inputValue1[i] !== null){
                    this.tableData.push(this.inputValue);
                    this.dialogVisible[1].addPage = false;
                    this.inputValue1[i] = null;
                    this.totalnum();
                    return
                };}
                if(this.inputValue[i] == null){   
                    alert("请输入至少一项数据!!!")
                    this.dialogVisible[1].addPage = true;
                }
            },
            getDetails(row){this.row=row},//获取表格当前行的数据
            theHope(){
                if(this.tableData.length == 0){
                    this.row = {Herdsmanname: "请叫我:'全村的希望!'/(°ω°)/"}
                    this.tableData.push(this.row);
                    alert('别删啦,再删没有啦!!!')
                }
            },
            sheep_InfoUp(){
                this.$router.push("/sheep_InfoUp");
            },


            


            //调试函数
            show() {
                console.log(this.tableData);
                console.log(this.index);
            },


            totalnum(){
                this.total = this.tableData.length;
            },
            //改变每页显示的数据数
            handleSizeChange(newSize){
                this.queryInfo.pagesize = newSize
            },
            //改变页码值
            handleCurrentChange(newPage){
                console.log(newPage)
            },
        },
    }
</script>

<style Lang="less" scoped>
*{
    color:#4b9100;
}
#checkPageButton{
    margin-right: 40px;
    width: 100px;
    height: 42px;
}
#checkPageButton + button{
    width: 100px;
    height: 42px;
}
.demo-table-expand{
    font-size: 10px;
}
.el-form>>>.el-form-item__label{
    color: #99a9bf;
    line-height: 10px;
}
.demo-table-expand .el-form-item{
    margin-right: 0;
    margin-bottom: 0;
    width: 12%;
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
</style>