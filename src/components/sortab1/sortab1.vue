<template>
  <div class="boxContainer">
    <div class="leftbox" ref="leftbox">
      <ul class="list">
        <li data-id="88888" class="ftc bgfff on">
          <router-link to="/recommend"> 为您推荐</router-link>
        </li>
        <li data-id="5" class="ftc bgfff">狗狗主粮</li>
        <li data-id="6" class="ftc bgfff">狗狗零食</li>
        <li data-id="54" class="ftc bgfff">狗狗日用</li>
        <li data-id="53" class="ftc bgfff">狗狗玩具</li>
        <li data-id="48" class="ftc bgfff">狗狗保健</li>
        <li data-id="49" class="ftc bgfff">狗狗医疗</li>
        <li data-id="55" class="ftc bgfff">狗狗服饰</li>
        <li data-id="2652" class="ftc bgfff">狗狗牵引</li>
        <li data-id="2651" class="ftc bgfff">狗狗美容</li>
        <li data-id="50" class="ftc bgfff">狗狗香波</li>
        <li data-id="3288" class="ftc bgfff">狗狗书籍</li>
        <li data-id="3895" class="ftc bgfff">狗狗周边</li>
        <li data-id="3886" class="ftc bgfff">狗狗定制</li>
      </ul>
    </div>
    <div class="rightbox">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    created(){

      document.body.style.background="#f3f4f5"
    },
    data () {
      return {}
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll(this.$refs.leftbox,{click:true})

      })

    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .boxContainer
    width 100%
    overflow hidden
    position absolute
    height 100%
  .leftbox
    position fixed
    height 100%
    top 40px
    left 0
    bottom 45px
    padding-bottom 95px
    background white
    margin-bottom 95px
    .list
      width 100%
      li
        padding 15px 0
        border-bottom 1px solid #f3f4f5
        width 70px
        height 50px
        font-size 13px
        text-align center
      .on
        background #f3f4f5
        color #ed4044
  .rightbox
    position absolute
    top 40px
    width 100%
    margin-left 70px
    background-color white
</style>
