<template>
  <div ref="homePage" class="homeContainer">
    <div class="homePage" >
      <BannerItem></BannerItem>
      <div class="gif">
        <a href="javascript:;">
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
        <a href="javascript:;">
          <img src="./tiyan.jpg">
        </a>
      </div>
      <div class="special">
        <img src="./sepcial.png">
      </div>
      <SingleadItem></SingleadItem>
      <SingleadItem></SingleadItem>
      <SingleadItem></SingleadItem>
      <split></split>
      <CharityItem></CharityItem>
      <split></split>
      <JudgeItem></JudgeItem>
      <epet_footer></epet_footer>
    </div>
    <godog></godog>
    <!--<shopcart></shopcart>-->
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import BannerItem from '../../components/BannerItem/BannerItem.vue'
  import ColumnavItem from '../../components/ColumnavItem/ColumnavItem.vue'
  import split from '../../components/split/split.vue'
  import CurrencyadItem from '../../components/CurrencyadItem/CurrencyadItem.vue'
  import Customtitle from '../../components/Customtitle/Customtitle.vue'
  import FashionvideoItem from '../../components/FashionvideoItem/FashionvideoItem.vue'
  import SingleadItem from '../../components/SingleadItem/SingleadItem.vue'
  import CharityItem from  '../../components/CharityItem/CharityItem.vue'
  import JudgeItem from '../../components/JudgeItem/JudgeItem.vue'
  import footer from '../../components/footer/footer.vue'
  import SurpriseItem from '../../components/SurpriseItem/SurpriseItem.vue'
  import godog from '../../components/godog/godog.vue'
  import shopcart from '../../components/shopcart/shopcart.vue'
  export default {
    data () {
      return {}
    },
    mounted(){
      /*this.$nextTick(()=>{
        const scroll=new BScroll(this.$refs.homePage,{click:true})
      })
      console.log(scroll)*/
      setTimeout(()=>{
        new BScroll(this.$refs.homePage,{click:true})
      },1000)
    },
    methods: {},
    components:{
      BannerItem,
      ColumnavItem,
      split,
      CurrencyadItem,
      Customtitle,
      FashionvideoItem,
      SingleadItem,
      CharityItem,
      JudgeItem,
      SurpriseItem,
      "epet_footer":footer,
      godog,
      shopcart
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .homeContainer
    position absolute
    top 144px
    height 100%
    width 100%
    bottom 56px
  .homePage
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
      position relative
      padding-top 10px
      text-align center
      border-bottom 1px solid #f3f4f5
      & > img
        width 50%
        display block
        max-width: 50%;
        max-height: 73px;
        margin: 0 auto;
        vertical-align middle
</style>
