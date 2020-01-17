<template>
  <div class="post-list">
    <post-list-item
      v-for="(post, index) in posts"
      :key="index"
      :item="post"
      :date="resolvePostDate(post.frontmatter.date)"
    />
  </div>
</template>

<script>
import PostListItem from "./PostListItem"
import dayjs from "dayjs"
import resolvePostDate from "../mixins/resolvePostDate"
                
export default {
name: "PostList",
components: { PostListItem },
computed: {
  posts () {
    return this.$site.pages
      .filter(x => x.regularPath.startsWith('/_posts/') && !x.frontmatter.home)
      .sort((a, b) => (dayjs(b.frontmatter.date).isAfter(dayjs(a.frontmatter.date)) ? 1 : -1))
      .splice(0, 5)
  }
},
mixins: [resolvePostDate]
}
</script>

<style>

</style>