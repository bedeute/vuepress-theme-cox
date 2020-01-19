<template>
  <article
    class="post-list-item"
    :class="{ 'its-featured' : isFeatured }"
  >
    <aside class="post-list-item-cover">
      <NavLink
        :link="item.path"
        :style="{'background-image': `url(${ item.frontmatter.thumbnail || item.firstImage})`}"
      />
    </aside>
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
        <h3 class="post-list-item-title">
          <NavLink :link="item.path">{{ item.title }}</NavLink>
        </h3>
      </header>
      <p class="post-list-item-body">
        {{ item.frontmatter.summary || item.summary }}
      </p>
      <div class="post-list-item-footer">
        <NavLink class="button" :link="item.path">Continue reading</NavLink>
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
  margin 3rem auto

  &-cover
    flex none
    width 14rem
    height 15rem
    position relative 
    margin-right 1.6rem
    
    >>> .nav-link
      position absolute
      width 100%
      height 100%
      background-size cover
      background-position center

  
    
  &-content
    flex 1 1 auto

    > header
      > .its-featured
        display inline-block
        padding-right .6rem

        &:after
          content '|'
          padding-left .8rem

  &-timestamp
    line-height 1
    display inline-block

    > svg
      font-size 1.6rem

    > .its-date
      display inline-block
      margin 0
      font-size 1.6rem

  &-title
    margin 0

    > a
      font-weight 600
  
  &-body
    line-height 1.4
    margin-top 1rem
    font-size 1.6rem

  &-footer
    margin-top 1rem

.its-featured
  margin 1.4rem 0 0

</style>