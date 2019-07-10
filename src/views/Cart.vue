<template>
    <div>
        
        <div class="container">
            <!-- 头部内容 -->
            <div class="row carthead border-bottom">
                <div class="col-2 mt-2">
                    <img src="../image/header/logo.svg" class="w-25" alt="">
                    <span class="h5">商城</span>
                </div>
                <!-- 面包屑导航 -->
                <div class="col-4 offset-6">
                    <ul class="breadcurmb d-flex list-unstyled mt-2 text-center">
                        <li class="breadcrumb-item "><a class="breadcrumb-link text-dark my_med" href="javascript:;">我的账号</a></li>
                        <li class="breadcrumb-item bread"><a class="breadcrumb-link text-dark my_med " href="javascript:;">中国大陆(简体中文/￥CNY)</a></li>
                    </ul>
                </div>
            </div>
            <h2 class="mt-4">我的购物车</h2>
            <!-- 表格 -->
            <!-- 表头 -->
            <div class="row mt-4 border-bottom">
                <div class="col-6 text-muted">商品</div>
                <div class="col-2 text-muted">价格</div>
                <div class="col-2 text-muted">数量</div>
                <div class="col-2 text-muted mb-2">小计</div>
            </div>
            <!-- 内容 -->
            <!-- 购物车栏1 -->
            <div class="row border-bottom item">
                <div class="col-6 text-muted ">
                    <input type="checkbox">
                    <img src="../image/index/small_a70cdaea-23c8-46f0-a6e2-924dd69ffcad.png" class="w-25  ml-2" alt="">
                    <div class="float-right mt-lg-5 mt-md-4 pr-5">
                        <span class=" text-dark">Osmo Pocket 拓展配件包</span><br>
                        <span>发货时间：订单付款后一个工作日</span>
                    </div>
                </div>
                <div class="col-2 text-muted mt-5">￥649</div>
                <!-- 按钮组 -->
                <div class="col-2 text-muted mt-5 btns">
                    <button class="btn">-</button>
                    <span class="mx-1">1</span>
                    <button class="btn">+</button>
                </div>
                <div class="col-1 text-muted mb-2 mt-5 ">￥649</div>
                <div class="col-1 text-muted mb-2 mt-5"><a href="javascript:;">删除</a></div>
            </div>
            <!-- 购物车栏2 -->
            <div class="row border-bottom item">
                <div class="col-6 text-muted ">
                    <input type="checkbox">
                    <img src="../image/index/small_a70cdaea-23c8-46f0-a6e2-924dd69ffcad.png" class="w-25  ml-2" alt="">
                    <div class="float-right mt-lg-5 mt-md-4 pr-5">
                        <span class=" text-dark">Osmo Pocket 拓展配件包</span><br>
                        <span>发货时间：订单付款后一个工作日</span>
                    </div>
                </div>
                <div class="col-2 text-muted mt-5">￥649</div>
                <!-- 按钮组 -->
                <div class="col-2 text-muted mt-5 btns">
                    <button class="btn">-</button>
                    <span class="mx-1">1</span>
                    <button class="btn">+</button>
                </div>
                <div class="col-1 text-muted mb-2 mt-5">￥649</div>
                <div class="col-1 text-muted mb-2 mt-5"><a href="javascript:;">删除</a></div>
            </div>
            <!-- 购物车栏3 -->
            <div class="row border-bottom">
                <div class="col-6 text-muted ">
                    <p class="my_med text-dark mb-0 mt-2">购买即可获得价值支付金额1%的DJI币返利 - 购买越多，返利越多。</p>
                    <a href="javascript:;" class="my_small">了解更多优惠详情 ></a>
                    <p class="my_med text-dark my-1 mt-3">有优惠券或者 DJI 币？</p>
                    <p class="my_med text-muted">您可以在结账的时候使用优惠券或者 DJI 币抵扣。</p>
                </div>
                <div class="col-4 offset-2">
                    <h4 class="text-right mb-2" >总计（不包括运费）: <span id="total"> ¥649</span></h4>
                    <p class="my-med text-right">邮费：免费</p>
                    <p class="text-muted my_med text-right">支持支付宝、微信、银联、顺丰到付、花呗和招行分期。</p>
                </div>
            </div>
            <!-- 下面的两个btn -->
            <div class="row">
                <div class="col-4 ">
                    <button class="btn w-100 mt-3 form-control border-info  p-3"><a class="text-dark"   href="./index.html">继续购物</a></button>
                </div>
                <div class="col-4 offset-4">
                    <button class="btn w-100 mt-3 form-control border-info bg-primary p-3"><a class="text-white"   href="#">去结算</a></button> 
                </div>
            </div>
        </div> 
        <my-footer></my-footer>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    }
}
</script>
<style scoped>
    .carthead {
  height: 40px; }

.my_med {
  font-size: 0.8rem; }

.shop:hover {
  color: blue; }
a:hover{
  text-decoration: none;
}
.font_small{
  font-size: 0.7rem;
}
.font_color{
  color: #6c7073;
}
.font_black{
  color:#000;
}
</style>
