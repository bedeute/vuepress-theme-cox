<template>
  <div id="vuepress-theme-blog__tags-layout">
    <h2>Tags</h2>
    <BlogTags :tags="$frontmatterKey.list" />
  </div>
</template>

<style lang="stylus" scoped>
  #vuepress-theme-blog__tags-layout
    width 'calc(%s + 14rem)' %$contentWidth
    margin 10rem auto 0
    position relative
    z-index 1
</style>
