<template>
  <div id="base-list-layout">

    <h2>Blog</h2>

    <post-list-item
      v-for="(post, index) in pages"
      :key="index"
      :item="post"
      :date="resolvePostDate(post.frontmatter.date)"
    />
    
    <component
      :is="paginationComponent"
      v-if="$pagination.length > 1 && paginationComponent"
    ></component>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import dayjs from 'dayjs'
import { NavigationIcon, ClockIcon } from 'vue-feather-icons'
import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'

import PostListItem from "../components/PostListItem"
import resolvePostDate from "../mixins/resolvePostDate"

export default {
  components: {
    NavigationIcon,
    ClockIcon,
    PostListItem
  },

  data() {
    return {
      paginationComponent: null,
    }
  },

  computed: {
    pages() {
      return this.$pagination.pages
    },
  },

  created() {
    this.paginationComponent = this.getPaginationComponent()
  },

  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }

      if (n === 'SimplePagination') {
        return SimplePagination
      }

      return Vue.component(n) || Pagination
    },
  },
  mixins: [ resolvePostDate ]
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

#base-list-layout
  max-width $contentWidth
  margin 0 auto
  position relative
  z-index 1
  
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>
