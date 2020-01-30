<template>
  <div id="post-detail">
    <div
      class="post-detail-cover"
      ref="postDetailCover"
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
          {{ data.subtitle }}
        </p>
        <hr>
      </div>
      <Timestamp
        v-if="!data.title"
        :data="data"
        :resolveDate="resolvePostDate(data.date)"
      />
      <div class="before-content" />
      <Content />
      <div class="after-content" />
      <Newsletter v-if="$service.email.enabled" />
      <hr/>
      <Comment/>
    </div>
    <div
      class="toc-wrapper"
      :style="{ top : coverHeight + 'px' }"
    >
      <Toc />
    </div>

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
  data: () => {
    return {
      coverHeight: 0
    }
  },
  computed: {
    data () {
      return this.$page.frontmatter
    }
  },
  mounted () {
    this.$nextTick( () => {
      this.coverHeight = this.$refs.postDetailCover.clientHeight
    })
  },
  mixins: [resolvePostDate]
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
@require './config.styl'

#post-detail
  // @extend $wrapper
  position relative
  margin 0 auto
  font-family $fontSerif

.post-detail-cover
  height 24rem
  position relative

  @media (max-width: $MQMobile)
    height 0

  &-inner
    max-width "calc(%s + 8rem)" % $contentWidth
    padding-left 2.6rem
    padding-right 2.6rem
    margin 0 auto
    position absolute
    bottom 13rem
    left 0
    right 0

    @media (max-width: $MQMobile)
      padding-left 2rem
      padding-right 2rem
      bottom 2rem

    // @media (max-width: $MQMobileNarrow)
    //   padding-left 2rem
    //   padding-right 2rem

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

      @media (max-width: $MQMobile)
        background rgb(0,0,0)
        background linear-gradient(0deg, rgba(0,0,0,.8) 0%, rgba(0,0,0,0) 40%)


    &:before
      content ''
      position absolute
      width 100%
      height 100%
      background-image url(https://www.transparenttextures.com/patterns/darth-stripe.png)

  &.has-thumbnail
    height 40rem

    @media (max-width: $MQMobile)
      height 30rem
  
  &.has-frontmatter-title
    height 40rem
    
    @media (max-width: $MQMobile)
      height 30rem

  &.has-frontmatter-title.has-thumbnail
    height 60rem

    @media (max-width: $MQMobile)
      height 50rem

  .tag-link
    color rgba(255,255,255, .9)
    -webkit-text-fill-color inherit

    &:before
      opacity .6

    &:hover
      color white


.post-detail-subtitle
  max-width "calc(%s + 8rem)" % $contentWidth
  margin auto
  font-size 2.4rem
  color $grey30
  font-family "Arima Madurai", $fontSansSerif
  z-index 2

  > p
    margin 1.4rem auto 2rem
    line-height 1.6
  
  > hr
    margin-bottom 3rem

.post-detail-timestamp-wrapper
  margin 0
  color $grey10
  text-shadow 0 1px 3px rgba(0,0,0, 0.9)
  font-size 1.7rem
  z-index 3 !important

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
  z-index 1

  @media (max-width: $MQNarrow)
    padding 2rem 3rem
    
  @media (max-width: $MQMobile)
    padding 1rem 2rem
    margin-top 0


  > *
    position relative
    z-index 2

  > .before-content,
  > .after-content
    background-color white
    border 1px solid white
    width 100%
    position absolute
    left -1px
    right -1px
    z-index 1
    border-radius 4rem

    @media (max-width: $MQMobile)
      border-radius 0
      display none

    &:after
      content ''
      position absolute
      width calc(100% + 1.2rem)
      height 8rem
      left -.6rem
      right -.6rem
      // background-color rgba(255,255,255 .6)

      @media (max-width: $MQMobile)
        content none

      @media (max-width: $MQNarrow)
        width calc(100% + 2px)
        left -1px
        right -1px

  > .before-content
    height 14rem
    top -1px
    box-shadow 0 2px 8px alpha($grey, 0.2)

    @media (max-width: $MQNarrow)
      height 10rem
    
    &:after
      background linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)
      bottom -1rem

  > .after-content
    height 10rem
    bottom -1px
    box-shadow 0 -2px 8px alpha($grey, 0.2)

    &:after
      background linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)
      top -1rem

  > {$contentClass}
    z-index 2
    background transparent

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

.twitter-tweet
  margin 3rem auto 4rem !important


@media (min-width: $MQNarrow)
  box-shadow 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.07)

.is-at-top

  > .desktop-header

    .home-link
      color white

.toc-wrapper
  margin-top -7rem
  position absolute
  right 10px
  min-width 200px
  max-width 220px
  height calc(100% - 424px)

  @media (max-width: $MQNarrow)
    display none

  .vuepress-toc
    position sticky
    padding-top $navbarHeight + 1rem
    top 0
    bottom 200px

</style>

<style src="prismjs/themes/prism-tomorrow.css"></style>
