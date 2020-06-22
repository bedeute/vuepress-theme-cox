<template>
  <router-link class="blog-tag" :to="tag.path">
    {{ tag.name }}
    <div class="blog-tag-qty">
      <span v-if="tag.pages.length > 1">
        {{ tag.pages.length }}
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['tag'],
}
</script>

<style lang="stylus">
  .blog-tag
    display inline-flex
    align-items center
    word-break break-word
    font-size 1.6rem
    margin 0 1.4rem 1.4rem 1rem
    border-radius 0 6px 6px 0
    font-weight: 300
    text-align left
    box-sizing border-box
    // transition background-color .3s
    color $grey40
    border 2px solid $grey20
    text-decoration none
    transition all .5s
    position relative
    background-color white
    padding-left .5rem
    transition all .12s ease-in-out
    -webkit-text-fill-color inherit
    background-image none
    // background-clip unset
    // background-clip unset

    &:before,
    &:after
      border-style solid
      border-color transparent
      content ''
      position absolute
      transition all .12s ease-in-out

    &:before
      border-width 18px 16px 18px 0
      border-color transparent $grey20 transparent transparent
      position absolute
      left -18px
      top -2px
    
    &:after
      border-width 16px 15px 16px 0
      border-color transparent white transparent transparent
      left -15px
      top 0px
      color $grey80

    &:hover
      color $grey
      border 2px solid $grey
      // box-shadow 0 0 5px $accentColor
      transition all .12s ease-in-out

      &:before
        border-color transparent $grey transparent transparent

      .blog-tag-qty
        transition all .1s ease-in-out
        background-color $grey
        color $accentColor

    &-qty
      transition background-color .12s ease-in-out, color .01s ease-in-out
      background-color $grey20
      min-width .4rem
      min-height 3.2rem
      margin-left .8rem

      > span
        padding 0 .9rem
        vertical-align middle

        @media screen and (max-width: $MQNarrow)
          vertical-align -5px


  @media screen and (max-width: 768px)
    .blog-tag
      font-size 1.4rem
</style>
