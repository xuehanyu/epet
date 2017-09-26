<template>
  <!--<div>
    <div class="putPhone">
      <span class="phoneIcon"></span>
      <input type="text" placeholder="请输入手机号" class="text" name="username" id="username">
    </div>
    <div class="next">
      <a href="javascript:;" class="nextBtn">下一步</a>
    </div>
  </div>-->
<div>
  <div class="putPhone">
    <span class="phoneIcon"></span>
    <input type="text" placeholder="请输入手机号" class="text" name="username" id="username">
  </div>
  <div class="putPhone，imgCheck">
    <span class="img"></span>
    <input type="text" placeholder="图片验证码" class="text" >
  </div>
  <div class="putPhone">
    <span class="phoneIcon"></span>
    <input type="text" placeholder="请输入手机号" class="text" name="username" id="username">
  </div>
  <div class="putPhone">
    <span class="phoneIcon"></span>
    <input type="text" placeholder="请输入手机号" class="text" name="username" id="username">
  </div>
  <div class="putPhone">
    <span class="phoneIcon"></span>
    <input type="text" placeholder="请输入手机号" class="text" name="username" id="username">
  </div>
  <div class="putPhone">
    <span class="phoneIcon"></span>
    <input type="text" placeholder="请输入手机号" class="text" name="username" id="username">
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
  .putPhone
    margin-left 12px
    border-bottom #e2e2e2 solid 1px
    padding: 14px 0 14px 30px
    .phoneIcon
      float left
      display inline
      width 17px
      height 17px
      background url('./ico1.png') no-repeat
      background-size contain
      margin 2px 0 0 -25px
    .text
      display block
      height 21px
      width 100%
      font-size 13px
      border none
      padding 0
      color #b8b8b8
      border-radius 3px
      outline none
  .next
    margin-top 24px
    padding-top 18px
    text-align center
    .nextBtn
      background-color #d7d7d7
      color white
      display block
      margin 0 10%
      border-radius 30px
      font-size 15px
      line-height 20px
      padding 5px 0
      text-align center
  /*.imgCheck
    float left
    display inline
    width 17px
    height 17px
    background url('./ico1.png') no-repeat
    background-size contain
    margin 2px 0 0 -25px*/
</style>
