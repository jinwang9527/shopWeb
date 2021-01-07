<template>
  <div>
    <div class="register_header">
      <div class="header_center clearfix">
        <div class="myfl">
          <router-link to='/'>
            <a><img src="../../assets/img/logo.png" style="height: 79px;width: 80px;margin-top: 10px"/></a>
          </router-link>
          <span>用户注册</span>
        </div>
        <div class="myfr">
          <router-link to='/home'>
            <a>返回首页</a>
          </router-link>

          <span></span>
          <a href="javascript:;">收藏网站</a>
          <span></span>
          <router-link to='/register'>
            <a>注册商家账号</a>
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
            <el-form ref="sizeForm" :model="sizeForm" :rules="rules">
              <el-form-item prop="clientName">
                <el-input type="text" v-model="sizeForm.clientName" placeholder="请输入姓名" class="username" maxlength="20"
                          style="margin-top: 38px;"/>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="text" v-model="sizeForm.password" placeholder="请输入密码" class="password" maxlength="20"/>
              </el-form-item>
              <el-form-item prop="phone">
                <el-input type="text" v-model="sizeForm.phone" placeholder="请输入手机号" class="password_again"
                          maxlength="20"/>
              </el-form-item>
              <el-form-item prop="verificationCode">
                <div class="clearfix message_code_box">
                  <el-input style="width: 180px" type="text" v-model="sizeForm.verificationCode" placeholder="请输入短信验证码"
                            maxlength="20" class="message_code myfl"/>
                  <a href="javascript:;" class="message_code_btn myfr" @click="sendShortMessageVerification"
                     v-if="sizeForm.isReissue">发送验证码</a>
                  <a href="javascript:;" class="message_code_btn myfr" @click="sendShortMessageVerification"
                     v-if="!sizeForm.isReissue">{{sizeForm.time}}<em> 重 发 </em></a>
                </div>
              </el-form-item>
              <el-form-item prop="agree" style="margin-top: -32px">
                <div class="my_agreement">
                  <input type="checkbox" name="agreement" value="1" checked>我已仔细阅读并同意接受
                  <a href="" target="_blank">《用户使用协议》</a>
                </div>
              </el-form-item>
              <el-form-item prop="">
                <el-button type="primary"
                           @click="onSubmit"
                           style="font-size: 18px;background-color: rgb(255,54,111);width: 310px;height: 48px;;color: white;border: none;margin-left: 13px;margin-top: -10px "
                >立即注册
                </el-button>
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

  import {obtainShortMessageVerification, register} from "../../api/register";
  import {errorMessage, successMessage} from "../../utils/Message";
  import {md5, startLoading} from "../../utils/common";

  export default {
    name: 'register',
    data() {
      return {
        sizeForm: {
          clientName: '',
          password: '',
          phone: '',
          verificationCode: '',
          agree: '',
          time: 60,
          isReissue: true
        },
        rules: {
          clientName: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
          phone: [
            {required: true, message: '请输入手机号', trigger: 'blur'},
          ],
          verificationCode: [
            {required: true, message: '请输入短信验证码', trigger: 'blur'},
          ],
        }
      }
    },
    methods: {

      onSubmit() {
        this.$refs['sizeForm'].validate((valid) => {
          if (valid) {
            let loading =  startLoading({app:this,text:'注册中，请稍等........'});
            return new Promise((resolve, reject) => {
              register({
                clientName: this.sizeForm.clientName,
                password: md5(this.sizeForm.password),
                phone: this.sizeForm.phone,
                verificationCode: this.sizeForm.verificationCode
              }).then(response => {
                successMessage('注册成功！');
                loading.close();
                this.$router.push({path: '/',})
              })
            })
          } else {
            return false;
          }
        })
      },

      sendShortMessageVerification() {
        if (!this.sizeForm.phone) return errorMessage('请输入电话号码！');
        let loading =  startLoading({app:this,text:'获取验证短信中........'});
        return new Promise((resolve, reject) => {
          obtainShortMessageVerification({phone: this.sizeForm.phone}).then(response => {
            successMessage('验证码已发送！');
            loading.close();
            this.sizeForm.isReissue = false;
            let app = this;
            let clearTime = setInterval(function () {
              app.sizeForm.time--;
              if (app.sizeForm.time === 0) {
                app.sizeForm.isReissue = true;
                app.sizeForm.time = 60;
                clearInterval(clearTime)
              }
            }, 1000)
          })
        })
      }
    }
  }
</script>

<style scoped>
  .inputwidth {
    width: 180px !important;
  }
</style>
