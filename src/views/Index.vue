<template>
    <div>
        <my-header></my-header>
        <div class="container">
            <!-- 商品展示栏 -->
            <div  class="nav d-flex justify-content-between mt-2" >
                <div class="nav-item "><a href="#" class="p-0 my_black nav-link "> <img src="../image/header/mavic2.svg" class="mb-1" alt=""><br><span>"御"Mavic</span></a> </div>
                <div class="nav-item "><a href="#" class="p-0 my_black nav-link "> <img src="../image/header/ic-Tiny-70x56.svg" alt=""><br><span>灵眸Osmo</span></a></div>
                <div class="nav-item "><a href="#" class="p-0 my_black nav-link "> <img src="../image/header/spark.svg" class="mb-1" alt=""><br><span>"晓"Spark</span></a></div>
                <div class="nav-item "><a href="#" class="p-0 my_black nav-link "> <img src="../image/header/tello.svg" class="mb-1" alt=""><br><span>精灵Phathon</span></a></div>
                <div class="nav-item "><a href="#" class="p-0 my_black nav-link "> <img src="../image/header/goggles.svg" class="mb-1" alt=""><br><span>DJI飞行眼镜</span></a></div>
                <div class="nav-item "><a href="#" class="p-0 my_black nav-link "> <img src="../image/header/inspire.svg" class="mb-1" alt=""><br><span>"悟"inspire</span></a></div>
                <div class="nav-item "><a href="#" class="p-0 my_black nav-link "> <img src="../image/header/ronin.svg" class="mb-1" alt=""><br><span>如影Rouin</span></a></div>
                <div class="nav-item "><a href="#" class="p-0 my_black nav-link "> <img src="../image/header/developer-tools.svg" class="mb-1" alt=""><br><span>开发者套件</span></a></div>
                <div class="nav-item "><a href="#" class="p-0 my_black nav-link "> <img src="../image/header/tello.svg" class="mb-1" alt=""><br><span>睿炙科技|特洛</span></a></div>
                <div class="nav-item "><a href="#" class="p-0 my_black nav-link "> <img src="../image/header/service.svg" class="mb-1" alt=""><br><span>增值服务</span></a></div>
            </div>
            <!-- 1.轮播图 -->
            <div id="dem"  class="carousel" data-ride="carousel">  
            <div class="carousel-inner" >
                <div class="carousel-item active">
                <img src="../image/index/首页banner_3840_960__01.jpg" class="w-100">
                </div>
                <div class="carousel-item">
                <img src="../image/index/store_PC_3840.jpg" class="w-100">
                </div>
            </div>
            <!-- 2.左右箭头 -->
            <a href="#dem" class="carousel-control-next" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
            <a href="#dem" class="carousel-control-prev" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <!-- 3.轮播指示符 -->
            <ul class="carousel-indicators">
                <li class="active" data-slide-to="0" data-target="#dem"></li>
                <li data-slide-to="1" data-target="#dem"></li>
            </ul>
            </div>
            <!-- 主推区域布局 -->
            <div>
                <!-- 一楼上部 -->
                <div class="row one_top m-0 mt-5 ">
                    <!-- 第一个盒子 -->
                    <div class="col-md-4 col-sm-12 p-0  bg-white">
                        <div class="mr-md-2 mb-sm-2 bg-white ">
                            <!-- 图片1 -->
                            <div class="box_1">
                                <img src="../image/index/首页主推产品图_528_352.png" class="w-75 img_1" alt="">
                            </div>
                            <div class="card  border-0 w-100 text-center p-0">
                                <div class="card-header bg-white border-0 card_1 ">
                                    <router-link to="/detail" target="_self" class="h5 font-weight-blod ">灵眸OSMO口袋云台相机</router-link>
                                </div>
                                <div class="card-body">
                                    <p class="my_m_font">轻小便捷·超清画质·稳定拍摄</p>
                                    <p >智能且配备独立屏幕，轻松拍摄，记录生活从此变得简单又好玩</p>
                                </div>
                                <div class="card=footer">
                                    <span>￥2499</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 第二个盒子 -->
                    <div class="col-md-4 col-sm-12 p-0 bg-white">
                        <div class="mr-md-2 mb-sm-2 ">
                        <!-- 图片2 -->
                        <div class="box_2">
                            </div>
                            <div class="card  border-0 w-100 text-center">
                                <div class="card-header bg-white border-0 card_1">
                                    <a href="#" class="h5 font-weight-blod">"御"MVIC 2</a>
                                </div>
                                <div class="card-body">
                                    <p class="my_m_font">性能强大的相机·OsuSyunc 2.0·移动延时拍摄</p>
                                    <p>画质旗舰，变焦先锋。新一代消费级航拍旗舰之作</p>
                                </div>
                                <div class="card=footer">
                                    <span>￥9888</span>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <!-- 第三个盒子 -->
                    <div class="col-md-4 col-sm-12 p-0 bg-white">
                        <!-- 图片3 -->
                        <div>
                            <div class="box_3 ">
                            </div>
                            <div class="card  border-0 w-100 text-center ">
                                <div class="card-header bg-white border-0 card_1">
                                    <a href="#" class="h5 font-weight-blod">"御"MVIC AIR</a>
                                </div>
                                <div class="card-body">
                                    <p class="my_m_font">4k三轴云台相机·一键球形全景·三向环境感知</p>
                                    <p>可折叠，体积小，性能强，只为与你随行，展开新视界</p>
                                </div>
                                <div class="card=footer">
                                    <span>￥4999</span>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <!-- 一楼下部 -->
                <div class="row one_footer m-0 mt-2">
                    <div class="col-md-5 col-sm-12 p-0 ">
                        <div class="mr-md-2 mb-sm-2 text-center pt-3 box_4  big_box">
                        <h4>DJI以旧换新</h4>
                        <h4>闲置电子设备，低价换新机</h4>
                        </div>
                    </div>
                    <div class="col-md-7 col-sm-12 p-0 ">
                        <div class=" box_5 bg-secondary pt-3 text-center big_box">
                        <h4>教育折扣</h4>
                        <h4>最高九折，等你申请</h4> 
                        </div>
                    </div>
                </div>
            </div>
            <!-- 分割区 -->
            <div class="d-flex text-center justify-content-between mt-5">
                <h2>"御"Mavic</h2>
                <a href="#">更多></a>
            </div>
            <!-- 主一楼布局 -->
            <div class="mt-2">
                <div class="row two_top m-0">
                    <!-- 第一个盒子 -->
                    <div class="col-md-6 col-sm-12 p-0  bg-white ">
                        <div class="mr-md-2 mb-sm-12 big_box">
                        <div class="img_1f text-center">
                            <img src="../image/f1/small_55e19eff-2d6a-4d75-8e63-b9b5822fd298.png" class="w-50 tup" alt="">
                        </div>
                        <div class="card card_1f_1 border-0 text-center ">
                                <div class="card-header bg-white border-0"><a href="./productdetail.html" class="h4">"御"Maciv 2</a></div>
                                <div class="card-body pb-0"><p>画质旗舰，变焦先锋。新一代消费级航拍旗舰之作</p></div>
                                <div class="card-footer  bg-white border-0 pb-0"><p>￥9888</p></div>
                        </div>
                        </div>       
                    </div>
                    <!-- 第二个盒子 -->
                    <div class="col-md-6 col-sm-12  p-0 ">
                        <div class="text-center">
                            <video class="w-100" controls autoplay muted>
                                <source src="../video/djistore_mavic2_1200800.mp4" type="video/mp4">  
                            </video>
                        </div>
                    </div>
                </div>
                <div class="row two_center m-0 mt-2">
                    <!-- 第三个盒子 -->
                    <div class="col-md-3 col-sm-12 p-0 ">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                            <div class=" bg-white box_6 ">
                                <img class="w-100 img_hover_1" src="" alt="">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <a href="#" class="h6">"御"Mavic 2 & Dji飞行眼镜竞速版</a>
                                </div>
                                <div class="card-footer border-0 bg-white">￥10847  <del class="ml-3"> ￥11487</del></div>
                            </div>
                        </div>
                    </div>
                    <!-- 第四个盒子 -->
                    <div class="col-md-3 col-sm-12  p-0 ">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                            <div class="mr-md-2 mb-sm-2">
                                <div class=" bg-white box_7 ">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 pt-0">
                                        <a href="#" class="h6">"御"Mavic AIR</a>
                                    </div>
                                    <div class="card-footer border-0 bg-white ">￥4999</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 第五个盒子 -->
                    <div class="col-md-3 col-sm-12 p-0">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                            <div class="mr-md-2 mb-sm-2">
                                <div class=" bg-white box_8 ">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 pt-0">
                                        <a href="#" class="h6">"御"Mavic Pro 铂金版</a>
                                    </div>
                                    <div class="card-footer border-0 bg-white  ">￥6499</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 第六个盒子 -->
                    <div class="col-md-3 col-sm-12  p-0">
                        <div class=" big_box  bg-white">
                            <div class="mr-md-2 mb-sm-2">
                                <div class=" bg-white box_9 ">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 pt-0">
                                        <h6>"御"Mavic 2 全能配件包</h6>
                                    </div>
                                    <div class="card-footer border-0 bg-white pt-0">￥2399 <del>￥3272</del></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 下一层商品展示台 -->
                <div class="row two_bottom m-0">
                    <!-- 下层第一个盒子 -->
                    <div class="col-md-3 col-sm-12 p-0 ">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                            <div class="mr-md-2 mb-sm-2">
                                <div class=" bg-white box_bottom_1 ">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 p-0">
                                        <a href="#" class="h6">"御"Mavic 2 全能配件包</a>
                                    </div>
                                    <div class="card-footer border-0 bg-white ">￥2399 <del>￥3272</del></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 下层第二个盒子 -->
                    <div class="col-md-3 col-sm-12  p-0">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                            <div class="mr-md-2 mb-sm-2">
                                <div class=" bg-white box_bottom_2 ">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 p-0">
                                        <h6>"御"Mavic 2 智能飞行电池</h6>
                                    </div>
                                    <div class="card-footer border-0 bg-white ">￥899 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 下层第三个盒子 -->
                    <div class="col-md-3 col-sm-12 p-0">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white ">
                            <div class="mr-md-2 mb-sm-2">
                                <div class=" bg-white box_bottom_3 ">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 p-0">
                                        <h6>"御"Mavic 2 降噪螺旋桨</h6>
                                    </div>
                                    <div class="card-footer border-0 bg-white ">￥79 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 下层第四个盒子 -->
                    <div class="col-md-3 col-sm-12  p-0">
                        <div class="big_box  bg-white">
                            <div class="mr-md-2 mb-sm-2">
                                <div class=" bg-white box_bottom_4 ">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 p-0">
                                        <h6>"御"Mavic 2 Pro ND 减光镜套装</h6>
                                    </div>
                                    <div class="card-footer border-0 bg-white ">￥599 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 分割区 -->
            <div class="d-flex text-center justify-content-between mt-5">
                <h2>灵眸 Osmo</h2>
                <a href="#">更多></a>
            </div>
            <!-- 主二楼布局 -->
            <div class="mt-2">
                <div class="row two_top m-0">
                    <!-- 第一个盒子 -->
                    <div class="col-md-6 col-sm-12 p-0 ">
                        <div class="mr-md-2 mb-sm-2 big_box bg-white">
                            <div class="img_1f text-center">
                                <img src="../image/f2/small_93f9bb7f-b1a4-49d2-82c5-0ed851cedcae@2x.png" class="w-50" alt="">
                            </div>
                            <div class="card card_1f_1 border-0 text-center mt-5">
                                    <div class="card-header bg-white border-0 py-0"><a href="javascript:;" target="_blank" class="h4">灵眸 Omso 口袋云台相机</a></div>
                                    <div class="card-body p-0 "><p class="mb-0">轻巧，便捷，智能且配备独立屏幕,记录生活从此变得简单又好玩</p></div>
                                    <div class="card-footer  bg-white border-0 p-0"><p>￥2499</p></div>
                            </div>               
                        </div>
                    </div>
                    <!-- 第二个盒子---视频 -->
                    <div class="col-md-6 col-sm-12  p-0 ">
                        <div class=" bg-white">
                            <video class="w-100" controls autoplay muted>
                                <source src="../video/djistore_op_1200800.mp4" type="video/mp4">  
                            </video>
                        </div>
                    </div>
                </div>
                <!-- 二楼一层 -->
                <div class="row two_center m-0 mt-2">
                    <!-- 二楼一层第一个盒子 -->
                    <div class="col-md-3 col-sm-12 p-0 ">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white ">
                            <div class=" bg-white two_floor_1 ">
                                <img class="w-100 img_hover_1" src="" alt="">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <a href="" class="h6 font-weight-normal">灵眸 Osmo 手机云台 2</a>
                                </div>
                                <div class="card-footer border-0 bg-white">￥899</div>
                            </div>
                        </div>
                    </div>
                    <!-- 二楼一层第二个盒子 -->
                    <div class="col-md-3 col-sm-12  p-0">
                        <div class="mr-md-2 mb-sm-2  big_box  bg-white">
                            <div class=" bg-white two_floor_2 ">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">Osmo Pocket 拓展配件包 </h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥649 &nbsp;&nbsp;<del>￥856</del></div>
                            </div>
                        </div>
                    </div>
                    <!-- 二楼一层第三个盒子 -->
                    <div class="col-md-3 col-sm-12 p-0">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                            <div class=" bg-white two_floor_3 ">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">Osmo Pocket 移动充电盒 </h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥699</div>
                            </div>
                        </div>
                    </div>
                    <!-- 二楼一层第三个盒子 -->
                    <div class="col-md-3 col-sm-12  p-0">
                        <div class=" big_box  bg-white">
                            <div class=" bg-white two_floor_4 ">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">Osmo Pocket 磁吸ND减光镜套件 </h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥299</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 二楼底层 -->
                <div class="row two_bottom m-0">
                    <!-- 二楼底层第一个盒子 -->
                    <div class="col-md-3 col-sm-12 p-0 ">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                            <div class=" bg-white two_floor_bottom_1 ">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">Osmo Pocket 云台控制拨轮 </h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥329</div>
                            </div>
                        </div>
                    </div>
                    <!-- 二楼底层第二个盒子 -->
                    <div class="col-md-3 col-sm-12  p-0">
                        <div class="mr-md-2 mb-sm-2  big_box bg-white">
                            <div class=" bg-white two_floor_bottom_2 ">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">Osmo Pocket 无限模块</h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥329</div>
                            </div>
                        </div>
                    </div>
                    <!-- 二楼底层第三个盒子 -->
                    <div class="col-md-3 col-sm-12 p-0 ">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                            <div class=" bg-white two_floor_bottom_3 "></div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">Osmo Pocket 拓展配件转接套</h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥149</div>
                            </div>
                        </div>
                    </div>
                    <!-- 二楼底层第四个盒子 -->
                    <div class="col-md-3 col-sm-12  p-0">
                        <div class=" big_box  bg-white">
                            <div class=" bg-white two_floor_bottom_4 ">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal mb-0">PGYTECH 灵眸Osmo口袋云台相机-手机固定支架 </h6>
                                </div>
                                <div class="card-footer border-0 bg-white pt-0">￥199</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 分割区 -->
            <div class="d-flex text-center justify-content-between mt-5">
                <h2>"晓" Spark</h2>
                <a href="#">更多></a>
            </div>
            <!-- 三楼布局 -->
            <div class="mt-2">
                    <div class="row two_top m-0">
                        <!-- 第一个盒子 -->
                        <div class="col-md-6 col-sm-12 p-0 ">
                            <div class="mr-md-2 mb-sm-2 big_box bg-white">
                                <div class="img_1f text-center">
                                    <img src="../image/f3/small_beceb8fe-c7d6-41c9-9d36-e6b608c7f059.png" class="w-50" alt="">
                                </div>
                                <div class="card card_1f_1 border-0 text-center mt-5">
                                        <div class="card-header bg-white border-0 py-0"><h4>"晓" Spark</h4></div>
                                        <div class="card-body p-0 "><p class="mb-0">掌上起落，手势控制，一键短片，手掌大小的"晓"Spark,让你尽享飞行乐趣</p></div>
                                        <div class="card-footer  bg-white border-0 p-0"><p>￥3199</p></div>
                                </div>               
                            </div>
                        </div>
                        <!-- 第二个盒子---轮播图片
                        <div class="col-md-6 col-sm-12  p-0 ">
                            <div id="demo" class="carousel" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="./image/f3/spark1.png" class=" w-100" alt="">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="./image/f3/spark2.png"class="w-100"alt="">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="./image/f3/spark3.png"class="w-100" alt="">
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <!-- 第二个盒子---轮播图片 -->
                        <div class="col-md-6 col-sm-12  p-0 ">
                            <div  class="carousel" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="../image/f3/spark1.png" class=" w-100" alt="">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../image/f3/spark2.png" class="w-100" alt="">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../image/f3/spark3.png" class="w-100" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 三楼一层 -->
                    <div class="row two_center m-0 mt-2">
                        <!-- 三楼一层第一个盒子 -->
                        <div class="col-md-3 col-sm-12 p-0 ">
                            <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                                <div class=" bg-white three_floor_1 ">
                                    <img class="w-100 img_hover_1" src="" alt="">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 p-0">
                                        <h6 class="font-weight-normal">Spark 智能飞行电池</h6>
                                    </div>
                                    <div class="card-footer border-0 bg-white">￥299</div>
                                </div>
                            </div>
                        </div>
                        <!-- 三楼一层第二个盒子 -->
                        <div class="col-md-3 col-sm-12  p-0">
                            <div class="mr-md-2 mb-sm-2  big_box  bg-white">
                                <div class=" bg-white three_floor_2 ">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 p-0">
                                        <h6 class="font-weight-normal">快拆 折叠螺旋桨 </h6>
                                    </div>
                                    <div class="card-footer border-0 bg-white">￥49</div>
                                </div>
                            </div>
                        </div>
                        <!-- 三楼一层第三个盒子 -->
                        <div class="col-md-3 col-sm-12 p-0">
                            <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                                <div class=" bg-white three_floor_3">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 p-0">
                                        <h6 class="font-weight-normal">Spark 桨叶保护罩 </h6>
                                    </div>
                                    <div class="card-footer border-0 bg-white">￥99</div>
                                </div>
                            </div>
                        </div>
                        <!-- 三楼一层第四个盒子 -->
                        <div class="col-md-3 col-sm-12  p-0">
                            <div class=" big_box  bg-white">
                                <div class=" bg-white three_floor_4 ">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 p-0">
                                        <h6 class="font-weight-normal">Spark 电池管家 </h6>
                                    </div>
                                    <div class="card-footer border-0 bg-white">￥399</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 三楼底层 -->
                    <div class="row two_bottom m-0">
                        <!-- 三楼底层第一个盒子 -->
                        <div class="col-md-3 col-sm-12 p-0 ">
                            <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                                <div class=" bg-white three_floor_bottom_1 ">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 p-0">
                                        <h6 class="font-weight-normal">Spark 移动充电盒优惠套装 </h6>
                                    </div>
                                    <div class="card-footer border-0 bg-white">￥799 &nbsp; <del>￥1097</del></div>
                                </div>
                            </div>
                        </div>
                        <!-- 三楼底层第二个盒子 -->
                        <div class="col-md-3 col-sm-12  p-0">
                            <div class="mr-md-2 mb-sm-2  big_box  bg-white">
                                <div class=" bg-white three_floor_bottom_2 ">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 p-0">
                                        <h6 class="font-weight-normal">Spark 移动充电盒便捷包</h6>
                                    </div>
                                    <div class="card-footer border-0 bg-white">￥99</div>
                                </div>
                            </div>
                        </div>
                        <!-- 三楼底层第三个盒子 -->
                        <div class="col-md-3 col-sm-12 p-0">
                            <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                                <div class=" bg-white three_floor_bottom_3 "></div>
                                
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 p-0">
                                        <h6 class="font-weight-normal">PGYTECH Spark 护手器</h6>
                                    </div>
                                    <div class="card-footer border-0 bg-white">￥45 &nbsp;<del>￥59</del></div>
                                </div>
                            </div>
                        </div>
                        <!-- 三楼底层第四个盒子 -->
                        <div class="col-md-3 col-sm-12  p-0">
                            <div class=" big_box bg-white ">
                                <div class=" bg-white three_floor_bottom_4 ">
                                </div>
                                <!-- 下面卡片内容 -->
                                <div class="card border-0 text-center">
                                    <div class="card-header bg-white border-0 p-0">
                                        <h6 class="font-weight-normal">DJi 电池安全袋</h6>
                                    </div>
                                    <div class="card-footer border-0 bg-white">￥59</div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <!-- 分割区 -->
            <div class="d-flex text-center justify-content-between mt-5">
                <h2>悟"Inspire</h2>
                <a href="#">更多></a>
            </div>
                <!-- 图片需要更改 -->
            <!-- 四楼布局 -->
            <div class="mt-2">
                <div class="row two_top m-0">
                    <!-- 第一个盒子 -->
                    <div class="col-md-6 col-sm-12 p-0 ">
                        <div class="mr-md-2 mb-sm-2 big_box bg-white">
                            <div class="img_1f text-center">
                                <img src="../image/f3/small_beceb8fe-c7d6-41c9-9d36-e6b608c7f059.png" class="w-50" alt="">
                            </div>
                            <div class="card card_1f_1 border-0 text-center mt-5">
                                    <div class="card-header bg-white border-0 py-0"><h4>"晓" Spark</h4></div>
                                    <div class="card-body p-0 "><p class="mb-0">掌上起落，手势控制，一键短片，手掌大小的"晓"Spark,让你尽享飞行乐趣</p></div>
                                    <div class="card-footer  bg-white border-0 p-0"><p>￥3199</p></div>
                            </div>               
                        </div>
                    </div>
                    <!-- 第二个盒子---轮播图片 -->
                    <div class="col-md-6 col-sm-12  p-0 ">
                        <div class="carousel" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="../image/f3/spark1.png" class=" w-100" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img src="../image/f3/spark2.png" class="w-100" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img src="../image/f3/spark3.png" class="w-100" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 四楼一层 -->
                <div class="row two_center m-0 mt-2">
                    <!-- 四楼一层第一个盒子 -->
                    <div class="col-md-3 col-sm-12 p-0 ">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                            <div class=" bg-white three_floor_1 ">
                                <img class="w-100 img_hover_1" src="" alt="">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">Spark 智能飞行电池</h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥299</div>
                            </div>
                        </div>
                    </div>
                    <!-- 四楼一层第二个盒子 -->
                    <div class="col-md-3 col-sm-12  p-0">
                        <div class="mr-md-2 mb-sm-2  big_box  bg-white">
                            <div class=" bg-white three_floor_2 ">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">快拆 折叠螺旋桨 </h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥49</div>
                            </div>
                        </div>
                    </div>
                    <!-- 四楼一层第三个盒子 -->
                    <div class="col-md-3 col-sm-12 p-0">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                            <div class=" bg-white three_floor_3">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">Spark 桨叶保护罩 </h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥99</div>
                            </div>
                        </div>
                    </div>
                    <!-- 四楼一层第四个盒子 -->
                    <div class="col-md-3 col-sm-12  p-0">
                        <div class=" big_box  bg-white">
                            <div class=" bg-white three_floor_4 ">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">Spark 电池管家 </h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥399</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 四楼底层 -->
                <div class="row two_bottom m-0">
                    <!-- 四楼底层第一个盒子 -->
                    <div class="col-md-3 col-sm-12 p-0 ">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                            <div class=" bg-white three_floor_bottom_1 ">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">Spark 移动充电盒优惠套装 </h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥799 &nbsp; <del>￥1097</del></div>
                            </div>
                        </div>
                    </div>
                    <!-- 四楼底层第二个盒子 -->
                    <div class="col-md-3 col-sm-12  p-0">
                        <div class="mr-md-2 mb-sm-2  big_box  bg-white">
                            <div class=" bg-white three_floor_bottom_2 ">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">Spark 移动充电盒便捷包</h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥99</div>
                            </div>
                        </div>
                    </div>
                    <!-- 四楼底层第三个盒子 -->
                    <div class="col-md-3 col-sm-12 p-0">
                        <div class="mr-md-2 mb-sm-2 big_box  bg-white">
                            <div class=" bg-white three_floor_bottom_3 "></div>
                            
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">PGYTECH Spark 护手器</h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥45 &nbsp;<del>￥59</del></div>
                            </div>
                        </div>
                    </div>
                    <!-- 四楼底层第四个盒子 -->
                    <div class="col-md-3 col-sm-12  p-0">
                        <div class=" big_box bg-white ">
                            <div class=" bg-white three_floor_bottom_4 ">
                            </div>
                            <!-- 下面卡片内容 -->
                            <div class="card border-0 text-center">
                                <div class="card-header bg-white border-0 p-0">
                                    <h6 class="font-weight-normal">DJi 电池安全袋</h6>
                                </div>
                                <div class="card-footer border-0 bg-white">￥59</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
}
</script>

<style scoped>
    .font_color{
    color: #6c7073;
    }
    .my_header,.my_footer{
    width:100%;
    }
    .my_black{
    color:black;
    }
    .carousel-control-prev,.carousel-control-next{
    width:4%;height: 20%;
    background-color:transparent;
    top:40%;
    border-radius: 0.25rem;
    }
    .carousel-control-prev:hover{
    background-color:rgba(0,0,0,0.3);
    }
    .carousel-control-next:hover{
    background-color:rgba(0,0,0,0.3);
    }
    .carousel-indicators li{
    width:8px;
    height:8px;
    border-radius: 50%;
    margin:0 5px;
    background-color:gray;
    }
    .carousel-indicators .active{
    background-color:#fff;
    }
    .one_top>div>div{
    height:520px;
    }
    .one_footer>div>div{
    height:400px;
    }
    .two_top>div>div,.two_center>div>div,.two_bottom>div>div{
    height:400px;
    }
    .img_1{
    position: relative;
    top:40px;
    left:-20px;
    }
    /* .card_1{
    margin-top: 0px;
    } */
    .box_1:hover{
    background: url("../image/index/首页主推产品图_793_528.jpg") no-repeat;
    background-size: contain;
    }
    .box_1,.box_2,.box_3{
    height:264px;
    background-image: url("../image/index/首页主推产品图_800_320.jpg");
    background-size: cover;
    }
    .box_2{
    background-image: url("../image/floor_1/mavic.png");
    }
    .box_2:hover{
    background: url("../image/floor_1/1-mavic-2-hover.png") no-repeat center;
    background-size: contain
    }
    .box_3{
    background-image: url("../image/floor_1/2-mavic_air.png");
    background-size: cover;
    }
    .box_3:hover{
    background: url("../image/floor_1/2-mavic_air-hover.png") no-repeat center;
    background-size: contain
    }
    .box_4,.box_5{
    height:400px;
    background-image: url("../image/index/4.png");
    background-size: cover;
    }   
    .box_5{
    background-image: url("../image/index/5.png");
    background-size: cover;
    }
    .my_m_font{
    font-size: 14px;
    }
    .img_1f{
    height:288px;
    }
    .tup{
    animation: bounceInLeft  2s ;
    }
    .card_1f_1{
    position: relative;
    top:-90px;
    /* left:15px; */
    }
    .video{
    width: 465px;
    height: 400px;
    }
    /* 盒子高 */
    .box_6,.box_7,.box_8,.box_9,.box_bottom_1,.box_bottom_2,.box_bottom_3,.box_bottom_4,.two_floor_1,.two_floor_2,.two_floor_3,.two_floor_4,.two_floor_bottom_1,.two_floor_bottom_2,.two_floor_bottom_3,.two_floor_bottom_4{
    height:288px;
    background: url("../image/f1/small_4db147ca-8a81-4dcb-a84e-0ef2bc52c0cc.png") no-repeat center;
    background-size: contain;
    }
    .box_6:hover{
    background-image: url("../image/f1/a195087f-85e4-43b2-bcd6-6b185d9d137b.jpg");
    background-size: cover;
    
    }
    .box_7{
    background: url("../image/f1/small_beceb8fe-c7d6-41c9-9d36-e6b608c7f059.png") no-repeat center;
    background-size: contain;
    }
    .box_7:hover{
    background: url("../image/f1/12067932-25e2-4838-b180-812068dadfb1.jpg") no-repeat center;
    background-size: cover;
    }
    .box_8{
    background: url("../image/f1/1-mavic_2_-cover.png") no-repeat center;
    background-size: contain;
    }
    .box_8:hover{
    background: url("../image/f1/590ab73c-ecf7-407a-aab1-3754d37fece0.jpg") no-repeat center;
    background-size: cover;
    }
    .box_9{
    background: url("../image/f1/small_65184e3b-5caa-4434-879b-87f884abedee.png") no-repeat center;
    background-size: contain;
    }
    .box_9:hover{
    background: url("../image/f1/9ed042d1-0b48-4627-a286-008404471c79.jpg") no-repeat center;
    background-size: cover;
    }
    .box_bottom_1{
    background: url("../image/f1/small_6d50b412-d52a-4b24-b74b-519cd4a4dea7.png") no-repeat center;
    background-size: contain;
    }
    .box_bottom_1:hover{
    background: url("../image/f1/363b460c-db2a-40d1-9a0e-26625f0ae6e9.jpg") no-repeat center;
    background-size: cover;
    }
    .box_bottom_2{
    background: url("../image/f1/small_571a44a1-4e86-46f2-915d-12305c6c8dd2.png") no-repeat center;
    background-size: contain;
    }
    .box_bottom_2:hover{
    background: url("../image/f1/0c487aeb-b436-4db0-8f3a-d63cae9602b9.jpg") no-repeat center;
    background-size: cover;
    }
    .box_bottom_3{
    background: url("../image/f1/small_0bc545ac-ba25-4e0b-873f-c62e89ae6cc3.png") no-repeat center;
    background-size: contain;
    }
    .box_bottom_3:hover{
    background: url("../image/f1/a826d366-16e3-4047-97a7-271fde796c4c.png") no-repeat center;
    background-size: cover;
    }
    .box_bottom_4{
    background: url("../image/f1/small_404decb1-3ebe-4716-856a-7a01369ef1e3@2x.png") no-repeat center;
    background-size: contain;
    }
    .box_bottom_4:hover{
    background: url("../image/f1/e08b344e-9e09-4c35-9c98-7898217c1e96.jpg") no-repeat center;
    background-size: cover;
    }
    /* 二楼盒子样式 */
    .two_floor_1{
    background: url("../image/f2/small_dba9dc08-ae6b-4179-9dc0-53bb1c562e59@2x.png") no-repeat center;
    background-size: contain;
    }
    .two_floor_2{
    background: url("../image/f2/small_a70cdaea-23c8-46f0-a6e2-924dd69ffcad@2x.png") no-repeat center;
    background-size: contain;
    }
    .two_floor_3{
    background: url("../image/f2/small_999ec8d4-a09a-4159-a098-6e39c6a38b26@2x.png") no-repeat center;
    background-size: contain;
    }
    .two_floor_3:hover{
    background: url("../image/f2/5f84a8e6-1812-482e-a6e6-807c8522cf4e.jpg") no-repeat center;
    background-size:cover;
    }
    .two_floor_4{
    background: url("../image/f2/small_5a3bed07-9aef-496b-92b5-078b917f32d0@2x.png") no-repeat center;
    background-size: contain;
    }
    .two_floor_4:hover{
    background: url("../image/f2/aa0f9062-8c18-4233-9e12-1dfc0e9860c3.jpg") no-repeat center;
    background-size:cover;
    }
    /* 二楼下部第一个 */
    .two_floor_bottom_1{
    background: url("../image/f2/small_6765ab39-4b5b-4994-a29a-bab6c41f3184@2x.png") no-repeat center;
    background-size: contain;
    }
    .two_floor_bottom_1:hover{
    background: url("../image/f2/2165eeb8-8a5b-4717-8334-8b9c2c077e63.jpg") no-repeat center;
    background-size: cover;
    }
    .two_floor_bottom_2{
    background: url("../image/f2/small_caad08db-b327-46ba-bbea-28c0fd5b20a2@2x\ \(1\).png") no-repeat center;
    background-size: contain;
    }
    .two_floor_bottom_2:hover{
    background: url("../image/f2/4b1a5ec7-fd71-4438-8a84-a90b7c76f990.jpg") no-repeat center;
    background-size: cover;
    }
    .two_floor_bottom_3{
    background: url("../image/f2/small_8b5c1d9b-eba7-4cb1-ab6d-40dd6415b7d7@2x.png") no-repeat center;
    background-size: contain;
    }
    .two_floor_bottom_3:hover{
    background: url("../image/f2/2165eeb8-8a5b-4717-8334-8b9c2c077e63.jpg") no-repeat center;
    background-size: cover;
    }
    .two_floor_bottom_4{
    background: url("../image/f2/small_1d8d88ee-de2e-4621-8d70-e710dfa975fe@2x.png") no-repeat center;
    background-size: contain;
    }
    .two_floor_bottom_4:hover{
    background: url("../image/f2/cbefb6e7-80f0-48ff-9c7f-65c2be61abbb.jpg") no-repeat center;
    background-size: cover;
    }
    /* 大盒子的hover效果 */
    .big_box:hover{
    box-shadow: 0 1px 2px gray; /*底边阴影*/
    /* box-shadow: 0px 1px  0px  0px  gray; */
    outline: none;
    } 
    /* 三楼所有盒子 */
    .three_floor_1,.three_floor_2,.three_floor_3,.three_floor_4,.three_floor_bottom_1,.three_floor_bottom_2,.three_floor_bottom_3,.three_floor_bottom_4{
    height: 288px;
    background: url("../image/f3/e517b967-1d9b-4602-a551-7ca2b56d2386.jpg") no-repeat center;
    background-size:contain;
    }
    .three_floor_1:hover{
    background:url("../image/f3/3bf0162a-43f4-4948-86a2-e7c2890ae7b3.jpg") no-repeat center;
    background-size: cover;
    }
    .three_floor_2{
    background:url("../image/f3/small_0bc545ac-ba25-4e0b-873f-c62e89ae6cc3.png") no-repeat center;
    background-size: contain;
    }
    .three_floor_2:hover{
    background:url("../image/f3/240ef441-a46f-4d35-979f-bd3735eccc3d.jpg") no-repeat center;
    background-size: cover;
    }
    .three_floor_3{
    background:url("../image/f3/small_a0a65e02-e071-4d43-902a-1ee74279c016@2x.png") no-repeat center;
    background-size: contain;
    }
    .three_floor_3:hover{
    background:url("../image/f3/e517b967-1d9b-4602-a551-7ca2b56d2386.jpg") no-repeat center;
    background-size: cover;
    }
    .three_floor_4{
    background:url("../image/f3/small_1b744ae0-8ef5-49e9-9fca-9fb15596b339@2x.png") no-repeat center;
    background-size: contain;
    }
    .three_floor_4:hover{
    background:url("../image/f3/b97f1327-d40d-43fc-b063-d89b65a883cf.jpg") no-repeat center;
    background-size: cover;
    }
    .three_floor_bottom_1{
    background:url("../image/f3/small_324d9946-6913-4ee5-9f31-a885f9821d21@2x.png") no-repeat center;
    background-size: contain;
    }
    .three_floor_bottom_1:hover{
    background:url("../image/f3/2f6723f5-ff87-425f-be41-1fd4607139ca.jpg") no-repeat center;
    background-size: cover;
    }
    .three_floor_bottom_2{
    background:url("../image/f3/small_5b937d4d-2faa-46fc-a82c-376f929bbed1@2x.png") no-repeat center;
    background-size: contain;
    }
    .three_floor_bottom_2:hover{
    background:url("../image/f3/f40f1399-d9db-4c63-8e37-53a2413e1f2b.jpg") no-repeat center;
    background-size: cover;
    }
    .three_floor_bottom_3{
    background:url("../image/f3/small_a786a200-4843-4f7e-a3e6-eb132015b800@2x.png") no-repeat center;
    background-size: contain;
    }
    .three_floor_bottom_3:hover{
    background:url("../image/f3/22e538ac-31af-42df-8e3a-cd64000b439e.jpg") no-repeat center;
    background-size: cover;
    }
    .three_floor_bottom_4{
    background:url("../image/f3/small_9fc22f4d-0372-41cd-82aa-08e77cbc5b3a@2x.png") no-repeat center;
    background-size: contain;
    }
    a:hover{
        text-decoration: none;
    }
</style>
