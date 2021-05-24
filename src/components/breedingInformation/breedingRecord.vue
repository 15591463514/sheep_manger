<template>
    <div id = "bodypage">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/homePage' }"><span id = "mainpage">主页</span></el-breadcrumb-item>
            <el-breadcrumb-item>配种信息</el-breadcrumb-item>
            <el-breadcrumb-item><span>配种记录</span></el-breadcrumb-item>
        </el-breadcrumb>
        <div>
            <!-- 搜索页 -->
            <el-dialog
                title="请输入检索信息"
                :visible.sync="dialogVisible[0].searchPage"
                width="450px"
                :before-close="handleClose">
                <el-form :model="tableData[0]">
                    <el-form-item label="母羊耳号" >
                        <el-input type="number" autocomplete="off" v-model="tableData[0].Eweearnumber"></el-input>
                    </el-form-item>
                    <el-form-item label="日期">
                        <el-input type="date" autocomplete="off" v-model="tableData[0].Date1"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible[0].searchPage = false">取 消</el-button>
                    <el-button type="success" @click="handleFindBreedInfo">确 定</el-button>
                </span>
            </el-dialog>
            <!-- 新增页 -->
            <el-dialog
                title="敏盖“绒山羊研究中心配种记录登记表"
                :visible.sync="dialogVisible[1].addPage"
                width="1010px"
                :before-close="handleClose">
                <el-form :inline="true" :model="inputValue1">
                    <el-form-item label="牧户姓名" label-width="90px">
                        <el-input type="text" v-model="inputValue1.Herdsmanname"></el-input>
                    </el-form-item>
                    <el-form-item label="母羊耳号" label-width="90px">
                            <el-input type="number" v-model="inputValue1.Eweearnumber"></el-input>
                    </el-form-item>
                    <el-form-item label="放栓时间" label-width="90px">
                            <el-input  type="datetime-local" v-model="inputValue1.Releasetime"></el-input>
                    </el-form-item>
                </el-form>

                <el-form :inline="true" :model="inputValue1" class="demo-form-inline" ref="form">
                    <el-form-item label="PMSG" label-width="89px">
                        <el-input  type="datetime-local" v-model="inputValue1.PMSG"></el-input>
                    </el-form-item>
                    <el-form-item label="PG" label-width="86px">
                        <el-input  type="datetime-local" v-model="inputValue1.PG"></el-input>
                    </el-form-item>
                    <el-form-item label="撤栓时间" label-width="87px">
                        <el-input  type="datetime-local" v-model="inputValue1.Withdrawtime"></el-input>
                    </el-form-item>
                </el-form>

                <el-form :inline="true" :model="inputValue1" class="demo-form-inline" ref="form">
                    <el-form-item label="种公羊耳号" label-width="90px">
                        <el-input type="number" v-model="inputValue1.Bramrnumber"></el-input>
                    </el-form-item>
                    <el-form-item label="采精量" label-width="89px">
                        <el-input placeholder="ml" type="number" v-model="inputValue1.Semenvolume"></el-input>
                    </el-form-item>
                </el-form>

                <el-form :inline="true" :model="inputValue1" class="demo-form-inline" ref="form">
                    <el-form-item label="精液活力" label-width="89px">
                        <el-radio v-model="inputValue1.Semenvitality" label="优">优</el-radio>
                        <el-radio v-model="inputValue1.Semenvitality" label="良">良</el-radio>
                    </el-form-item>
                    <el-form-item label="精液密度" label-width="188px">
                        <el-radio v-model="inputValue1.Semendensity" label="优">优</el-radio>
                        <el-radio v-model="inputValue1.Semendensity" label="良">良</el-radio>
                    </el-form-item>
                    <el-form-item label="稀释倍数" label-width="188px">
                        <el-input type="number" v-model="inputValue1.Dilutionratio"></el-input>
                    </el-form-item>
                </el-form>

                <el-form :inline="true" :model="inputValue1" class="demo-form-inline" ref="form">
                    <el-form-item label="发情鉴定" label-width="90px">
                        <el-input type="date" v-model="inputValue1.Date1"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="数量" type="number" v-model="inputValue1.Number1"></el-input>
                    </el-form-item>
                    <el-form-item label="发情鉴定" label-width="90px">
                        <el-input type="date" v-model="inputValue1.Date2"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="数量" type="number" v-model="inputValue1.Number2"></el-input>
                    </el-form-item>
                </el-form>

                <el-form :inline="true" :model="inputValue1" class="demo-form-inline" ref="form">
                    <el-form-item label="第一次输精" label-width="90px">
                        <el-input placeholder="输精量(ml)" type="number" v-model="inputValue1.Insemination1"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="输精时间" type="date" v-model="inputValue1.Inseminationtime1"></el-input>
                    </el-form-item>
                    <el-form-item label="第二次输精" label-width="90px">
                        <el-input placeholder="输精量(ml)" type="number" v-model="inputValue1.Insemination2"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="输精时间" type="date" v-model="inputValue1.Inseminationtime2"></el-input>
                    </el-form-item>
                </el-form><br><br>

                <el-form :inline="true"  ref="form" :model="inputValue1" size="mini">
                    <el-form-item label="备注" label-width="90px">
                        <el-input type="text" v-model="inputValue1.Remarks"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible[1].addPage = false">取 消</el-button>
                    <el-button type="success" @click="add">确 定</el-button>
                </span>
            </el-dialog>
            <!-- 查看与编辑页 -->
            <el-dialog
                title="敏盖“绒山羊研究中心配种记录登记表"
                :visible.sync="dialogVisible[2].checkPage"
                width="1100px"
                :before-close="handleClose">
                <el-form :inline="true" :model="row">
                    <el-form-item label="牧户姓名" label-width="90px">
                        <el-input type="text" v-model="row.Herdsmanname"></el-input>
                    </el-form-item>
                    <el-form-item label="母羊耳号" label-width="90px">
                            <el-input type="text" v-model="row.Eweearnumber"></el-input>
                    </el-form-item>
                    <el-form-item label="放栓时间" label-width="90px">
                            <el-input  type="text" v-model="row.Releasetime"></el-input>
                    </el-form-item>
                </el-form>

                <el-form :inline="true" :model="row" class="demo-form-inline" ref="form">
                    <el-form-item label="PMSG" label-width="90px">
                        <el-input  type="text" v-model="row.PMSG"></el-input>
                    </el-form-item>
                    <el-form-item label="PG" label-width="90px">
                        <el-input  type="text" v-model="row.PG"></el-input>
                    </el-form-item>
                    <el-form-item label="撤栓时间" label-width="90px">
                        <el-input  type="text" v-model="row.Withdrawtime"></el-input>
                    </el-form-item>
                </el-form>

                <el-form :inline="true" :model="row" class="demo-form-inline" ref="form">
                    <el-form-item label="种公羊耳号" label-width="90px">
                        <el-input type="text" v-model="row.Bramrnumber"></el-input>
                    </el-form-item>
                    <el-form-item label="采精量" label-width="90px">
                        <el-input placeholder="ml" type="text" v-model="row.Semenvolume"></el-input>
                    </el-form-item>
                </el-form>

                <el-form :inline="true" :model="row" class="demo-form-inline" ref="form">
                    <el-form-item label="精液活力" label-width="90px">
                        <el-radio v-model="row.Semenvitality" label="优">优</el-radio>
                        <el-radio v-model="row.Semenvitality" label="良">良</el-radio>
                    </el-form-item>
                    <el-form-item label="精液密度" label-width="192px">
                        <el-radio v-model="row.Semendensity" label="优">优</el-radio>
                        <el-radio v-model="row.Semendensity" label="良">良</el-radio>
                    </el-form-item>
                    <el-form-item label="稀释倍数" label-width="190px">
                        <el-input type="text" v-model="row.Dilutionratio"></el-input>
                    </el-form-item>
                </el-form>

                <el-form :inline="true" :model="row" class="demo-form-inline" ref="form">
                    <el-form-item label="发情鉴定" label-width="90px">
                        <el-input type="text" v-model="row.Date1"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="数量" type="number" v-model="row.Number1"></el-input>
                    </el-form-item>
                    <el-form-item label="发情鉴定" label-width="90px">
                        <el-input type="text" v-model="row.Date2"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="数量" type="text" v-model="row.Number2"></el-input>
                    </el-form-item>
                </el-form>

                <el-form :inline="true" :model="row" class="demo-form-inline" ref="form">
                    <el-form-item label="第一次输精" label-width="90px">
                        <el-input placeholder="输精量(ml)" type="text" v-model="row.Insemination1"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="输精时间" type="text" v-model="row.Inseminationtime1"></el-input>
                    </el-form-item>
                    <el-form-item label="第二次输精" label-width="90px">
                        <el-input placeholder="输精量(ml)" type="text" v-model="row.Insemination2"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="输精时间" type="text" v-model="row.Inseminationtime2"></el-input>
                    </el-form-item>
                </el-form><br><br>

                <el-form :inline="true"  ref="form" :model="row" size="mini">
                    <el-form-item label="备注" label-width="90px">
                        <el-input type="text" v-model="row.Remarks"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer">
                    <el-button id = "checkPageButton" type="danger" @click="dialogVisible[2].checkPage = false">修 改</el-button>
                    <el-button type="success" @click="dialogVisible[2].checkPage = false">关 闭</el-button>
                </span>
            </el-dialog>
            <!-- 表格区 -->
            <h2 style="margin:10px 0 0 20px;">"敏盖"绒山羊研究中心配种记录登记表</h2>
            <template>
                <el-button @click="dialogVisible[0].searchPage = true" round type="success" slot="append" icon="el-icon-search" style="margin: 10px 0 10px 20px;">搜索</el-button>
                <el-button @click="dialogVisible[1].addPage = true" round type="success" slot="append" icon="el-icon-edit" style="margin: 10px 0 10px 10px;">新增</el-button>
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
                            <el-form-item label="牧户姓名:">
                                <span>{{ props.row.Herdsmanname }}</span>
                            </el-form-item>
                            <el-form-item label="母羊耳号:">
                                <span>{{ props.row.Eweearnumber }}</span>
                            </el-form-item>
                            <el-form-item label="放栓时间:">
                                <span>{{ props.row.Releasetime }}</span>
                            </el-form-item>
                        </el-form>
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="PMSG:">
                                <span>{{ props.row.PMSG }}</span>
                                </el-form-item>
                            <el-form-item label="PG:">
                                <span>{{ props.row.PG }}</span>
                            </el-form-item>
                            <el-form-item label="撤栓时间:">
                                <span>{{ props.row.Withdrawtime }}</span>
                            </el-form-item>
                            <el-form-item label="种公羊耳号:">
                                <span>{{ props.row.Bramrnumber }}</span>
                            </el-form-item>
                        </el-form>
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="采精量(ml):">
                                <span>{{ props.row.Semenvolume }}</span>
                            </el-form-item>
                            <el-form-item label="精液活力:">
                                <span>{{ props.row.Semenvitality }}</span>
                            </el-form-item>
                            <el-form-item label="精液密度:">
                                <span>{{ props.row.Semendensity }}</span>
                            </el-form-item>
                            <el-form-item label="稀释倍数:">
                                <span>{{ props.row.Dilutionratio }}</span>
                            </el-form-item>
                        </el-form>
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="日期:">
                                <span>{{ props.row.Date1 }}</span>
                            </el-form-item>
                            <el-form-item label="数量:">
                                <span>{{ props.row.Number1 }}</span>
                            </el-form-item>
                            <el-form-item label="日期:">
                                <span>{{ props.row.Date2 }}</span>
                            </el-form-item>
                            <el-form-item label="数量">
                                <span>{{ props.row.Number2 }}</span>
                            </el-form-item>
                        </el-form>
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="输精量(ml):">
                                <span>{{ props.row.Insemination1 }}</span>
                            </el-form-item>
                            <el-form-item label="输精时间:">
                            <span>{{ props.row.Inseminationtime1 }}</span>
                            </el-form-item>
                            <el-form-item label="输精量(ml):">
                            <span>{{ props.row.Insemination2 }}</span>
                            </el-form-item>
                            <el-form-item label="输精时间:">
                                <span>{{ props.row.Inseminationtime2 }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column prop="Herdsmanname" label="牧户姓名" align="center"></el-table-column>
                <el-table-column prop="Eweearnumber" label="母羊耳号" align="center"></el-table-column>
                <el-table-column prop="Releasetime" label="放栓时间" align="center"></el-table-column>
                <el-table-column prop="PMSG" label="PMSG" align="center"></el-table-column>
                <el-table-column prop="PG" label="PG" align="center"></el-table-column>
                <el-table-column prop="Withdrawtime" label="撤栓时间" align="center"></el-table-column>
                <el-table-column prop="Bramrnumber" label="种公羊耳号" align="center"></el-table-column>
                <el-table-column prop="Semenvolume" label="采精量(ml)" align="center"></el-table-column>
                <el-table-column prop="Semenvitality" label="精液活力" align="center"></el-table-column>
                <el-table-column prop="Semendensity" label="精液密度" align="center"></el-table-column>
                <el-table-column prop="Dilutionratio" label="稀释倍数" align="center"></el-table-column>
                <el-table-column label="发情鉴定" align="center">
                    <el-table-column prop="Date1" label="日期" align="center"></el-table-column>
                    <el-table-column prop="Number1" label="数量" align="center"></el-table-column>
                    <el-table-column prop="Date2" label="日期" align="center"></el-table-column>
                    <el-table-column prop="Number2" label="数量" align="center"></el-table-column>
                </el-table-column>
                <el-table-column label="第一次输精" align="center">
                    <el-table-column prop="Insemination1" label="输精量(ml)" align="center"></el-table-column>
                    <el-table-column prop="Inseminationtime1" label="输精时间" align="center"></el-table-column>
                </el-table-column>
                <el-table-column label="第二次输精" align="center">
                    <el-table-column prop="Insemination2" label="输精量(ml)" align="center"></el-table-column>
                    <el-table-column prop="Inseminationtime2" label="输精时间" align="center"></el-table-column>
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
            <!-- 分页 -->
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryInfo.pagenum"
            :page-sizes="[1, 2, 3, 4]"
            :page-size="queryInfo.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        </div>
    </div>


</template>

<script>
    export default{
        mounted:function(){
                this.totalnum();
            },
        data() {
            return {
                tableData: [
                    {
                        Herdsmanname: '张三',
                        Eweearnumber: '1',
                        Releasetime: '2017.03.29 10:00',
                        PMSG:'2017.04.09 17:00',
                        PG:'2017.03.29 10:00',
                        Withdrawtime:'2017.04.09 17:00',
                        Bramrnumber:'2333',
                        Semenvolume:'1.25',
                        Semenvitality:'优',
                        Semendensity:'优',
                        Dilutionratio:'14',
                        Date1:'4.10',
                        Number1:'9',
                        Date2:'4.11',
                        Number2:'7',
                        Insemination1:'0.3',
                        Inseminationtime1:'4.10',
                        Insemination2:'0.2',
                        Inseminationtime2:'4.11',
                        Remarks:'李四',
                    },
                ],
                inputValue:{
                    Herdsmanname: null,
                    Eweearnumber: null,
                    Releasetime: null,
                    PMSG:null,
                    PG:null,
                    Withdrawtime:null,
                    Bramrnumber:null,
                    Semenvolume:null,
                    Semenvitality:null,
                    Semendensity:null,
                    Dilutionratio:null,
                    Date1:null,
                    Number1:null,
                    Date2:null,
                    Number2:null,
                    Insemination1:null,
                    Inseminationtime1:null,
                    Insemination2:null,
                    Inseminationtime2:null,
                    Remarks:null,
                },
                inputValue1:{
                    Herdsmanname: null,
                    Eweearnumber: null,
                    Releasetime: null,
                    PMSG:null,
                    PG:null,
                    Withdrawtime:null,
                    Bramrnumber:null,
                    Semenvolume:null,
                    Semenvitality:null,
                    Semendensity:null,
                    Dilutionratio:null,
                    Date1:null,
                    Number1:null,
                    Date2:null,
                    Number2:null,
                    Insemination1:null,
                    Inseminationtime1:null,
                    Insemination2:null,
                    Inseminationtime2:null,
                    Remarks:null,
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
                row:{Herdsmanname: null,
                    Eweearnumber: null,
                    Releasetime: null,
                    PMSG:null,
                    PG:null,
                    Withdrawtime:null,
                    Bramrnumber:null,
                    Semenvolume:null,
                    Semenvitality:null,
                    Semendensity:null,
                    Dilutionratio:null,
                    Date1:null,
                    Number1:null,
                    Date2:null,
                    Number2:null,
                    Insemination1:null,
                    Inseminationtime1:null,
                    Insemination2:null,
                    Inseminationtime2:null,
                    Remarks:null,
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
          async handleFindBreedInfo(){
              console.log(this.tableData[0].Eweearnumber,this.tableData[0].Date1)
              let {data} = await this.$axios({
                method: 'post',
                url: '/breedEwesInfoFind',
                data: {
                  eweEarNum : this.tableData[0].Eweearnumber,
                  date: this.tableData[0].Date1.replaceAll("-",".")
                }
              })
            console.log(data);
          }
        },
      async created(){
          let {data} = await this.$axios({
            method: 'get',
            url: '/breedEwesInfo',
          })
        console.log(data);
      }
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
    width: 90px;
    color: #000000;
}
.demo-table-expand .el-form-item{
    margin-right: 0;
    margin-bottom: 0;
    width: 18%;
}
</style>
