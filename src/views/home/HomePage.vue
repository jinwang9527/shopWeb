<template>
  <div>
    <!-- 顶部图片 -->
    <div class="propaganda">
      <a><img src="../../assets/img/propaganda.jpg"/></a>
    </div>

    <!-- 搜索框 -->
    <div class="serach">
      <el-row>
        <el-col :span="8" style="text-align: center">
          <div
            style="float: right;font-size: 35px;margin-top: 18px;font-style:oblique;color: rgb(255,114,0);font-weight: bold;margin-right: 100px">
            <router-link to='/home'>
              <a>
                <div>吹牛逼网</div>
                <div> jwlearn.com</div>
              </a>
            </router-link>
          </div>
        </el-col>

        <el-col :span="16">
          <el-row>
             <el-col :span="12">
               <el-input v-model="searchData" placeholder="秋裤" class="searchInput"></el-input>
             </el-col>
            <el-col :span="12">
              <el-button class="searchBut">搜 索</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>





    </div>

    <!-- 商品展示 -->
    <div class="exhibition" style="border: 1px solid red;margin: 0 auto">
      <div style="margin: 0 auto;width: 1000px;height: 300px">
        <el-row>
          <el-col :span="5" style="border: 1px solid red">
            1
          </el-col>

          <el-col :span="15" style="border: 1px solid red">
            222
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        searchData: null
      }
    }
  }
</script>


<style scoped>

  .propaganda {
    width: 100%;
    height: 71px;
    background-color: rgb(255, 132, 182);
    text-align: center;
  }

  .serach {
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 120px;
  }

  .exhibition {
    background-color: rgb(244, 244, 244);
    width: 100%;
    height: 1900px;
  }

  .searchInput {
    border: 2px solid red;
    width: 100%;
    margin-top: 44px;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    border-right:none
  }

  .searchBut {
    background-color: rgb(255, 117, 0);
    width: 80px;
    height: 47px;
    margin-left: -1px;
    margin-top: 42px;
    color: white;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    font-size: 18px;
  }
</style>
