<template>
    <el-container id = "mainContainer">
        <el-aside id = "aside" :width="isFold?'64px':'200px' ">
            <el-menu
            id = "menu"
            background-color="#FFFFFF"
            text-color="#091f44"
            active-text-color="#86B722"
            unique-opened
            :collapse = "isFold"
            :collapse-transition = "false"
            router>
              <template v-for="item in menuList" >
                <el-menu-item :index="item.name" v-if="item.children == undefined">
                  <template slot="title">
                      <i :class="item.icon"></i>
                      <span>{{item.title}}</span>
                  </template>
                </el-menu-item>
                
                <el-submenu :index="item.name" v-if="item.children != undefined" >
                  <template slot="title">
                      <i :class="item.icon"></i>
                      <span slot="title">{{item.title}}</span>
                  </template>

                  <template v-for="item1 in item.children" >
                    <el-menu-item :index="item1.name" v-if="item1.children == undefined">{{item1.title}}</el-menu-item>
                  </template>
                </el-submenu>
              </template> 
            </el-menu>
        </el-aside>
        
        <el-container>
            <el-header id = "header">
                <span id = "toggleButton" @click = "toggleFold"><i class = "fa fa-align-justify" id = "flex"></i></span>
                <div id = "homeTitle">
                    <span style = "color:#4b9100;">后台管理系统</span>
                </div>
                <el-popover
                    placement="top"
                    trigger="hover">
                    <div style="text-align: center;">
                        <a @click="detail" style="color:#000;letter-spacing: 2px;text-decoration: none;cursor: pointer;">个人信息</a><br>
                        <a @click="logOut" style="color:#000;letter-spacing: 2px;text-decoration: none;cursor: pointer;">退出登录</a>
                    </div>
                    <el-button circle slot="reference" id = "userimg"><img src="../assets/logo.png" alt="用户名"></el-button>
                </el-popover>

                
            </el-header>
            <el-main id = "main">
                <router-view></router-view>
            </el-main>
        </el-container>
      </el-container>
</template>

<script>
    export default {
        data(){
            return{
                isFold: false,
                visible: false,
                menuList :[
                    {name: '/home',icon: 'el-icon-user-solid', title: '主页',
                        children:[
                            {name: '/home',title: '主页',},
                            {name: '/userPage', title: '用户信息',},
                        ]
                    },
                        
                    //
                   
                    //
                    {name: 'one',icon: 'el-icon-tickets',title: '羊群管理',
                        children: [
                            {name: '/sheep_Info',title: '羊只信息',},
                            {name: '/',title: '系谱档案',},
                            {name: '/',title: '羊绒检测',},
                        ]
                    },
                    //

                    {name: 'three',icon: 'el-icon-male',title: '配种信息',
                        children: [
                            {name: '/reproductivePerformance',title: '生产性能',},
                            {name: '/breedingRecord',title: '配种信息',},
                        ]
                    },
                    //
                    {name: 'two',icon: 'el-icon-first-aid-kit',title: '防疫记录',
                        children: [
                            {name: 'two-1',title: '免疫记录',},
                            {name: 'two-2',title: '治疗记录',},
                            {name: 'two-3',title: '记录查询',},
                        ]
                    },
                    //
                    {name: 'four',icon: 'el-icon-refresh',title: '死淘信息',
                        children: [
                            {name: 'four-1',title: '死淘登记',},
                        ]
                    },
                    //
                    {name: 'five',icon: 'el-icon-s-home',title: '仓库管理',
                        children: [
                            {name: 'five-1',title: '饲料管理',},
                            {name: 'five-2',title: '药品管理',},
                            {name: 'five-3',title: '疫苗管理',},
                            {name: 'five-4',title: '库存提醒',},
                        ]
                    },
                    //
                    {name: 'six',icon: 'el-icon-s-data',title: '汇总统计',
                        children: [
                            {name: 'six-1',title: '死淘分析',},
                            {name: 'six-2',title: '收入支出',}
                        ]
                    },
                ],
            }
        },
        /* created(){
            this.getMenuList()
        }, */
        methods: {
            logOut(){
                window.sessionStorage.clear('token');
                this.$router.replace('/login');
            },
            //获取菜单
/*             async getMenuList(){
                const {data: result} = await this.$http.get('menus')
                if(result.meta.status !== 200) return this.$message.error(result.meta.msg)
                this.menulist = result.data
                console.log(result)
            }, */
            //菜单折叠按钮
            toggleFold(){
                this.isFold = !this.isFold
            },
            detail(){
                this.$router.push("/userDetails");
            },
        }
    }
</script>

<style Lang="less" scoped>
#header{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    padding-right : 3%;
    padding-left: 1%;
    border-bottom: 1px solid #4b9100;
}
#aside{
    background-color: #FFFFFF;
    box-shadow: 5 0 5px #4b9100;
    border: 1px solid #4b9100;
    border-bottom: 0;
    border-radius: 10px 10px 0 0;
    margin-left: 2px;
    overflow: hidden;
}
#menu{
    border-right: 0;
}
#main{
    background-color: #ebebeb;
    padding:0;
}
#mainContainer{
    height:100%;
}
#toggleButton{
    cursor: pointer;
}
#userimg{
    height: 40px;
    width: 40px;
    padding: 5px;
    background-color: rgba(103, 222, 243, 0.308);
    border: 0;
}
#userimg img{
    height: 100%;
    width: 100%;
}
#flex:hover{
    color:#4b9100;
}
a:hover{
    background-color: #cae564;
    border-radius: 3px;
}
</style>