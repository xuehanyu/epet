<template>
  <div class="go-dog"></div>
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
  .go-dog
    background: url('./godog.png') no-repeat;
    width 41px
    height 46px
    background-size 80px auto
    position fixed
    bottom 15%
    right -1px
    z-index 2
</style>
