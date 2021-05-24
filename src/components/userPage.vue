<template>
        <div id = "bodypage">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/homePage' }"><span id = "mainpage">主页</span></el-breadcrumb-item>
                <el-breadcrumb-item><span>用户中心</span></el-breadcrumb-item>
            </el-breadcrumb>
            <div>
                <!-- 搜索页 -->
                <el-dialog
                title="请输入检索信息"
                :visible.sync="dialogVisible[0].searchPage"
                width="450px"
                :before-close="handleClose">
                <el-form :model="user[0]">
                    <el-form-item label="用户名" >
                        <el-input type="text" autocomplete="off" v-model="user[0].username"></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                        <el-input type="text" autocomplete="off" v-model="user[0].tel"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible[0].searchPage = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible[0].searchPage = false">确 定</el-button>
                </span>
                </el-dialog>
                <!-- 新增页 -->
                <el-dialog
                title="敏盖“绒山羊研究中心配种记录登记表"
                :visible.sync="dialogVisible[1].addPage"
                width="450px"
                :before-close="handleClose">
                <el-form :inline="true" :model="inputValue1">
                    <el-form-item label="用户名" label-width="70px">
                        <el-input type="text" v-model="inputValue1.username" style="width:280px"></el-input>
                    </el-form-item>
                    <el-form-item label="权限" label-width="70px">
                        <el-radio v-model="inputValue1.power" label="管理员">管理员</el-radio>
                        <el-radio v-model="inputValue1.power" label="普通用户">普通用户</el-radio>
                    </el-form-item>
                    <el-form-item label="电话" label-width="70px">
                            <el-input type="text" v-model="inputValue1.tel" style="width:280px"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" label-width="70px">
                            <el-input  type="email" v-model="inputValue1.email" style="width:280px"></el-input>
                    </el-form-item>
                    <el-form-item label="住址" label-width="70px">
                        <el-input  type="text" v-model="inputValue1.address" style="width:280px"></el-input>
                    </el-form-item>
                    <el-form-item label="羊只" label-width="70px">
                        <el-input  type="number" v-model="inputValue1.sheepNumber" style="width:280px"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible[1].addPage = false">取 消</el-button>
                    <el-button type="success" @click="add">确 定</el-button>
                </span>
            </el-dialog>
                <!-- 表格区 -->
                <h2 style="margin:10px 0 0 20px;">用户登记表</h2>
                <template>
                    <el-button @click="dialogVisible[0].searchPage = true"  round type="success" slot="append" icon="el-icon-search" style="margin: 10px 0 10px 20px;">搜索</el-button>
                    <el-button @click="dialogVisible[1].addPage = true"  round type="success" slot="append" icon="el-icon-edit" style="margin: 10px 0 10px 10px;">新增</el-button>
                </template>
                <el-table :data="user" border stripe>
                    <el-table-column type="selection" width="35"></el-table-column>
                    <el-table-column width="30px"><template slot-scope="scope">{{scope.$index+1}}</template></el-table-column>
                    <el-table-column prop="username" label="用户名" align="center"></el-table-column>
                    <el-table-column prop="power" label="权限" align="center"></el-table-column>
                    <el-table-column prop="tel" label="电话" align="center"></el-table-column>
                    <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
                    <el-table-column prop="address" label="住址" align="center"></el-table-column>
                    <el-table-column prop="sheepNumber" label="羊只" align="center"></el-table-column>
                    <el-table-column label="操作" align="center" width="140px">
                        <template slot-scope="scope">
                            <el-button-group>
                                <el-tooltip class="item" effect="dark" content="冻结此用户" placement="top-start" :enterable="false">
                                   <el-button type="success" icon="el-icon-warning-outline"></el-button>
                                </el-tooltip>
                                <el-tooltip class="item" effect="dark" content="删除此用户" placement="top-end" :enterable="false">
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
        data(){
            return{
                user:[
                    {
                        username:'张三',
                        power:'管理员',
                        tel:18888888888,
                        email:'88888@88.com',
                        address:'火星',
                        sheepNumber:10000,
                    },
                ],
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
                total:0,
                inputValue:{
                    username:null,
                    power:null,
                    tel:null,
                    email:null,
                    address:null,
                    sheepNumber:null,
                },
                inputValue1:{
                    username:null,
                    power:null,
                    tel:null,
                    email:null,
                    address:null,
                    sheepNumber:null,
                },
                row:{
                    username:null,
                    power:null,
                    tel:null,
                    email:null,
                    address:null,
                    sheepNumber:null,
                },
            }
        },
        methods:{
            delteleitem(scope) {
                console.log(scope)
                const index = scope.$index;
                this.$messagebox.confirm('此操作将永久删除该信息, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error'
                }).then(() => {
                this.user.splice(index,1)
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
                    this.user.push(this.inputValue);
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
            theHope(){
                if(this.user.length == 0){
                    this.row = {username: "请叫我:'全村的希望!'/(°ω°)/"}
                    this.user.push(this.row);
                    alert('别删啦,再删没有啦!!!')
                }
            },

            totalnum(){
                this.total = this.user.length;
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
      async created(){
          let {data} = await this.$axios({
            method: 'get',
            url: '/user/userInfo'
          })
        console.log(data);
      }
    }
</script>

<style Lang="less" scoped>
*{
    color:#4b9100;
}
</style>
