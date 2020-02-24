<template>
    <div id="content">
    <div class="main">
        <header id="header">
            <h1>登录</h1>
        </header>
        <div class="content">
            <div class="login_body">
                <div>
                   <el-input v-model="username" placeholder="请输入邮箱"></el-input>
                </div>
                <div>
                   
                    <el-input class="login_text" placeholder="请输入密码" v-model="password" show-password></el-input>
                </div>
                <div class="verifycss">

                   <el-input  placeholder="请输入验证码" v-model="verifyImg" ></el-input><img src="" >
                </div>
                <div class="login_btn">
                    <!-- <input type="submit"  value="登录" @click="handToLogin"> -->
                    <el-button class="login_btnn" type="primary" >登录</el-button>
                </div>
                <div class="login_link">
                   <div class="left"> <router-link class="R" tag="a" to="/mine/register">立即注册</router-link></div>
                   <div class="right"><router-link class="F right" tag="a" to="/mine/findPassword">找回密码</router-link></div> 
                    <!-- <a href="#">立即注册</a> -->
                    <!-- <a href="#">找回密码</a> -->
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:"Login",
     data(){

        return{
            username:"",
            password:'',
            verifyImg:''
        }
    },
}
</script>
<style scoped>
.el-input{
    margin-bottom: 15px;
}
.left{
    float: left;
}

.right{
    float: right;
}
.main{
    position: relative;
    margin: 0 auto;
    width: 350px;
}
.main h1{
    padding-bottom: 16px;
}

.login_link{
    
    display: flex;
    text-align: auto;
    display: block;
    
}

.R ,.F{

    text-decoration: none;
    font-size: 12px;
    color: #e54847;
}


#content{
    padding: 20px;
    text-align: center
}

.verifycss{
    display:flex
}
input{
    width: 80%
}

.login_btnn{
    height: 37px;
    margin-top: 20px;
    border-radius: 12px;
    width: 100%
}

.login_link{
    margin-top: 10px
}
</style>