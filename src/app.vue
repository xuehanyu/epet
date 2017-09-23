<template>
  <div>
    <epet_header  class="epet_header"></epet_header>
    <div class="tab_container" ref="tabs">
      <ul class="tab" id="tab">
        <li class="tab-item">
          <router-link to='/home'>首页</router-link>
        </li>
        <li class="tab-item">
          <router-link to='/main'>主粮</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/health">医疗保健</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/food">零食玩具</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/uses">日用外出</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/beauty">美容香波</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import Header from './components/Header/Header.vue'
  import BScroll from 'better-scroll'
  export default {
    components:{
      'epet_header':Header
    },
    data () {
      return {}
    },
    mounted(){
      const ul=this.$refs.tabs.children[0]
      const liWidth =75
      const liSize=document.getElementById('tab').children.length
      ul.style.width=liWidth*liSize +'px'

      this.$nextTick(()=>{

        new BScroll(this.$refs.tabs,{
          click:true,
          scrollX:true
        })
      })

    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .epet_header
      position fixed
      z-index 10
      background-color white
    .tab_container
      position fixed
      z-index 10
      background-color white
      top 108px
      width 100%
      .tab
        display flex
        white-space nowrap
        .tab-item
          width 75px
          height 36px
          line-height 36px
          font-size 14px
          text-align center
          a
            display block
</style>
