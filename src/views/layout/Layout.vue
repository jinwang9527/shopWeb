<template>
  <div>
    <div class="head">
      <el-row>
        <el-col :span="12" class="topHead">
             <span>
               喵，欢迎来吹牛逼
             </span>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <router-link to='/login' style="margin-top: -16px;">
            <a>请登录</a>
          </router-link>
          &nbsp; &nbsp;
          <span>
              <router-link to='/register' style="margin-top: -16px;">
               <a>免费注册</a>
              </router-link>
            </span>
        </el-col>

        <el-col :span="12" class="topHead">
          <a>我的商城</a>
          &nbsp; &nbsp;
          <a> <i class="el-icon-shopping-cart-2" style="color: red;font-weight:bold;"></i> 购物车</a>
          &nbsp; &nbsp;
          <a>收藏夹</a>
        </el-col>
      </el-row>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Layout'
  }
</script>

<style scoped>
  .head {
    width: 100%;
    height: 35px;
    background-color: rgb(245, 245, 245);
  }

  a:hover {
    color: red;
  }

  .topHead {
    text-align: center;
    line-height: 35px;
    font-size: 10px;
  }
</style>
