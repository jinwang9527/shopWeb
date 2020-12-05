<template>
  <div>
    <div class="login_header">
      <div class="header_center clearfix">
        <div class="myfl">
          <a href="/"><img src="../../assets/img/logo.png" style="height: 79px;width: 80px;margin-top: 10px"/></a>
          <span>欢迎登陆</span>
        </div>
        <div class="myfr">
          <router-link to='/home'>
            <a >返回首页</a>
          </router-link>
          <span></span>
          <a href="javascript:;" class="collection_web">收藏网站</a>
        </div>
      </div>
    </div>
    <div class="login_content clearfix">
      <div class="login_box myfr">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" :stretch="true">
          <el-tab-pane label="买 家 登 录" name="0"></el-tab-pane>
          <!--<el-tab-pane label="商家登录" name="1"></el-tab-pane>-->
        </el-tabs>
        <el-form ref="loginForm" :model="form" label-width="7px" style="margin-top: 5px" :rules="rules">
          <el-form-item prop="account">
            <el-input v-model="form.account" placeholder="手机号/用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="登录密码"></el-input>
          </el-form-item>
          <el-form-item prop="" label-width="255px" style="margin-top: -20px">
            <router-link to='/' style="margin-top: -16px;">
              <span style="color: rgb(153,153,153)">忘记密码？</span>
            </router-link>
          </el-form-item>
          <el-form-item prop="">
            <el-button type="primary"
                       @click="onSubmit('loginForm')"
                       style="font-size: 18px;background-color: rgb(255,54,111);width: 310px;height: 48px;;color: white;border: none;margin-left: 13px;margin-top: -10px "
            >立即登录</el-button>
          </el-form-item>
          <el-form-item>
            <p class="entry_mode clearfix">
              <span class="myfl">你也可以用以下方式登录:</span>
              <router-link to='/register' style="margin-top: -16px;">
                <a class="myfr">
                  <em></em>
                  <i>快速注册</i>
                </a>
              </router-link>
            </p>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="register_bottom" style="margin-top: 196px">2020年 &nbsp; 吹牛逼有限公司 &nbsp;&nbsp;粤ICP17003883号-1 &nbsp;&nbsp;版权所有</div>  </div>
</template>


<script>

  import { mapActions } from 'vuex'

  export default {
    name:'login',
    data(){
      return {
        activeName: 'first',
        form:{
          account:null,
          password:null,
          loginSign:'0',
        },
        rules:{
          account:[
            { required: true, message: '请输入手机号/用户名', trigger: 'blur' },
          ],
          password:[
            { required: true, message: '请输入登录密码', trigger: 'blur' },
          ]
        }
      }
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
        this.form.loginSign= tab.name
      },
      onSubmit(formName){
        this.$refs[formName].validate(valid =>{
          if (valid){
            this.$store.dispatch('Login',this.form).then(() =>{
              this.$router.push({ path: '/home/homePage' })
            }).catch(error =>{
              this.$router.push({ path: '/' })
            })
          }else{
            return false;
          }
        });


      }
    }
  }


</script>

<style  >

</style>
