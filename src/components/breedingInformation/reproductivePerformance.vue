<template>
  <div id="bodypage">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/homePage' }"><span id="mainpage">主页</span></el-breadcrumb-item>
      <el-breadcrumb-item>配种信息</el-breadcrumb-item>
      <el-breadcrumb-item><span>生产性能</span></el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <!-- 搜索页 -->
      <el-dialog title="请输入检索信息" :visible.sync="dialogVisible[0].searchPage" width="480px" :before-close="handleClose">
        <el-form :model="tableData[0]">
          <el-form-item label="个体编号" label-width="80px">
            <el-input type="number" autocomplete="off" v-model="tableData[0].individualNumber"></el-input>
          </el-form-item>
          <el-form-item label="旗" label-width="80px">
            <el-input type="text" autocomplete="off" v-model="tableData[0].prefecture"></el-input>
          </el-form-item>
          <el-form-item label="苏木(镇)" label-width="80px">
            <el-input type="text" autocomplete="off" v-model="tableData[0].town"></el-input>
          </el-form-item>
          <el-form-item label="嘎查(牧户)" label-width="80px">
            <el-input type="text" autocomplete="off" v-model="tableData[0].village"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible[0].searchPage = false">取 消</el-button>
          <el-button type="success" @click="handleFindProPerformance">确 定</el-button>
        </span>
      </el-dialog>
      <h2 style="text-align: center;margin-top: 20px;">绒山羊生产性能测定记录表</h2>

      <template>
        <div id="units"><span>单位:厘米.微米&nbsp;千克.克</span></div>
        <!-- 新增页 -->
        <el-dialog title="绒山羊生产性能测定记录表" :visible.sync="dialogVisible[1].addPage" width="1010px" :before-close="handleClose">
          <el-form :inline="true" :model="inputValue1">
            <el-form-item label="个体编号" label-width="90px">
              <el-input type="number" v-model="inputValue1.individualNumber"></el-input>
            </el-form-item>
            <el-form-item label="性别" label-width="90px">
              <el-radio v-model="inputValue1.sex" label="公">公</el-radio>
              <el-radio v-model="inputValue1.sex" label="母">母</el-radio>
            </el-form-item>
            <el-form-item label="年龄" label-width="190px">
              <el-input type="number" v-model="inputValue1.theAge"></el-input>
            </el-form-item>
          </el-form>

          <el-form :inline="true" :model="inputValue1" class="demo-form-inline" ref="form">
            <el-form-item label="外貌" label-width="90px">
              <el-radio v-model="inputValue1.appearance" label="优">优</el-radio>
              <el-radio v-model="inputValue1.appearance" label="良">良</el-radio>
            </el-form-item>
            <el-form-item label="体高" label-width="190px">
              <el-input type="number" v-model="inputValue1.theHeigth"></el-input>
            </el-form-item>
            <el-form-item label="体长" label-width="90px">
              <el-input type="number" v-model="inputValue1.theLength"></el-input>
            </el-form-item>
          </el-form>

          <el-form :inline="true" :model="inputValue1" class="demo-form-inline" ref="form">
            <el-form-item label="胸围" label-width="90px">
              <el-input type="number" v-model="inputValue1.chest"></el-input>
            </el-form-item>
            <el-form-item label="管围" label-width="90px">
              <el-input type="number" v-model="inputValue1.pipeSize"></el-input>
            </el-form-item>
            <el-form-item label="剪绒后体重" label-width="90px">
              <el-input type="number" v-model="inputValue1.afterWeight"></el-input>
            </el-form-item>
          </el-form>

          <el-form :inline="true" :model="inputValue1" class="demo-form-inline" ref="form">
            <el-form-item label="毛长" label-width="90px">
              <el-input type="number" v-model="inputValue1.woolLength"></el-input>
            </el-form-item>
            <el-form-item label="厚绒" label-width="90px">
              <el-input type="number" v-model="inputValue1.heavyFleece"></el-input>
            </el-form-item>
            <el-form-item label="绒细度" label-width="90px">
              <el-input type="number" v-model="inputValue1.woolThickness"></el-input>
            </el-form-item>
          </el-form>

          <el-form :inline="true" :model="inputValue1" class="demo-form-inline" ref="form">
            <el-form-item label="麦穗绒" label-width="90px">
              <el-radio v-model="inputValue1.earWool" label="有">有</el-radio>
              <el-radio v-model="inputValue1.earWool" label="无">无</el-radio>
            </el-form-item>
            <el-form-item label="产绒量" label-width="190px">
              <el-input type="number" v-model="inputValue1.woolQuantity"></el-input>
            </el-form-item>
            <el-form-item label="产羔" label-width="90px">
              <el-radio v-model="inputValue1.lambing" label="有">有</el-radio>
              <el-radio v-model="inputValue1.lambing" label="无">无</el-radio>
            </el-form-item>
          </el-form>

          <el-form :inline="true" :model="inputValue1" class="demo-form-inline" ref="form">
            <el-form-item label="等级" label-width="90px">
              <el-radio v-model="inputValue1.level" label="优">优</el-radio>
              <el-radio v-model="inputValue1.level" label="良">良</el-radio>
            </el-form-item>
            <el-form-item label="旗" label-width="190px">
              <el-input type="text" v-model="inputValue1.prefecture"></el-input>
            </el-form-item>
            <el-form-item label="苏木(镇)" label-width="90px">
              <el-input type="text" v-model="inputValue1.town"></el-input>
            </el-form-item>
          </el-form>

          <el-form :inline="true" :model="inputValue1" class="demo-form-inline" ref="form">
            <el-form-item label="嘎查(牧户)" label-width="90px">
              <el-input type="text" v-model="inputValue1.village"></el-input>
            </el-form-item>
            <el-form-item label="备注" label-width="90px">
              <el-input type="text" v-model="inputValue1.remark"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible[1].addPage = false">取 消</el-button>
            <el-button type="success" @click="add">确 定</el-button>
          </span>
        </el-dialog>
        <!-- 查看与编辑页 -->
        <el-dialog title="绒山羊生产性能测定记录表" :visible.sync="dialogVisible[2].checkPage" width="1000px" :before-close="handleClose">
          <el-form :inline="true" :model="row">
            <el-form-item label="个体编号" label-width="90px">
              <el-input type="number" v-model="row.individualNumber"></el-input>
            </el-form-item>
            <el-form-item label="性别" label-width="90px">
              <el-radio v-model="row.sex" label="公">公</el-radio>
              <el-radio v-model="row.sex" label="母">母</el-radio>
            </el-form-item>
            <el-form-item label="年龄" label-width="190px">
              <el-input type="number" v-model="row.theAge"></el-input>
            </el-form-item>
          </el-form>

          <el-form :inline="true" :model="row" class="demo-form-inline" ref="form">
            <el-form-item label="外貌" label-width="90px">
              <el-radio v-model="row.appearance" label="优">优</el-radio>
              <el-radio v-model="row.appearance" label="良">良</el-radio>
            </el-form-item>
            <el-form-item label="体高" label-width="190px">
              <el-input type="number" v-model="row.theHeigth"></el-input>
            </el-form-item>
            <el-form-item label="体长" label-width="90px">
              <el-input type="number" v-model="row.theLength"></el-input>
            </el-form-item>
          </el-form>

          <el-form :inline="true" :model="row" class="demo-form-inline" ref="form">
            <el-form-item label="胸围" label-width="90px">
              <el-input type="number" v-model="row.chest"></el-input>
            </el-form-item>
            <el-form-item label="管围" label-width="90px">
              <el-input type="number" v-model="row.pipeSize"></el-input>
            </el-form-item>
            <el-form-item label="剪绒后体重" label-width="90px">
              <el-input type="number" v-model="row.afterWeight"></el-input>
            </el-form-item>
          </el-form>

          <el-form :inline="true" :model="row" class="demo-form-inline" ref="form">
            <el-form-item label="毛长" label-width="90px">
              <el-input type="number" v-model="row.woolLength"></el-input>
            </el-form-item>
            <el-form-item label="厚绒" label-width="90px">
              <el-input type="number" v-model="row.heavyFleece"></el-input>
            </el-form-item>
            <el-form-item label="绒细度" label-width="90px">
              <el-input type="number" v-model="row.woolThickness"></el-input>
            </el-form-item>
          </el-form>

          <el-form :inline="true" :model="row" class="demo-form-inline" ref="form">
            <el-form-item label="麦穗绒" label-width="90px">
              <el-radio v-model="row.earWool" label="有">有</el-radio>
              <el-radio v-model="row.earWool" label="无">无</el-radio>
            </el-form-item>
            <el-form-item label="产绒量" label-width="190px">
              <el-input type="number" v-model="row.woolQuantity"></el-input>
            </el-form-item>
            <el-form-item label="产羔" label-width="90px">
              <el-radio v-model="row.lambing" label="有">有</el-radio>
              <el-radio v-model="row.lambing" label="无">无</el-radio>
            </el-form-item>
          </el-form>

          <el-form :inline="true" :model="row" class="demo-form-inline" ref="form">
            <el-form-item label="等级" label-width="90px">
              <el-radio v-model="row.level" label="优">优</el-radio>
              <el-radio v-model="row.level" label="良">良</el-radio>
            </el-form-item>
            <el-form-item label="旗" label-width="190px">
              <el-input type="text" v-model="row.prefecture"></el-input>
            </el-form-item>
            <el-form-item label="苏木(镇)" label-width="90px">
              <el-input type="text" v-model="row.town"></el-input>
            </el-form-item>
          </el-form>

          <el-form :inline="true" :model="row" class="demo-form-inline" ref="form">
            <el-form-item label="嘎查(牧户)" label-width="90px">
              <el-input type="text" v-model="row.village"></el-input>
            </el-form-item>
            <el-form-item label="备注" label-width="90px">
              <el-input type="text" v-model="row.remark"></el-input>
            </el-form-item>
          </el-form><br><br>
          <span slot="footer" class="dialog-footer">
            <el-button id="checkPageButton" type="danger" @click="dialogVisible[2].checkPage = false">修 改</el-button>
            <el-button type="success" @click="dialogVisible[2].checkPage = false">关 闭</el-button>
          </span>
        </el-dialog>
        <!-- 表格区 -->
        <template>
          <el-button @click="dialogVisible[0].searchPage = true" round type="success" slot="append" icon="el-icon-search"
            style="margin: 10px 0 10px 20px;">搜索</el-button>
          <el-button @click="dialogVisible[1].addPage = true" round type="success" slot="append" icon="el-icon-edit"
            style="margin: 10px 0 10px 10px;">新增</el-button>
        </template>
        <el-table :data="tableData" border stripe @row-click="getDetails">
          <el-table-column type="selection" width="35"></el-table-column>
          <el-table-column width="30px"><template slot-scope="scope">{{scope.$index+1}}</template></el-table-column>
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="备注:">
                  <span>{{ props.row.remark }}</span>
                </el-form-item>
                <el-form-item label="个体编号:">
                  <span>{{ props.row.individualNumber }}</span>
                </el-form-item>
                <el-form-item label="性别:">
                  <span>{{ props.row.sex }}</span>
                </el-form-item>
                <el-form-item label="年龄:">
                  <span>{{ props.row.theAge }}</span>
                </el-form-item>
              </el-form>
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="外貌:">
                  <span>{{ props.row.appearance }}</span>
                </el-form-item>
                <el-form-item label="体高:">
                  <span>{{ props.row.theHeigth }}</span>
                </el-form-item>
                <el-form-item label="体长:">
                  <span>{{ props.row.theLength }}</span>
                </el-form-item>
                <el-form-item label="胸围:">
                  <span>{{ props.row.chest }}</span>
                </el-form-item>
              </el-form>
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="管围:">
                  <span>{{ props.row.pipeSize }}</span>
                </el-form-item>
                <el-form-item label="剪绒后体重:">
                  <span>{{ props.row.afterWeight }}</span>
                </el-form-item>
                <el-form-item label="毛长:">
                  <span>{{ props.row.woolLength }}</span>
                </el-form-item>
                <el-form-item label="厚绒:">
                  <span>{{ props.row.heavyFleece }}</span>
                </el-form-item>
              </el-form>
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="绒细度:">
                  <span>{{ props.row.woolThickness }}</span>
                </el-form-item>
                <el-form-item label="麦穗绒:">
                  <span>{{ props.row.earWool }}</span>
                </el-form-item>
                <el-form-item label="产绒量:">
                  <span>{{ props.row.woolQuantity }}</span>
                </el-form-item>
                <el-form-item label="产羔:">
                  <span>{{ props.row.lambing }}</span>
                </el-form-item>
              </el-form>
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="等级:">
                  <span>{{ props.row.level }}</span>
                </el-form-item>
                <el-form-item label="旗:">
                  <span>{{ props.row.prefecture }}</span>
                </el-form-item>
                <el-form-item label="苏木(镇):">
                  <span>{{ props.row.town }}</span>
                </el-form-item>
                <el-form-item label="嘎查(牧户):">
                  <span>{{ props.row.village }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column prop="individualNumber" label="个体编号" align="center"></el-table-column>
          <el-table-column prop="sex" label="性别" align="center"></el-table-column>
          <el-table-column prop="theAge" label="年龄" align="center"></el-table-column>
          <el-table-column prop="appearance" label="外貌" align="center"></el-table-column>
          <el-table-column prop="theHeigth" label="体高" align="center"></el-table-column>
          <el-table-column prop="theLength" label="体长" align="center"></el-table-column>
          <el-table-column prop="chest" label="胸围" align="center"></el-table-column>
          <el-table-column prop="pipeSize" label="管围" align="center"></el-table-column>
          <el-table-column prop="afterWeight" label="剪绒后体重" align="center"></el-table-column>
          <el-table-column prop="woolLength" label="毛长" align="center"></el-table-column>
          <el-table-column prop="heavyFleece" label="厚绒" align="center"></el-table-column>
          <el-table-column prop="woolThickness" label="绒细度" align="center"></el-table-column>
          <el-table-column prop="earWool" label="麦穗绒" align="center"></el-table-column>
          <el-table-column prop="woolQuantity" label="产绒量" align="center"></el-table-column>
          <el-table-column prop="lambing" label="产羔" align="center"></el-table-column>
          <el-table-column prop="level" label="等级" align="center"></el-table-column>
          <el-table-column prop="remark" label="备注" align="center"></el-table-column>
          <el-table-column prop="prefecture" label="旗" align="center"></el-table-column>
          <el-table-column prop="town" label="苏木(镇)" align="center"></el-table-column>
          <el-table-column prop="village" label="嘎查(牧户)" align="center"></el-table-column>
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
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryInfo.pagenum"
          :page-sizes="[1, 2, 3, 4]" :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    // mounted:function(){
    //         this.totalnum();
    //     },
    data() {
      return {
        tableData: [
        //   {
        //   individualNumber: 1302,
        //   sex: '母',
        //   theAge: 1,
        //   appearance: '优',
        //   theHeigth: 48,
        //   theLength: 65,
        //   chest: 72,
        //   pipeSize: 7,
        //   afterWeight: 36,
        //   woolLength: 14,
        //   heavyFleece: 7,
        //   woolThickness: 15.58,
        //   earWool: '有',
        //   woolQuantity: 30,
        //   lambing: '无',
        //   level: '优',
        //   remark: '小明',
        //   prefecture: '伊金霍洛旗',
        //   town: '康巴什',
        //   village: '小明',
        // },
        ],
        dialogVisible: [{
            searchPage: false
          },
          {
            addPage: false
          },
          {
            checkPage: false
          },
        ],
        inputValue: {
          individualNumber: null,
          sex: null,
          theAge: null,
          appearance: null,
          theHeigth: null,
          theLength: null,
          chest: null,
          pipeSize: null,
          afterWeight: null,
          woolLength: null,
          heavyFleece: null,
          woolThickness: null,
          earWool: null,
          woolQuantity: null,
          lambing: null,
          level: null,
          remark: null,
          prefecture: null,
          town: null,
          village: null,
          thePage: null,
        },
        inputValue1: {
          individualNumber: null,
          sex: null,
          theAge: null,
          appearance: null,
          theHeigth: null,
          theLength: null,
          chest: null,
          pipeSize: null,
          afterWeight: null,
          woolLength: null,
          heavyFleece: null,
          woolThickness: null,
          earWool: null,
          woolQuantity: null,
          lambing: null,
          level: null,
          remark: null,
          prefecture: null,
          town: null,
          village: null,
          thePage: null,
        },
        queryInfo: {
          query: null,
          pagenum: 1, //当前页码
          pagesize: 1, //当前每页显示的数据数
        },
        userlist: [],
        total: 0, //当前共有数据量
        //储存当前行的信息
        row: {
          individualNumber: null,
          sex: null,
          theAge: null,
          appearance: null,
          theHeigth: null,
          theLength: null,
          chest: null,
          pipeSize: null,
          afterWeight: null,
          woolLength: null,
          heavyFleece: null,
          woolThickness: null,
          earWool: null,
          woolQuantity: null,
          lambing: null,
          level: null,
          remark: null,
          prefecture: null,
          town: null,
          village: null,
          thePage: null,
        },
      }
    },
    methods: {
      //删除当前行数据
      // delteleitem(scope) {
      //     console.log(scope)
      //     const index = scope.$index;
      //     this.$messagebox.confirm('此操作将永久删除该信息, 是否继续?', '提示', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //     type: 'error'
      //     }).then(() => {
      //     this.tableData.splice(index,1)
      //     this.totalnum()
      //     this.$message({type: 'success',message: '删除成功!'});
      //     }).catch(() => {
      //     this.$message({type: 'info',message: '已取消删除'});
      //     });
      // },
      handleClose(done) {
        this.$messagebox.confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      add() {
        this.inputValue = JSON.parse(JSON.stringify(this.inputValue1)) //对inputValue1的值进行转义并赋值给inputValue,避免内存冲突
        for (var i in this.inputValue) {
          if (this.inputValue1[i] !== null) {
            this.tableData.push(this.inputValue);
            this.dialogVisible[1].addPage = false;
            this.inputValue1[i] = null;
            this.totalnum();
            return
          };
        }
        if (this.inputValue[i] == null) {
          alert("请输入至少一项数据!!!")
          this.dialogVisible[1].addPage = true;
        }
      },
      getDetails(row) {
        this.row = row
      }, //获取表格当前行的数据
      totalnum() {
        this.total = this.tableData.length;
      },
      //改变每页显示的数据数
      handleSizeChange(newSize) {
        this.queryInfo.pagesize = newSize
      },
      //改变页码值
      handleCurrentChange(newPage) {
        console.log(newPage)
      },
      //提交搜索条件
      async handleFindProPerformance() {
        // let {data} = await this.$axios({
        //   method: "get",
        //   url: ""
        // })
      }
    },

    // mounted: function(){

    // }

    async created() {
      let {
        data
      } = await this.$axios({
        method: 'get',
        url: '/ramProTest',
      })
      console.log(data)


      // 解析data，更新到页面

      var arr = data.list

      arr.forEach((value, index, array) => {
        // console.log(index,value)

        // console.log(value)

        let newObj = {}
        newObj.individualNumber = value. ['个体编号'];
        newObj.sex = value. ['性别'];
        newObj.theAge = value. ['年龄'];
        newObj.appearance = value. ['外贸'];
        newObj.theHeigth = value. ['体高'];
        newObj.theLength = value. ['体长'];
        newObj.chest = value. ['胸围'];
        newObj.pipeSize = value. ['管围'];
        newObj.afterWeight = value. ['剪绒后体重'];
        newObj.woolLength = value. ['毛长'];
        newObj.heavyFleece = value. ['绒厚'];
        newObj.woolThickness = value. ['绒细度'];
        newObj.earWool = value. ['麦穗绒'];
        newObj.woolQuantity = value. ['产容量'];
        newObj.lambing = value. ['产羔'];
        newObj.level = value. ['等级'];
        newObj.remark = value. ['备注'];
        // newObj.prefecture = value.'个体编号';
        // newObj.town = value.'个体编号';
        // newObj.village = value.'个体编号';


        this.tableData.push(newObj)




      })





    }
  }
</script>

<style Lang="less" scoped>
  * {
    color: #4b9100;
  }

  .el-form-item>>>.el-input__inner {
    border: none;
    border-bottom: 1px solid rgb(184, 183, 183);
    border-radius: 0px;
    background-color: transparent;
  }

  #special .el-input {
    width: 60px;
  }

  #units {
    text-align: right;
    margin-right: 10%;
  }

  .demo-table-expand {
    font-size: 10px;
  }

  .el-form>>>.el-form-item__label {
    width: 90px;
    color: #000000;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 18%;
  }
</style>
