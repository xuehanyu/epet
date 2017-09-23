<template>
  <div>
    <Hide_header></Hide_header>
    <!--<epet_Header></epet_Header>-->
    <div class="tab" ref="tab">
      <div class="tab-item">
        <router-link to='/home'>首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/main'>主粮</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/health">医疗保健</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/food">零食玩具</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/uses">日用外出</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/beauty">美容香波</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import Hide_header from './components/Hide_header/Hide_header.vue'
  /*import BScroll from 'better-scroll'*/
  export default {
    data () {
      return {}
    },
    /*mounted () {
      setTimeout(()=>{
        new BScroll(this.$refs.tab,{
          click:true
        })
      },2000)
    },*/
    methods: {},
    components: {
      Hide_header
      /* "epet_Header" :Header*/
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display flex
    width 120%
    white-space nowrap
    height 36px
    z-index 10
    .tab-item
      width 20%
      height 36px
      line-height 36px
      font-size 14px
      text-align center
      a
        display block
</style>
