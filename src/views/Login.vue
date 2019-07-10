<template>
<div class="container">
    <div class="row mt-5 pt-5">
      <!-- 轮播图 -->
      <div class="col-md-6 col-sm-12">
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
          <li class="active" data-slide-to="0" data-target="#login"></li>
          <li  data-slide-to="1" data-target="#login"></li>
          <li  data-slide-to="2" data-target="#login"></li>
        </ul>
      </div>
      <div class="col-md-6 col-sm-12">
        <p class="m_login h2 title font-weight-blod">登录</p>
        <!-- 显示内容 -->
        <div class="d-flex mt-5">
          <!-- <label  class="my_small lab" >*</label> -->
          <input v-model="phone"  id="name" @blur="valiPhone" placeholder="请输入手机号/邮箱" type="text" class="w-50 form-control m_l ">
          <span :class="vali1">{{phonetip}}</span>
        </div>
        <div class="d-flex mt-5">
          <!-- <label for="" class="my_small lab">密码*</label> -->
          <input v-model="upwd" id="upwd" @blur="valiPass" placeholder="密码" type="password" class="w-50 form-control m_l ">
          <span :class="vali2">{{upwdtip}}</span>
        </div>
        <button id="signup" class="btn bg-primary w-50 m_li mt-5" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          phone:"",
          phonetip:"",
          upwd:"",
          upwdtip:"",
          vali1:"",
          vali2:""
        }
    },
    methods:{
      valiPhone(){
        //正则 验证手机号是否符合规则
        // var reg=/^1[3-9]\d{9}$/;
        var reg=/^([a-zA-Z0-9]{3,11})|([A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4})$/;
        //验证手机号
        if(!reg.test(this.phone)){
          this.phonetip="请输入手机号或邮箱";
          this.vali1="vali_fail"
        }else{
          this.phonetip="正确";
          this.vali1="vali_success"
        }
      },
      valiPass(){
         //正则 验证手机号是否符合规则
        var reg=/^\d{6}$/;
        //验证手机号
        if(!reg.test(this.upwd)){
          this.upwdtip="请输入6-8位密码";
          this.vali2="vali_fail"
        }else{
          this.upwdtip="正确";
          this.vali2="vali_success"
        }
      },
      login(){
        //获取用户名和密码
        var u = this.phone;
        console.log(u);
        var p = this.upwd;
        //用正则验证用户名和密码
        var ureg=/^([a-zA-Z0-9]{3,11})|([A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4})$/ ;
        var preg=/^[a-zA-Z0-9]{3,8}$/;
        //如果用户名不符合规则  提示用户 
        if(!ureg.test(u)){
          alert("请输入3-11位的用户名");
          return
        }
        if(!preg.test(p)){
          alert("请输入3-8位密码");
          return;
        }else{
          //axios 请求 
          //url
          //params
          // var obj={phone:u,upwd:p}
          console.log("这是登陆的密码"+p);
          console.log("这是登陆的用户"+u)
          this.axios.post("user/login",`phone=${u}&upwd=${p}`,
          // contentType='application/x-www-form-urlencoded',
         ).then((result)=>{
            if(result.data.code==200){
              alert(result.data.msg);
              this.$router.push("/")
            }else{
              alert(result.data.msg);
            }
          })
        }

      }
    }
}
</script>
<style scoped>
/* 创建三个样式 用于验证用 */
/* 获得焦点时的样式 (提示时，span的样式)*/
/* .vali{

} */
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
  margin-top: 35%;
  color:#3b3e40;
}
.w-25{
  width:10% !important;
}
.btn_phone{
  background-color:#f7f8f9;
  cursor: auto !important;
}
.w_50{
  width:58%;
}
.m_l{
  margin-left: 16%;
}
.m_li{
  margin-left: -18%;
}
.m_login{
  margin-left: -19%;
}
.my_small{
  font-size: 0.75rem;
}

/********/

/* .m_l{
  margin-left: 14%;
} */
/* .m_login{
  margin-left: 35%;
} */
#phone_tip{
  position: absolute;
  top:284px;
  left:362px;
}
#upwd_tip{
  position: absolute;
  top:367px;
  left:362px;
}
.lab{
  position: absolute;
  left:245px;
  line-height: 40px;
}
.smaller{
  font-size: 8px;
  margin-top:-15px;
}


</style>
