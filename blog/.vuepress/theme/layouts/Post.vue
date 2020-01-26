<template>
  <div id="post-detail">
    <div
      class="post-detail-cover"
      :class="{ 'has-frontmatter-title' : data.title, 'has-thumbnail' : data.thumbnail }"
    >
      <div
        :style="{'background-image': `url(${ data.thumbnail || $page.firstImage})`}"
        class="post-detail-cover-backdrop"
      />
      <div class="post-detail-cover-inner">
        <template
          v-if="data.title"
        >
          <Timestamp
            :data="data"
            :resolveDate="resolvePostDate(data.date)"
          />
          <h1 class="post-detail-title">
            {{ $page.title || $title || 'Welcome to your VuePress site' }}
          </h1>
        </template>
      </div>
    </div>
    <div class="post-detail-content">
      <div
        class="post-detail-subtitle"
        v-if="data.subtitle"
      >
        <p>
          subtitle {{ data.subtitle }}
        </p>
        <hr>
      </div>
      <Timestamp
        v-if="!data.title"
        :data="data"
        :resolveDate="resolvePostDate(data.date)"
      />
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
import PostDetailTimestamp from '../components/PostDetailTimestamp.vue'

export default {
  components: {
    Toc,
    Comment,
    Timestamp: PostDetailTimestamp,
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
    width "calc(%s + 10rem)" % $contentWidth
    margin 0 auto
    position absolute
    bottom 13rem
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
      background-image url(https://www.transparenttextures.com/patterns/darth-stripe.png)

  &.has-thumbnail
    height 40rem
  
  &.has-frontmatter-title
    height 40rem

  &.has-frontmatter-title.has-thumbnail
    height 60rem

  .tag-link
    color rgba(255,255,255, .9)

    &:before
      opacity .6

    &:hover
      color white


.post-detail-subtitle
  width "calc(%s + 8rem)" % $contentWidth
  margin auto

  + .post-detail-content
    margin-top 2rem

.post-detail-timestamp-wrapper
  margin 0
  color $grey10
  text-shadow 0 1px 3px rgba(0,0,0, 0.9)
  font-size 1.7rem

  .vp-icon-calendar
    width 1.4rem
    -webkit-filter drop-shadow( 0 1px 2px rgba(0, 0, 0, 0.6))
    filter drop-shadow( 0 1px 2px rgba(0, 0, 0, 0.6))
    margin-right .4rem
    vertical-align -2px

.post-detail-title
  margin .4rem 0 0
  color white
  text-shadow 0 1px 3px rgba(0,0,0, 0.5)

.post-detail-tags
  display inline-block

  &:before
    content '|'
    margin-right 2px

    .tag-link

      &:before
        bottom 3px

        &:hover
          height 70%

.post-detail-date
  display inline-block
  margin 0 10px 0 0

.post-detail-content
  @extend $wrapper
  position relative
  margin-top -10rem

  .post-detail-timestamp-wrapper
    color $grey40
    text-shadow none
    margin-top 8px
    margin-bottom -10px

    .its-featured-label
      background-color lighten($accentColor, 28)

      &:after
        border-color lighten($accentColor, 28) transparent transparent lighten($accentColor, 28)

    > .vp-icon-calendar
      -webkit-filter none
      filter none


@media (min-width: $MQNarrow)
  box-shadow 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.07)

.is-at-top

  > .desktop-header

    .home-link
      color white
</style>

<style src="prismjs/themes/prism-tomorrow.css"></style>
