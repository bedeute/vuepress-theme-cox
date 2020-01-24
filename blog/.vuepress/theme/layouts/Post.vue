<template>
  <div id="post-detail">
    <div
      class="post-detail-cover"
      :class="{ 'has-frontmatter-title' : $page.frontmatter.title, 'has-thumbnail' : $page.frontmatter.thumbnail }"
    >
      <div
        :style="{'background-image': `url(${ $page.frontmatter.thumbnail || $page.firstImage})`}"
        class="post-detail-cover-backdrop"
      />
      <div class="post-detail-cover-inner">
        <div class="post-detail-timestamp-wrapper">
          <span v-if="$page.frontmatter.featured" class="its-featured-label">Featured</span>
          <vp-icon name="calendar" />
          <p>
            {{ resolvePostDate($page.frontmatter.date) }}
          </p>
          <div class="post-list-item-tags" v-if="data.tag">
            <NavLink
              v-for="tagItem in data.tag"
              :key="tagItem"
              class="tags" :link="'/tag/' + tagItem"
            >
              #{{ tagItem }}
            </NavLink>
          </div>
        </div>
        <h1 class="post-detail-title" v-if="$page.frontmatter.title">
          {{ $page.title || $title || 'Welcome to your VuePress site' }}
        </h1>
      </div>
    </div>
    <!-- <div class="post-detail-header" v-else>
      <figure>
        <img :src="$page.frontmatter.thumbnail || $page.firstImage" alt="Thumbnail image" >
      </figure>
      <div class="post-detail-header-inner">
        <p><vp-icon name="calendar" /> {{ resolvePostDate($page.frontmatter.date) }}</p>
      </div>
    </div> -->
    <div class="post-detail-content">
      <div
        class="post-detail-subtitle"
        v-if="data.subtitle"
      >
        <p>
          {{ data.subtitle }}
        </p>
        <hr>
      </div>
      <Content />
      <Newsletter v-if="$service.email.enabled" />
      <hr/>
      <Comment/>
    </div>
    <Toc />
  </div>
</template>

<script>
import Toc from '@theme/components/Toc.vue'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'
import resolvePostDate from '../mixins/resolvePostDate'

export default {
  components: {
    Toc,
    Comment,
    Newsletter: () => import('@theme/components/Newsletter.vue'),
  },
  computed: {
  data () {
      return this.$page.frontmatter
    }
  },
  mixins: [resolvePostDate]
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

#post-detail
  // @extend $wrapper
  position relative
  margin 0 auto
  font-family $fontSerif

.post-detail-cover
  height 24rem
  position relative

  &-inner
    width "calc(%s + 8rem)" % $contentWidth
    margin 0 auto
    position absolute
    bottom 10rem
    left 0
    right 0

  &-backdrop
    position absolute
    width 100%
    height 100%
    background-size cover
    background-position center

    &:after
      content ''
      position absolute
      width 100%
      height 100%
      background rgb(255,255,255)
      background linear-gradient(0deg, rgba(255,255,255,1) 6%, rgba(255,255,255,0) 40%)

    &:before
      content ''
      position absolute
      width 100%
      height 100%
      background-image url(https://www.transparenttextures.com/patterns/dark-denim-3.png)

  &.has-thumbnail
    height 40rem
  
  &.has-frontmatter-title
    height 40rem

  &.has-frontmatter-title.has-thumbnail
    height 60rem

.post-detail-timestamp-wrapper
  margin 0
  color $grey10

.post-detail-title
  margin 1rem 0 0
  color $grey10

.post-detail-content
  @extend $wrapper
  position relative
  margin-top -10rem

@media (min-width: $MQNarrow)
  box-shadow 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.07)

.is-at-top

  > .desktop-header

    .home-link
      color white
</style>

<style src="prismjs/themes/prism-tomorrow.css"></style>
