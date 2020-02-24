<template>
<div id="content">
<div class="main">
        <header id="header">
            <h1>找回密码</h1>
        </header>
        <div class="content">
        <div class="login_body">
           
            <div class="login_input">
                
                <el-input v-model="email" placeholder="请输入邮箱"></el-input>
                 
                
            </div>
            <div class="login_input">
           
                
                <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
             
            </div>
            <div class="login_input">
               
                       <el-input placeholder="请确认密码" v-model="newpassword" show-password></el-input>
            </div>
            <div class="verifycss">
               
           
                <el-input class="verify_input" v-model="verify" placeholder="请输入验证码"></el-input>
                <el-button class="login_text right" round :disabled="disabled">{{verifyInfo}}</el-button>
            </div>
            <div class="login_input">
                <el-button class="login_btnn" type="primary" >修改</el-button>
            </div>
            <div class="login_link">
                   <div class="left"> <router-link class="R" tag="a" to="/mine/login">立即登录</router-link></div>
                   <div class="right"><router-link class="F right" tag="a" to="/mine/register">立即注册</router-link></div> 
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
     name : 'findPassword',

        data(){
        return {
            email:'',
            password:'',
            verify:'',
            username:'',
            newpassword:'',
            verifyInfo:'发送验证码',
            disabled:false
        }
    },
}
</script>

<style scoped>
.main{
    position: relative;
    margin: 0 auto;
    width: 350px;
}
h1{
    padding-bottom: 16px;
    align-content: center;
}

.login_link{
    
    display: flex;
    text-align: auto;
    display: block;
    
}
.box{
    width: 150px;
    
}
.R ,.F{

    text-decoration: none;
    font-size: 12px;
    color: #e54847;
}


#content h1{
    padding: 20px;
    text-align: center
}

.verifycss{
    display:flex
}
.login_input{
    width: 100%
}
.verify_input{
    width: 235px;
}
.login_btnn{
    height: 37px;
    margin-top: 20px;
    border-radius: 12px;
    width: 100%
}
input{
    margin-bottom: 5px;
}
.login_link{
    margin-top: 10px;
    display: block;
}


.verifycss{
    position: relative;
    display: block
    
}
.login_text{
    position: absolute;
    width: 100px;
    height: 40px;
    border-radius: 3px;
    box-shadow:0cm;
    text-align: center;
    padding-left: 15px;
    font-size: 15px;
    background-color: #3487ff;
    color: #fff;
    margin-left: 5px;
    right: 0;
}
.left{
    float: left;
}

.right{
    float: right;
}
.el-input{
    margin-bottom: 15px;
}
</style>