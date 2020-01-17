<template>
  <router-link class="blog-tag" :to="tag.path">
    {{ tag.name }} ({{ tag.pages.length }})
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
    height 40px
    word-break break-word
    font-size 1rem
    margin-right 20px
    margin-bottom 20px
    padding 0 15px
    border-radius 5px
    font-weight: 300
    text-align left
    box-sizing border-box
    transition: background-color .3s
    color $grey80
    border 2px solid $grey
    text-decoration none
    transition all .5s

    &:hover
      color $grey80
      border 2px solid $grey
      // box-shadow 0 0 5px $accentColor
      box-shadow inset 0 -2px 2px alpha($yellow, 0.5)

  @media screen and (max-width: 768px)
    .blog-tag
      font-size 14px
      padding 3px 10px
      margin-right 10px
      margin-bottom 10px
</style>
