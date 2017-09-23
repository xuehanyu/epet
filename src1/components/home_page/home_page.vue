<template>
  <div>
    <div class="homePage">
      <BannerItem></BannerItem>
      <div class="gif">
        <a href="">
          <img src="./go.gif">
        </a>
      </div>
      <ColumnavItem></ColumnavItem>
      <split></split>
      <SurpriseItem></SurpriseItem>
      <split></split>
      <CurrencyadItem></CurrencyadItem>
      <split></split>
      <Customtitle></Customtitle>
      <FashionvideoItem></FashionvideoItem>
      <split></split>
      <Customtitle></Customtitle>
      <div class="tiyan">
        <a href="">
          <img src="./tiyan.jpg">
        </a>
      </div>
      <div class="special">
        <img src="./sepcial.png">
      </div>
      <SingleadItem></SingleadItem>
      <SingleadItem></SingleadItem>
      <SingleadItem></SingleadItem>
      <SingleadItem></SingleadItem>
      <SingleadItem></SingleadItem>
      <CharityItem></CharityItem>
      <split></split>
      <JudgeItem></JudgeItem>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueScroller from 'vue-scroller'
  Vue.use(VueScroller)
  import BannerItem from '../../../src/components/BannerItem/BannerItem.vue'
  import ColumnavItem from '../../../src/components/ColumnavItem/ColumnavItem'
  import split from '../../../src/components/split/split.vue'
  import SurpriseItem from '../SurpriseItem/SurpriseItem.vue'
  import CurrencyadItem from '../../../src/components/CurrencyadItem/CurrencyadItem.vue'
  import Customtitle from '../../../src/components/Customtitle/Customtitle.vue'
  import FashionvideoItem from '../../../src/components/FashionvideoItem/FashionvideoItem.vue'
  import SingleadItem from '../../../src/components/SingleadItem/SingleadItem.vue'
  import CharityItem from '../../../src/components/CharityItem/CharityItem.vue'
  import JudgeItem from '../../../src/components/JudgeItem/JudgeItem.vue'
  export default {
    components:{
      BannerItem,
      ColumnavItem,
      split,
      SurpriseItem,
      CurrencyadItem,
      Customtitle,
      FashionvideoItem,
      SingleadItem,
      CharityItem,
      JudgeItem
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*.homePage
    display flex
    position absolute
    top 180px*/
    .gif
      width 100%
      height 120px
      & > a > img
        width 100%
    .tiyan
      width 100%
      height 100%
      & > a > img
        width 100%
    .special
      width 100%
      padding-top 10px
      text-align center
      height 63px
      border-bottom 1px solid #f3f4f5
      & > img
        width 50%

</style>
