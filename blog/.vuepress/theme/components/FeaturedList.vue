<template>
  <div class="featured-list" v-if="posts.length">
    <Carousel
      class="blog-list-inner"
      paginationActiveColor="#FFE854"
      paginationColor="##d6e4ec"
      paginationPadding="6"
      :navigationEnabled="true"
      :perPage="1"
    >
      <Slide
        class="blog-list-item"
        v-for="(post, index) in posts"
        :key="index"
      >
        <post-item
          isFeatured
          :item="post"
          :date="resolvePostDate(post.frontmatter.date)"
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import PostListItem from "./PostListItem"
import resolvePostDate from "../mixins/resolvePostDate"
import { Carousel, Slide } from 'vue-carousel'

export default {

name: "FeaturedList",
components: {
  PostItem: PostListItem,
  Carousel,
  Slide
},
computed: {
  posts () {
    return this.$site.pages.filter(page => page.frontmatter.featured == true)
  }
},
mixins: [resolvePostDate]

}
</script>

<style lang="stylus" scoped>
>>> .VueCarousel-navigation
  position absolute
  right 0
  top 2.4rem

>>> .VueCarousel-pagination
  position absolute
  width auto
  left auto
  right 3rem
  top 0
  margin-top -1rem
</style>