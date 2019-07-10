<template>
<header id="header">
  <div class="container">
    <div class="row nav_bg" v-show="headerText">
      <div class="col-md-2 col-sm-6 mt-1 small_center">
        <a href="#"  class="font_color ">DJI官网</a>
      </div>
      <div class="col-lg-6 col-md-5 mt-1 " >
        <p class="my_small font_color text-center">满 ¥99 顺丰包邮。支持支付宝、微信、银联、顺丰到付、花呗和招行分期，下单即享 1% DJI币返点。</p>
      </div>
      <div class="col-lg-4 col-md-5 col-sm-6 small_center">
        <!-- 面包屑导航 -->
        <ul v-show="show" class="breadcrumb bg-transparent list-unstyled ml-5 py-sm-0 small_center">
          <li class="breadcrumb-item  ">
            <span  class="font_color ">
              <img src="../image/header/cart_icon.svg" >
              <router-link  to="/cart" target="_blank" class="my_small font_color">购物车</router-link>
            </span>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/login" class="font_color my_small" target="_self">登录</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/register" class="font_color my_small" target="_self" >注册</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/" class="font_color my_small">中国大陆</router-link>
          </li>
        </ul>
        <!-- 面包屑导航  二选一-->
        <ul v-show="!show" class="breadcrumb bg-transparent list-unstyled ml-5 py-sm-0 small_center">
          <!-- <li class="breadcrumb-item  ">
            <span  class="font_color ">
              <img src="../image/header/cart_icon.svg" >
              <a  href="./shopping_cart.html" target="_blank" class="my_small font_color">购物车</a>
            </span>
          </li> -->
          <li class="breadcrumb-item">
            <a href="./login.html" class="font_color my_small" target="_blank">我的</a>
          </li>
          <li class="breadcrumb-item">
            <a href="javascript:;" @click="logout" class="font_color my_small" target="_blank" >注销</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#" class="font_color my_small">中国大陆</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 导航栏  -->
    <div class="row bg-white border-top border-bottom">
      <div class="col-md-2 class-sm-12 mt-2 small_center">
        <a href="javascript:;">
          <img src="../image/header/logo.svg" alt="">
          <span class="h6 my_black">商城</span>
        </a>
      </div>
      <div class="col-md-8 class-sm-12 text-center">
        <!-- 要用选项卡导航 -->
        <ul class="nav">
          <li  class="nav-item"><a @mouseover="display" v-show="headerText" @mouseout="hide" href="#" id="nav_hover" class="nav-link my_black ">商品分类</a></li>
          <li class="nav-item"><a href="#" v-show="headerText" class="nav-link my_black">使用场景</a></li>
          <li class="nav-item"><a href="#" v-show="headerText" class="nav-link my_black">以旧换新</a></li>
          <li class="nav-item"><a href="#" v-show="headerText" class="nav-link my_black">Select会员</a></li>
          <li class="nav-item"><a href="#" v-show="headerText" class="nav-link my_black">购机指南</a></li>
          <li class="nav-item"><a href="#" v-show="headerText" class="nav-link my_black">Dji商城APP</a></li>
          <li class="nav-item"><a href="#" v-show="headerText" class="nav-link my_black">优惠</a></li>
        </ul>
      </div>
      <div class="col-md-2 class-sm-12">
        <div class="input-group">
          <input type="text" class="border-0 form-control" placeholder="搜索商品...">
          <img src="../image/header/搜索.svg" alt="">
        </div>
      </div>
      <!-- 这个div是hover后的选项卡导航；竖着放的选项卡导航 -->
      <ul v-show="headDiv"  class="list-unstyled nav_content "  @mouseover="display">
        <li  class="mt-3 text-left"><a href="#"   @mouseover="show_content" @mouseout="hide_content">"御"Mavic</a></li>
        <li class="mt-3 text-left"><a href="#" >灵眸Osmo</a></li>
        <li class="mt-3 text-left"><a href="#" >"晓"Spark</a></li>
        <li class="mt-3 text-left"><a href="#" >精灵Phathon</a></li>
        <li class="mt-3 text-left"><a href="#" >DJI飞行眼镜</a></li>
        <li class="mt-3 text-left"><a href="#" >"悟"inspire</a></li>
        <li class="mt-3 text-left"><a href="#" >如影Rouin</a></li>
        <li class="mt-3 text-left"><a href="#" >行业应用&农业植保</a></li>
        <li class="mt-3 text-left"><a href="#" >系统模块</a></li>
        <li class="mt-3 text-left"><a href="#" >开发者套件</a></li>
        <li class="mt-3 text-left"><a href="#" >睿炙科技|特洛</a></li>
        <li class="mt-3 text-left"><a href="#" >增值服务</a></li>
      </ul>
      <!-- 分类右边的盒子 -->
      <div class="contentDiv" v-show="content">
        <div>
          <!-- 上面的盒子 -->
          <div class="text-left my-3">
            <span>"御"Mavic 2</span>
            <a href="javascript:;">查看所有</a>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <div>
              <img src="" alt="">1
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </div>
        <!-- 下边的盒子 -->
        <div>
          <div class="text-left my-3">
            <span>"御"Mavic 2</span>
            <a href="javascript:;">查看所有</a>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header> 
</template>
<script>
export default {
    data(){
        return{
          //开关用来显示隐藏登录或注销的
          show:true,
          //开关用来显示头部导航栏下的contentDiv的显示隐藏
          headDiv:false,
          content:false,
          screenWidth: document.body.clientWidth,
          headerText:true,
        }
    },
    mounted(){
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
          console.log(333333)
          console.log(window.screenWidth)
          if(this.screenWidth<=970){
            this.headerText=false
          }else{
            this.headerText=true
          }
        })()
      }
    },
    methods:{
      //鼠标进入商品分类 display  的事件
      display(){
        this.headDiv=true;
      },
      hide(){
        this.headDiv=false;
      },
      show_content(){
        this.content=true
      },
      hide_content(){
        this.content=false
      },
      logout(){
        this.show=true
      }
    },
}
</script>
<style scoped>
.contentDiv{
  width:650px;
}
a:hover{
  text-decoration: none
}
.nav_content{
  margin-left: 215px;
}
.breadcrumb-item + .breadcrumb-item::before{
  content:"|";
}
.my_black{
  color:black;
}
a:hover{
  border-bottom: 0;
}

#demo{
  margin-left: 20%;
  background: transparent;
  /* width:20%; */
  height:500px;
  display: none;
}
.font_color{
  color: #6c7073;
}
</style>
