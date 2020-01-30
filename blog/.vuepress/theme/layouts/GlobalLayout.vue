<template>
  <div 
    id="vuepress-theme-blog__global-layout"
    :class="{ 'is-at-top' : scrolled < 60 }"
  >
    <Header
      :class="{ 'in-post-detail' : $page.frontmatter.layout == 'Post' }"
    />
    <MobileHeader
      :is-open="isMobileHeaderOpen"
      @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
    />
    <div class="content-wrapper" @click="isMobileHeaderOpen = false">
      <DefaultGlobalLayout />
    </div>
    <Footer />
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Header from '@theme/components/Header.vue'
import MobileHeader from '@theme/components/MobileHeader.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    MobileHeader,
    Footer,
  },

  data() {
    return {
      isMobileHeaderOpen: false,
      scrolled: null
    }
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY
    }
  },
  mounted() {
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false
    })
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus">
.content-wrapper
  min-height calc(100vh - 20.5rem)
  margin 0 auto

@media (max-width: $MQMobile)
  .content-wrapper
    // padding 100px 15px 20px 15px
    min-height calc(100vh - 20px - 60px - 100px)
    padding-top 4.8rem

.is-at-top

  > #desktop-header
    box-shadow none
    background-color transparent
    max-width 'calc(%s + 25rem)' %$contentWidth
    padding-top 2rem

    &.in-post-detail
      padding-top 1rem

    
      .nav-link
        color rgba(255, 255, 255, .76)
        -webkit-text-fill-color inherit

        &.home-link
          color white

        &:after
          bottom .4rem

        &:hover
          color white

        &.router-link-active
          color rgba(255,255,255, .9)

      .search-box
        input
          background-color rgba(0,0,0, .2)
          border-color rgba(255,255,255, .4)
          border-width 1px
          // transition all .s ease-in-out

          &.focused
            border-width 2px


</style>
