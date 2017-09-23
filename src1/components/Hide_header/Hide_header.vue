<template>
  <div class="container">
    <div class="download">
      <div class="overflow ">
        <span class="closebtn">
        <img id="close_down_bar" src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png">
      </span>
        <div class="appdowimg">
          <a href="https://wap.epet.com/download.html?do=market&amp;utm_source=baidu-wap-pz&amp;utm_type=source" style="display: block;">
            <img src="https://img2.epetbar.com/nowater/2017-07/03/10/211547bb51dd23758f74fb86e9d7aae5.png@!water                              ">
          </a>
        </div>
      </div>
    </div>
    <div class="hideHeader">
      <div class="head_top">
          <a href="javascript:void(0)" class="go-back"></a>
          <span class="head_top_title">【E宠商城】宠物商城_宠物用品_宠物狗_宠物店_宠物网</span>
          <span class="pull_right"></span>
      </div>
      <div class="header-quick">
        <a href="https://wap.epet.com/main.html?pet_type=dog">
          <span class="icon1"></span>
          <p>首页</p>
        </a>
        <a href="https://wap.epet.com/category.html">
          <span class="icon2"></span>
          <p>商品分类</p>
        </a>
        <a href="https://wap.epet.com/cart/">
          <span class="icon4" id="getCartNum"><em>0</em></span>
          <p>购物车</p>
        </a>
        <a href="https://wap.epet.com/orders/user.html">
          <span class="icon5"></span>
          <p>我的e宠</p>
        </a>
      </div>
    </div>
    <div class="indexheader">
      <div class="search_container">
        <div class="epet-search ">
          <div class="location">
            <a href="https://wap.epet.com/place.html?pet_type=dog&amp;fw=0">
              <span class="dogStation c89">狗狗站</span>
              <span class="c89">|</span>
              <span data-name="my-place" class="myposition">重庆</span>
              <i class="icon_down"></i>
            </a>
          </div>
          <p class="search-text">
            <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
              <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
              <span class="eico"></span>
            </a>
          </p>
          <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
            <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png"></a>
        </div>
      </div>
      <!--<div class="switchtype">
        <div type="dog" class="go-dog pointer dog"></div>
        <div class="changepop bgfff">
          <div class="cartc-bg db"></div>
          <div class="cartc-box rela overflow" style="overflow: hidden; display: block;">
            <div class="main"><p class="ftc c999 ft16 rela">DOG<b class="b-line c000 ft12">▁</b></p>
              <p class="ftc mt20 ft20 c666">亲爱的小主</p>
              <p class="ftc c333 ft20">您即将进入<span>狗狗站</span></p>
              <ul class="clearfix ftc change-ul">
                <li type="cat" class="fl pet1 cat"><img
                  src="//static.epetbar.com/static_web/wap/src/images/change-cat.png">
                  <div class="pet1name">猫猫站</div>
                </li>
                <li type="dog" class="fl pet2 mainpet rela dog"><img
                  src="//static.epetbar.com/static_web/wap/src/images/change-dog1.png">
                  <div>狗狗站</div>
                  <b class="current-line c000 ft12">▁</b> <a href="javascript:;"
                                                             class="cfff ft14 ftc once-into mt15 dib">立即进入</a></li>
                <li type="fish" class="fl pet3 fish"><img
                  src="//static.epetbar.com/static_web/wap/src/images/change-fish.png">
                  <div class="pet3name">水族站</div>
                </li>
              </ul>
            </div>
          </div>
          <a href="javascript:;" class="cartc-close afff ft20 ftc c666"><img
            src="//static.epetbar.com/static_web/wap/src/images/close2.png"></a></div>
      </div>-->
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .container
    position relative
    width 100%
    height 100%
    .overflow
      width 100%
      height 55px
      .closebtn
        display inline-block
        width 19px
        height 22px
        position absolute
        top 14px
        left 7px
        & > img
          width 100%
      .appdowimg
        width 100%
        height 100%
        & > a >img
          width 100%
          vertical-align middle
    .hideHeader
      display none
      width 100%
      .head_top
        display flex
        width 100%
        height 50px
        line-height 50px
        border-bottom 1px solid #f3f3f3
        padding 0 14px
        position relative
        .go-back
          display block
          background-image url("./img_head/personal-bico1.png")
          background-repeat no-repeat
          background-size 9px 17px
          width 22px
          height 20px
          position absolute
          margin-top 17px
        .head_top_title
          width 90%
          display block
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          margin 0 17px
          font-size 18px
          color #333
          font-family '微软雅黑'
        .pull_right
          display block
          width 20px
          height 20px
          margin-top 14px
          margin-left 10px
          background-image url("./img_head/imgtk-new.png")
          background-repeat no-repeat
          background-size 20px 20px
          position absolute
          top 0
          right 12px
      .header-quick
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #d7d7d7;
        overflow: hidden;
        padding: 10px 0;
        & > a
          display inline-block
          float left
          text-align center
          width 25%
          color #333
          & > .icon1
            bg-img(1)
          & >.icon2
            bg-img(2)
          & >.icon4
            bg-img(4)
            & >em
              display: inline-block
              height: 22px
              width: 22px
              color: #fff
              text-align center
              line-height: 18px
              font-size: 12px
              background: red
              border-radius: 1em
              border: #fff solid 2px
              position: relative
              top: -.5em
              left: 1em
              font-style normal
          & >.icon5
            bg-img(5)
          & > p
            color #666
            font-size 14px
            text-align center
            line-height 22px




    .indexheader
      width 100%
      font-size 14px
      .search_container
        width 100%
        padding 5px 10px
        .epet-search
          display flex
          align-items center
          padding 8px 0
          text-align center
          .location
            position relative
            margin-right 20px
            .c89
              clolor #898989
            .myposition
              font-size 13px
            .icon_down
              position: absolute;
              top: 6px;
              right: -11px;
              border-width: 4px;
              font-size: 0;
              line-height: 0;
              border-style: solid solid dotted;
              border-color: #898989 transparent transparent;
          .search-text
            width 60%
            position relative
            &>a
              color: #333
              &>input
                width: 100%;
                border: 0;
                height: 25px;
                background: #e9e9e9;
                border-radius: 4px;
                color: #bcbcbc;
                text-indent: 10px;
                font-size: 13px;
                outline: 0;
              & .eico
                width: 11px;
                height: 11px;
                position: absolute;
                right: 5px;
                top: 0;
                bottom: 0;
                margin: auto 0;
                background-position: 0 0;
                background url("./img_head/search.png") no-repeat
                background-size 11px auto
          .epet-category
            display block
            & > img
              width 25px
              margin-left 10px
              vertical-align middle
</style>
