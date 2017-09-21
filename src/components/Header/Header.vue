<template>
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
                background url("./img/search.png") no-repeat
                background-size 11px auto
        .epet-category
          display block
          & > img
            width 25px
            margin-left 10px
            vertical-align middle
</style>
