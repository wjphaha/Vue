<template>
    <div class="container">
    <div class="row mt-5 pt-5">
      <div class="col-md-6 col-sm-12">
        <!-- 轮播图 -->
        <div id="login" class="carousel" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../image/login/1.e61fc72.jpg" class="h-100" alt="">
            </div>
            <div class="carousel-item">
              <img src="../image/login/2.643c4c1.jpg" class="h-100" alt="">
            </div>
            <div class="carousel-item">
              <img src="../image/login/3.61f61fa.jpg" class="h-100" alt="">
            </div>
          </div>
        </div>
        <!-- 左右箭头 -->
        <a href="#login" class="carousel-control-next" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
        <a href="#login" class="carousel-control-prev" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <!-- 轮播指示图 -->
        <ul class="carousel-indicators">
          <li  data-slide-to="0" data-target="#login"></li>
          <li class="active" data-slide-to="1" data-target="#login"></li>
          <li  data-slide-to="2" data-target="#login"></li>
        </ul>
      </div>
      <div class="col-md-6 col-sm-12 ">
        <p class="m_l_log mt-5"><img src="../image/login/下载.svg" class="w-25" alt=""></p>
        <p class="m_l_log mt-4 h2 title font-weight-light">注册</p>
        <!-- 选项卡导航 -->
        <!-- 选项卡 -->
        <ul class="nav nav-tabs m_l_header mt-5  w-50 ">
          <li  class="nav-item  "><a href="#tab1" class="nav-link ml-3 " data-toggle="tab">手机注册</a></li>
          <li  class="nav-item "><a href="#tab2" class="nav-link " data-toggle="tab">邮箱注册</a></li>
        </ul>
        <!-- 显示内容 -->
        <div class="tab-content">
          <!-- 两个盒子，一个是手机注册的，一个是邮箱注册的 -->
          <!-- 手机注册 -->
          <div id="tab1" class="tab-pane active">
            <!-- <div class="d-flex mt-5  m_l">
              <input id="phone" type="text" class="w_50 form-control " placeholder="请输入手机号*">
            </div>
            <input type="text" class="w-50 form-control m_l mt-5" placeholder="短信验证码*">
            <button class="btn bg-primary w-50 m_l my-5">下一步</button><br>
            <a href="./login.html" class="text-center mt-3  w-50 m_login ">立即登录</a> -->
            <div class="d-flex mt-5">
              <!-- <label for="" class="my_small lab">请输入合法手机号</label> -->
              <input id="phone" v-model="phone"  @blur="valiPhone"  placeholder="请输入合法手机号" type="text" class="w-50 form-control m_l ">
              <span :class="phoneClass">{{phonetip}}</span>
            </div>
            <div class="d-flex mt-5">
              <!-- <label for="" class="my_small lab">密码*</label> -->
              <input id="upwd" v-model="upwd" @blur="valiPass" placeholder="密码*" type="password" class="w-50 form-control m_l ">
              <span :class="upwdClass">{{upwdtip}}</span>
            </div>
            <button @click="register" class="btn bg-primary w-50 m_li mt-5">下一步</button>
          </div>
          <!-- 邮箱注册 -->
          <div id="tab2" class="tab-pane">
            <!-- 添加点击事件 -->
              <!-- <input id="email" onfocus="email_focus()" onblur="email_blur()" type="text" class="w-50 form-control m_l mt-5" placeholder="邮箱*">
              <span id="email_tip" class="w-50"></span>
              <input id="upwd"onfocus="upwd_focus()" onblur="upwd_blur()" type="text" class="w-50 form-control m_l mt-5" placeholder="密码*">
              <p id="upwd_tip"></p>
              <input type="text" class="w-50 form-control m_l mt-5" placeholder="再次输入密码*"> -->
              <div class="d-flex mt-5">
                <!-- <label for="" class="my_small lab">请输入合法邮箱</label> -->
                <input id="email" v-model="email" @blur="valiEmail" placeholder="请输入合法邮箱"  type="text" class="w-50 form-control m_l ">
                <span :class="emailClass">{{emailtips}}</span>
              </div>
              <div class="d-flex mt-5">
                <!-- <label for="" class="my_small lab">密码*</label> -->
                <input id="upwd1" @blur="valiPass1" v-model="upwd1" placeholder="密码*" type="password" class="w-50 form-control m_l ">
                <span :class="upwdClass1">{{upwdtip1}}</span>
              </div>
              <div class="d-flex mt-5">
                <!-- <label for="" class="my_small lab">再次输入密码*</label> -->
                <input id="upwd2" @blur="valiPass2" v-model="upwd2" placeholder="再次输入密码*" type="password" class="w-50 form-control m_l ">
                <span :class="upwdClass2">{{upwdtip2}}</span>
              </div>
              <div class=" m_li mt-3 my_small">
                <input type="checkbox">获取大疆最新产品、服务、软件升级等信息<br>
              </div>
              <div class=" m_li mt-3  my_small">
                <input type="checkbox">获取大疆最新产品、服务、软件升级等信息
              </div>
              <button id="register" @click="register" class=" btn bg-primary w-50 m_li my-3">提交</button><br>
              <router-link to="/login" class="text-center  w-50 m_login" target="_blank">立即登录</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          phone:"",
          upwd:"",
          upwd1:"",
          upwd2:"",
          email:"",
          phonetip:"",
          upwdtip:"",
          upwdtip1:"",
          upwdtip2:"",
          emailtips:"",
          phoneClass:{
            vali_success:false,
            vali_fail:false
          },
          upwdClass:{
            vali_success:false,
            vali_fail:false
          },
          upwdClass1:{
            vali_success:false,
            vali_fail:false
          },
          upwdClass2:{
            vali_success:false,
            vali_fail:false
          },
          emailClass:{
            vali_success:false,
            vali_fail:false
          }
        }
    },
    methods:{
      valiPhone(){
        //正则 验证手机号是否符合规则
        var reg=/^1[3-9]\d{9}$/;
        //验证手机号
        if(!reg.test(this.phone)){
          this.phonetip="手机号或邮箱";
          this.phoneClass.vali_fail=true
        }else{
          this.phonetip="正确";
          this.phoneClass.vali_fail=false
          this.phoneClass.vali_success=true
        }
      },
      valiPass(){
         //正则 验证手机号是否符合规则
        var reg=/^\d{6}$/;
        //验证手机号
        if(!reg.test(this.upwd)){
          this.upwdtip="请输入6-8位密码";
          this.upwdClass.vali_fail=true
        }else{
          this.upwdtip="正确";
          this.upwdClass.vali_fail=false
          this.upwdClass.vali_success=true
        }
      },
      valiPass1(){
         //正则 验证手机号是否符合规则
        var reg=/^\d{6}$/;
        //验证手机号
        if(!reg.test(this.upwd1)){
          this.upwdtip1="请输入6-8位密码";
          this.upwdClass1.vali_fail=true
        }else{
          this.upwdtip1="正确";
          this.upwdClass1.vali_fail=false
          this.upwdClass1.vali_success=true
        }
      },
      valiPass2(){
         //正则 验证手机号是否符合规则
        var reg=/^\d{6}$/;
        //验证手机号
        if(!reg.test(this.upwd2)){
          this.upwdtip2="请输入6-8位密码";
          this.upwdClass2.vali_fail=true
        }else{
          this.upwdtip2="正确";
          this.upwdClass2.vali_fail=false
          this.upwdClass2.vali_success=true
        }
      },
      valiEmail(){
         //正则 验证邮箱是否符合规则
        var reg=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
        //验证手机号
        if(!reg.test(this.email)){
          this.emailtips="请输入合法邮箱";
          this.emailClass.vali_fail=true
        }else{
          this.emailtips="正确";
          this.emailClass.vali_fail=false
          this.emailClass.vali_success=true
        }
      },
      register(){
        //获取用户名和密码  
        var e;
        var p;
        if(!this.phone && !this.email){
          console.log("不能为空")
          return
        }else if(!this.phone){
          p=this.upwd1;
          e=this.email;
          console.log("这是第一个密码"+p)
          console.log(111)
          console.log("这是邮箱"+e)
          this.axios.post("user/register",`email=${e}&upwd=${p}`).then((result)=>{
            if(result.data.code==200){
              alert(result.data.msg);
              // this.$router.push("/")
            }else{
              alert(result.data.msg);
            }
          })
        }else if(!this.email){
          p=this.upwd;
          e=this.phone;
          console.log("这是第二个密码"+p)
          console.log(2222)
          console.log("这是手机号"+e)
          this.axios.post("user/register",`phone=${e}&upwd=${p}`).then((result)=>{
            if(result.data.code==200){
              alert(result.data.msg);
              // this.$router.push("/")
            }else{
              alert(result.data.msg);
            }
          })
        }else{
          return
        }
        console.log("这是最后一个用户名"+e);
        console.log("这是最后一个密码"+p);        
        }
      }
    }

</script>
<style scoped>
.vali_success{
  background-color: green;
  background-image: url("../image/login/ok.png");
  background-repeat: no-repeat;
  background-position: left center;
  line-height: 40px;
  padding-left: 14px;
}
.vali_fail{
  background-color: red;
  background-image: url("../image/login/err.png");
  background-repeat: no-repeat;
  background-position: left center;
  line-height: 40px;
  padding-left: 14px;
}

  #login>div>div{
  height:858px;
}
.carousel-control-prev,
.carousel-control-next {
  height:15%;
  top:45%;
}
.carousel-control-prev-icon,
.carousel-control-next-icon{
  width:40px;
  height:40px;
} 
.carousel-indicators li{
  width:8px;
  height:8px;
  border-radius:50%;
}
.title{
  color:#707374;
}
.w-25{
  width:11% !important;
}
.btn_phone{
  background-color:#f7f8f9;
  cursor: auto !important;
}
.w_50{
  width:58%;
}
.m_l_log{
  margin-left:-13%;
}
.m_l{
  margin-left: 22%;
}
.m_li{
  margin-left: -5%;
}

.m_l_header{
  margin-left: 21%;
}
.m_login{
  margin-left: -5%;
}
.my_small{
  font-size: 0.75rem;
}
#email_tip{
  position: absolute;
  top:284px;
  left:362px;
}
#upwd_tip{
  position: absolute;
  top:367px;
  left:362px;
}

.lab {
    position: absolute;
    left: 210px;
    line-height: 40px;
}
</style>
