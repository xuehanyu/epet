<template>
  <div class="header-quick">
    <a href="https://wap.epet.com/main.html?pet_type=dog">
      <span class="icon1"></span>
    </a>
    <a href="https://wap.epet.com/category.html">
      <span class="icon2"></span>
    </a>
    <a href="https://wap.epet.com/cart/">
      <span class="icon4" id="getCartNum"></span>
    </a>
    <a href="https://wap.epet.com/orders/user.html">
      <span class="icon5"></span>
    </a>
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
  .header-quick
    width: 100%;
    position fixed
    bottom 0
    left 0
    background: #fff;
    border-bottom: 1px solid #d7d7d7;
    overflow: hidden;
    height 55px
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
      & >.icon5
        bg-img(5)
</style>
