<template>
    <div class="login_container">
        <!-- 注册页 -->
        <el-dialog
                title="请输入注册信息"
                :visible.sync="openPage"
                width="450px"
                :before-close="handleClose">
                <el-form :model="userData" id = "signIn" :rules="loginFormRules" status-icon>
                    <el-form-item label="用户编号" prop="userCode">
                        <el-input type="text" autocomplete="off" v-model="userData.userCode" size="medium"></el-input>
                    </el-form-item>
                    <el-form-item label="用户名" prop="userName">
                        <el-input type="text" autocomplete="off" v-model="userData.userName" size="medium"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input show-password autocomplete="off" v-model="userData.password"size="medium"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="againPassword">
                        <el-input show-password autocomplete="off" v-model="userData.againPassword" size="medium"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" prop="tel">
                        <el-input autocomplete="off" v-model="userData.tel" size="medium"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="openPage = false">取 消</el-button>
                    <el-button type="primary" @click="openPage = false">确 定</el-button>
                </span>
        </el-dialog>
        <div class="login_box">
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" id = "login_form" status-icon>
                <el-button type="warning" round id = "login_but3" @click="openPage = true">注册</el-button>
                <h1 id = "login_title">登录页面</h1>
                <el-form-item prop="userCode">
                    <el-input v-model="loginForm.userCode" prefix-icon="iconfont icon-user" placeholder="用户编号"></el-input>
                </el-form-item><br>
                <el-form-item prop="password">
                    <el-input show-password v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" placeholder="密码"></el-input>
                </el-form-item><br>
                <el-form-item id = "login_buts">
                    <el-button type="primary" round id = "login_but1" @click="loginTest">登录</el-button>
                    <el-button type="info" round id = "login_but2" @click="resetLoginForm">重置</el-button>
                </el-form-item>

            </el-form>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        //注册表单校验规则
        var registerUserCode = (rule, value, callback) => {
            var reg = /^\d{6,12}$/;
            if (!reg.test(value)) {
                callback(new Error("用户编号为 6 到 12 位的数字!"));
            }else{
                callback();
            }
        };
        var registerPassword = (rule, value, callback) => {
            var reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/;
            if (!reg.test(value)) {
                callback(new Error("密码包含 数字,英文,字符中的两种以上，长度6-20!"));
            }else{
                callback();
            }
        };
        var registerAgainPassword = (rule, value, callback) => {
            var reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/;
            if (value !== this.userData.password) {
                callback(new Error("两次输入密码不一致!"));
            }else if(!reg.test(value)){
                callback(new Error("密码包含 数字,英文,字符中的两种以上，长度6-20!"));
            }else{
                callback();
            }
        };
        var registerTel = (rule, value, callback) => {
            var reg = /^\d{11}$/;
            if (!reg.test(value)) {
                callback(new Error("电话号码必须为11位的数字!"));
            }else{
                callback();
            }
        };
        return{
            openPage: false,
            //登录表单数据绑定对象
            loginForm:{
                userCode:"",
                password:"",
            },
            //表单验证规则对象
            loginFormRules:{
                userCode:[
                    { required: true, message: '请输入用户编号', trigger: 'blur' },
                    { validator: registerUserCode, trigger: "blur"}
                ],
                userName:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 12, message: '用户名为 3 到 12 个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { validator: registerPassword, trigger: "blur"}
                ],
                againPassword:[
                    { required: true, message: '请输入确认密码', trigger: 'blur' },
                    { validator: registerAgainPassword, trigger: "blur"}
                ],
                tel:[
                    { required: true, message: '请输入电话', trigger: 'blur' },
                    { validator: registerTel, trigger: "blur"}
                ],
            },
            userData:{
                        userCode:null,
                        userName:null,
                        password:null,
                        againPassword:null,
                        tel:null,
                    },
        }
    },
    methods:{
        //重置登录输入
        resetLoginForm(){
            this.$refs.loginFormRef.resetFields();
        },
        //注册表单校验
        register(){

        },
        //登录表单校验
        loginTest(){
            /* this.$refs.loginFormRef.validate(async valid =>{
                if (!valid) return;
                const {data : result} = await this.$http.post('login',this.loginForm);
                if (result.meta.status !== 200) return this.$message.error('登录失败'); */
                this.$message.success('登录成功');
                //window.sessionStorage.setItem("token",result.data.token);
                this.$router.push("/home");
           // });
        },
        handleClose(done) {
                this.$messagebox.confirm('确认关闭？')
                .then(_ => {done();})
                .catch(_ => {});
            },
    },
};
</script>

<style Lang="less" scoped>
/* less-loader安装的版本过高,降级或者将lang的l改为L */
.login_container{
    background: linear-gradient(to bottom right,rgb(106, 153, 224),rgb(72, 180, 199));
    height:100%;
}
#login_title{
    text-align: center;
    color:rgba(32, 32, 32, 0.555);
    margin-bottom: 15%;
    letter-spacing: 1em;
    text-indent: 1em;
}
.login_box{
    height:400px;
    width:600px;
    background-color: rgba(248, 248, 248, 0.637);
    border-radius: 10px;
    margin:0 auto;
    position: relative;
    top:45%;
    transform: translate(0 ,-50%);
}
#login_buts{
    display: flex;
    justify-content:flex-end;
}
#login_form{
    position : absolute;
    bottom : 0;
    width : 70%;
    padding : 0 15%;
}
#login_but1{
    margin-right: 20px;
}
#login_but3{
    position: relative;
    left: 420px;
}

#signIn .el-form-item{
    margin-bottom: 0;
}
</style>
