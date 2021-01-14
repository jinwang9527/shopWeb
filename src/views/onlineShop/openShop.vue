<template>
  <div>

    <div class="head">
      <div class="mask">
        <el-row>
          <el-col :span="3" style="margin-left: 100px">
            <div class="title">
              <div>
                <p> 吹牛逼网 </p>
                <p> jwlearn.com</p>
              </div>
            </div>
          </el-col>
          <el-col :span="1">
            <div style="font-size: 30px;color: white;margin-top: 45px">
              招商
            </div>
          </el-col>
          <el-col :span="1" style="margin-left: 20px" v-for="(item,index) of  topButton" :key="index">
            <router-link :to=item.path>
              <div :class="item.classStyle">
                <a> {{item.text}} </a>
              </div>
            </router-link>
          </el-col>
        </el-row>
        <el-row>
          <div>
            <el-col :span="24" style="margin-top: 2%;text-align: center;font-size: 60px;color: white">
              <div>
                吹牛逼网免费开店
              </div>
            </el-col>
            <el-col :span="24" style="margin-top: 1%;text-align: center;font-size:35px;color: rgb(201,201,200)">
              <div>
                让天下没有难做的生意
              </div>
            </el-col>

            <el-row>
              <div style="margin-top: 13%">
                <el-col :span="11">
                  <el-button type="primary" round
                             class="personalShop">个人店铺入驻 &nbsp; >
                  </el-button>
                </el-col>
                <el-col :span="11">
                  <el-button type="primary" round class="enterprise">企业店铺入驻 &nbsp; ></el-button>
                </el-col>
              </div>
            </el-row>
          </div>
        </el-row>
      </div>
      <div>
        <el-row :getter="20" style="margin-left: 25%; margin-top: 1%;">
          <el-col :span="4" v-for="(item,index) of icons" :key="index">
            <el-row>
              <el-col :span="24" style="text-align: center">
                <img :src="item.path" style="width: 60px;height: 60px"/>
              </el-col>
            </el-row>
            <el-row style="margin-top: 18%;font-size: 28px;font-weight: bolder">
              <el-col :span="24" style="text-align: center">
                <span> {{ item.text }} </span>
              </el-col>
            </el-row>
            <el-row style="margin-top: 10%;font-size: 15px;font-weight: bolder;color: rgb(201,201,200)">
              <el-col :span="24" style="text-align: center">
                <span> {{ item.note }} </span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-row style="margin-top: 5%">
          <el-col :span="24" style="font-size: 40px;text-align: center">
             <span> 吹牛逼教程 </span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10" style="margin-left: 30%;margin-top: 3%">
            <div>
              <video
                id="myVideo"
                class="video-js vjs-big-play-centered vjs-fluid"
              >
                <source
                  :src=process.env.FTP_VIDEO+'/music.mp4'
                  type="video/mp4"
                >
              </video>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-top: 3%">
        <el-col :span="24" style="text-align: center;font-size: 30px">
            <span>
            加入吹牛，一起走向起飞之路，未来你将成为你们
          </span>
        </el-col>
      </el-row>
        <el-row style="margin-top: 3%">
            <el-col :span="24" style="text-align: center">
              <img src="../../assets/img/foot.png" style="height: 100%;width: 63%"/>
            </el-col>
        </el-row>
        <el-row style="margin-top: 3%">

        </el-row>
      </div>
    </div>

  </div>
</template>


<script>

  import moreUserIcon from '../../assets/img/moreUserIcon.png'
  import openShopIcon from '../../assets/img/openShopIcon.png'
  import resourcesIcon from '../../assets/img/resourcesIcon.png'
  import supportIcon from '../../assets/img/supportIcon.png'

  export default {
    name: 'openShop',
    mounted() {
      this.initVideo()
    },
    data() {
      return {
        topButton: [
          {text: '0元开店', classStyle: 'headText', path: ''},
          {text: '开店教程', classStyle: 'headText', path: ''},
          {text: '常见问题', classStyle: 'headText', path: ''},
        ],

        icons: [
          {text: '免费开店', note: '0元入驻，免费开吹牛逼店', classStyle: 'headText', path: openShopIcon},
          {text: '海量用户', note: '上亿平台消费者，不愁没订单', classStyle: 'headText', path: moreUserIcon},
          {text: '新商家成长扶持', note: '官方交流群，带你快速起飞', classStyle: 'headText', path: supportIcon},
          {text: '全球资源', note: '全球供应商丰富资源，无忧进货', classStyle: 'headText', path: resourcesIcon},
        ],
        initVideo() {
          //初始化视频方法
          let myPlayer = this.$video(myVideo, {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            //播放器准备好之后，是否自动播放 【默认false】
            autoplay:true,
            //true/false 视频播放结束后，是否循环播放
            loop:true,
            language: 'zh-CN', // 设置语言
          });
        }
      }
    }

  }
</script>


<style scoped>
  .head {
    width: 100%;
    height: 528px;
    z-index: -10;
    background: url("../../assets/img/openShop.png") center center / cover no-repeat;
    filter: alpha(opacity=80); /*设置透明度为60%*/
  }

  .title {
    font-size: 35px;
    margin-top: 30px;
    font-style: oblique;
    font-weight: bold;
    margin-right: 100px;
    color: white;
    width: 100%;
    text-align: center;
  }

  .mask {
    width: 100%;
    height: 528px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .headText {
    color: #999ea8;
    margin-top: 55px;
    font-size: 16px;
  }

  a:hover {
    color: red;
  }

  .personalShop {
    float: right;
    width: 172px;
    height: 56px;
    font-size: 18px;
    background-color: rgb(255, 83, 0);
    border: 0;
    margin-right: -5%
  }

  .enterprise {
    float: left;
    width: 172px;
    height: 56px;
    margin-left: 14%;
    font-size: 18px;
    background-color: rgb(255, 83, 0);
    border: 0
  }

</style>
