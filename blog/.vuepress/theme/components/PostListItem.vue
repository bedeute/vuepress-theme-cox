<template>
  <article
    class="post-list-item"
    :class="{ 'its-featured' : isFeatured }"
  >
    <div class="post-list-item-cover">
      <NavLink
        :link="item.path"
        :style="{'background-image': `url(${ item.frontmatter.thumbnail || item.firstImage})`}"
      />
    </div>
    <div class="post-list-item-content">
      <header>
        <span v-if="isFeatured" class="its-featured-label">Featured</span>
        <div
          class="post-list-item-timestamp"
          v-if="item.frontmatter.date"
        >
          <vp-icon name="calendar" class="its-icon" />
          <p class="its-date">{{ date }}</p>
        </div>
        <h4 class="post-list-item-title">
          <NavLink :link="item.path">{{ item.title }}</NavLink>
        </h4>
      </header>
      <p class="post-list-item-body">
        {{ item.frontmatter.summary || item.summary }}
      </p>
      <div class="post-list-item-footer">
        <div class="post-list-item-tags" v-if="item.frontmatter.tag">
          <NavLink
            v-for="tagItem in item.frontmatter.tag"
            :key="tagItem"
            class="tag-link" :link="'/tag/' + tagItem + '/'"
          >
            #{{ tagItem }}
          </NavLink>
        </div>
        <div class="post-list-item-action">
          <NavLink class="button" :link="item.path">Continue reading</NavLink>
        </div>
      </div>
    </div>
    <br>
  </article>
</template>

<script>
import dayjs from "dayjs"
export default {
name: "PostListItem",
props: {
  item: {
    type: Object,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}

}
</script>

<style lang="stylus" scoped>
.post-list-item
  display flex
  margin 4rem auto

  @media (max-width: $MQMobile)
    flex-wrap wrap

  &-cover
    flex none
    width 16rem
    height 19rem
    position relative 
    margin-right 1.6rem

    @media (max-width: $MQMobile)
      width 100%

      &:after
        content ''
        position absolute
        width 100%
        background red
        bottom 0
        height 6rem
        background rgb(0,0,0)
        background linear-gradient(0deg, rgba(0,0,0,.6) 0%, rgba(0,0,0,0) 80%)
    
    >>> .nav-link
      border-radius .4rem
      position absolute
      background-clip unset
      -webkit-background-clip unset
      width 100%
      height 100%
      background-size cover
      background-position center

  
    
  &-content
    flex 1 1 auto

    @media (max-width: $MQMobile)
      margin-top -3.4rem
      z-index 1

    > header
      .its-featured
        display inline-block
        padding-right .6rem

        &-label
          border-left 2px solid $accentColor
          padding 0 6px 0 10px
          display inline-block
          line-height 1.3
          background-color lighten($accentColor, 28)
          margin-right 16px
          position relative

          &:after
            content ''
            position absolute
            border-width 15px 8px 8px 4px
            border-style solid
            border-color lighten($accentColor, 28) transparent transparent lighten($accentColor, 28)
            right -12px

  &-timestamp
    line-height 1
    display inline-block
    color $grey40

    @media (max-width: $MQMobile)
      padding-left 1rem
      color rgba(255,255,255,.8)
      margin-bottom 2.6rem

      > .its-date
        text-shadow 0 1px 3px rgba(0,0,0, 0.5)

      > svg
        filter drop-shadow(0 1px 3px rgba(0,0,0, 0.5))


    > svg
      font-size 1.6rem

    > .its-date
      display inline-block
      margin 0
      font-size 1.6rem

  &-title
    margin -4px 0 0

    > a
      color $grey
      font-weight 600
  
  &-body
    line-height 1.4
    margin-top 1.4rem
    font-size 1.6rem

    @media (max-width: $MQMobile)
      margin-top 1rem

  &-footer
    margin-top 1rem
    display flex

  &-action
    flex 1 1 auto
    text-align right

  &-tags
    flex 1 1 auto
    margin-left -4px

    + .post-list-item-action
      flex none

.its-featured
  margin 1.4rem 0 0
  

</style>