<template>
  <div>
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

  </div>
</template>

<script>
  import BannerItem from '../BannerItem/BannerItem.vue'
  import ColumnavItem from '../ColumnavItem/ColumnavItem'
  import split from '../split/split.vue'
  import SurpriseItem from '../SurpriseItem/SurpriseItem.vue'
  import CurrencyadItem from '../CurrencyadItem/CurrencyadItem.vue'
  import Customtitle from '../Customtitle/Customtitle.vue'
  import FashionvideoItem from '../FashionvideoItem/FashionvideoItem.vue'
  export default {
    components:{
      BannerItem,
      ColumnavItem,
      split,
      SurpriseItem,
      CurrencyadItem,
      Customtitle,
      FashionvideoItem
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .gif
    width 100%
    height 120px
    & > a > img
      width 100%
</style>
