<template>
  <div>
    <div class="register_header">
      <div class="header_center clearfix">
        <div class="myfl">
          <router-link to='/'>
            <a ><img src="../../assets/img/logo.png" style="height: 79px;width: 80px;margin-top: 10px"/></a>
          </router-link>
          <span>用户注册</span>
        </div>
        <div class="myfr">
          <router-link to='/home'>
            <a >返回首页</a>
          </router-link>

          <span></span>
          <a href="javascript:;">收藏网站</a>
          <span></span>
          <router-link to='/register'>
            <a >注册商家账号</a>
          </router-link>
          <span></span>
          <router-link to='/'>
            <a href="/">已有账户，直接<em>登录</em></a>
          </router-link>
        </div>
      </div>
    </div>
    <div class="register_content clearfix"
         style="background:url('../../../static/img/user_register_bag.png') no-repeat 0 138px;"
    >
      <input type="hidden" value="" id="iserror">
        <div class="register_box myfr">
          <div class="title clearfix">
            <h1 class="myfl" style="margin-left: 68px">-----拉 帮 结 伙-----</h1>
            <div style="margin-top: 30px">
              <el-form ref="form" :model="sizeForm" >
                <el-form-item prop="name">
                  <el-input type="text" placeholder="请输入您的用户名，支持手机号" class="username" maxlength="20" style="margin-top: 38px;"/>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="text" placeholder="请输入您的用户名，支持手机号" class="password" maxlength="20" />
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="text" placeholder="请输入您的用户名，支持手机号" class="password_again" maxlength="20" />
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="text" placeholder="请输入您的用户名，支持手机号" class="phone_num" maxlength="20" />
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="text" placeholder="请输入您的用户名，支持手机号" class="phone_num" maxlength="20" />
                </el-form-item>
                <el-form-item prop="password">
                  <div class="clearfix message_code_box">
                    <el-input style="width: 180px" type="text" placeholder="请输入短信验证码"  maxlength="20" class="message_code myfl" />
                    <a href="javascript:;" class="message_code_btn myfr">发送验证码</a>
                    <span class="message_code_again"><em>60</em>秒重发</span>
                  </div>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="text" placeholder="请输入您正在使用的QQ号" class="phone_num" maxlength="20" />
                </el-form-item>
                <el-form-item prop="password" style="margin-top: -32px">
                  <div class="my_agreement">
                    <input type="checkbox" name="agreement" value="1" checked>我已仔细阅读并同意接受
                    <a href="" target="_blank">《用户使用协议》</a>
                  </div>
                </el-form-item>
                <el-form-item prop="">
                  <el-button type="primary"
                             @click="onSubmit"
                             style="font-size: 18px;background-color: rgb(255,54,111);width: 310px;height: 48px;;color: white;border: none;margin-left: 13px;margin-top: -10px "
                  >立即登录</el-button>
                </el-form-item>
              </el-form>
            </div>


          </div>
        </div>
    </div>

    <div class="register_bottom" style="margin-top: 196px">2020年 &nbsp; 吹牛逼有限公司 &nbsp;&nbsp;粤ICP17003883号-1 &nbsp;&nbsp;版权所有</div>
  </div>
</template>


<script>

  export default {
    name:'register',
    data(){
      return{
        sizeForm:{}
      }
    }
  }
</script >

<style scoped>
 .inputwidth{
   width: 180px!important;
 }
</style>
