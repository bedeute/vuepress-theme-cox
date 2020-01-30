<template>
  <div class="post-detail-timestamp-wrapper">
    <span v-if="data.featured" class="its-featured-label">Featured</span>
    <vp-icon name="calendar" />
    <p class="post-detail-date">
      {{ resolveDate }}
    </p>
    <div class="post-detail-tags" v-if="data.tag">
      <NavLink
        v-for="tagItem in data.tag"
        :key="tagItem"
        class="tag-link" :link="'/tag/' + tagItem + '/'"
      >
        #{{ tagItem }}
      </NavLink>
    </div>
  </div>
</template>

<script>
export default {

name: "PostDetailTimestamp",
props: {
  data: {
    type: Object,
    required: true
  },
  resolveDate: {
    type: String,
    required: true
  }
}

}
</script>

<style lang="stylus" scoped>
  .its-featured-label
    border-left 2px solid $accentColor
    padding 0 6px 0 10px
    display inline-block
    line-height 1.3
    background-color rgba(0,0,0, .26)
    margin-right 16px
    position relative

    &:after
      content ''
      position absolute
      border-width 15px 8px 8px 4px
      border-style solid
      border-color rgba(0,0,0, .26) transparent transparent rgba(0,0,0, .26)
      right -12px
</style>