<template>
  <div id="vuepress-theme-blog__tags-layout">
    <h2>Tags</h2>
    <BlogTags :tags="$frontmatterKey.list" />
  </div>
</template>

<style lang="stylus" scoped>
  #vuepress-theme-blog__tags-layout
    max-width 'calc(%s + 14rem)' %$contentWidth
    margin 0 auto
    padding 0 3.2rem
    position relative
    z-index 1

    @media (max-width: $MQNarrow)
      width auto
</style>
