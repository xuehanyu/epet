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





</style>
