<template>
  <article class="post-list-item">
    <aside class="post-list-item-cover">
      <NavLink
        :link="item.path"
        :style="{'background-image': `url(${ item.frontmatter.thumbnail || item.firstImage})`}"
      />
    </aside>
    <div class="post-list-item-content">
      <header>
        <span v-if="isFeatured">Featured</span>
        <div
          class="post-list-item-timestamp"
          v-if="item.frontmatter.date"
        >
          <vp-icon name="calendar" class="its-icon" />
          <p class="its-date">{{ date }}</p>
        </div>
        <h3>
          <NavLink :link="item.path">{{ item.title }}</NavLink>
        </h3>
      </header>
      <div class="post-list-item-body">
        {{ item.frontmatter.summary || item.summary }}
      </div>
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
    width 10rem
    height 11rem
    position relative 
    
    >>> .nav-link
      position absolute
      width 100%
      height 100%
      background-size cover
      background-position center
    
  &-content
    flex 1 1 auto

  &-timestamp

    > .its-date
      display inline-block
      margin 0


  
</style>