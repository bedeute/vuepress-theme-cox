<template>
  <div class="featured-list" v-if="posts.length">
    <Carousel
      class="blog-list-inner"
      paginationActiveColor="#FFE854"
      paginationColor="#C2CDD8"
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
import { Carousel, Slide } from 'vue-carousel';

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

<style>

</style>