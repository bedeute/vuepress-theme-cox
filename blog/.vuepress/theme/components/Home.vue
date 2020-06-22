<template>
  <div class="theme-container">
    <div class="home-hero">
      <div class="profile">
        <div class="profile-ava">
          <img :src="data.avatar" :alt="(data.name + ' avatar')">
        </div>
        <div class="profile-content">
          <h1>{{ data.name }}</h1>
          <p class="profession">{{ data.profession }}</p>
          <ul class="social-link">
            <li>
              <a :href="data.twitter">
                <vp-icon name="twitter" />
              </a>
            </li>
            <li>
              <a :href="('mailto:' + data.email)">
                <vp-icon name="envelope" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="short-bio-text">
        <p
          v-if="data.bio"
        >
          {{ data.bio }}
        </p>
        <p
          v-else
        >
          <Content/>
        </p>
      </div>
    </div>
    <div class="home-content">

      <featured-list />

      <div class="section-divider">
        <div class="section-divider-inner">
          Latest Blog
        </div>
      </div>

      <div
        class="home-post-list"
        
      >
        <post-list />
        <div class="home-post-list-footer">
          <NavLink link="/blog/" class="button">View all blog</NavLink>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import FeaturedList from "../components/FeaturedList";
// import BlogListItem from "../components/BlogListItem";
import PostList from "../components/PostList";

export default {
  components:{
    // BlogListItem
    FeaturedList,
    PostList
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    posts () {
      return this.$site.pages
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
  
.home-hero
  background #ffffff
  background linear-gradient(rgba(230, 243, 255, 0) 0%, rgba(230, 243, 255, 1) 100%)
  min-height 30rem
  padding-top 12rem
  padding-bottom 10rem

  @media(max-width: $MQNarrow)
    background linear-gradient(rgba(230, 243, 255, 1) 0%, rgba(230, 243, 255, 0) 100%)
    margin -8rem -2rem -6rem
    padding-top 14rem
    padding-left 2.4rem
    padding-right 2.4rem

.profile
  display flex
  flex-flow row nowrap
  justify-content center

  @media(max-width: $MQMobile)
    flex-wrap wrap

    &-ava
      width 100%
      text-align center

  &-ava
    // margin-left 2rem

    & > img
      border-radius 100%
      width 12rem
      height 12rem

      @media (max-width: $MQMobile)
        width 10rem
        height 10rem

  &-content
    align-self center
    padding-left 2rem

    @media(max-width: $MQMobile)
      padding-left 0
      text-align center

    & > h1
      margin 0
    
    & > .profession
      font-size 2rem
      margin .2rem 0 0

      @media(max-width: $MQMobile)
        font-size 1.8rem

    .social-link
      list-style none
      padding 0
      margin .4rem 0 0

      & > li
        display inline-block
        margin 0

        & > a
          display flex
          justify-content center
          align-items center
          width 4rem
          height 4rem
          border-radius 100%
          background-color $grey10


.short-bio-text
  max-width 82rem
  margin 4rem auto 0
  font-family $fontSerif
  text-align center
  padding-left 4rem
  padding-right 4rem

  @media screen and (max-width: $MQMobile)
    padding-left 1rem
    padding-right 1rem

.home-content
  @extend $wrapper
  margin-top -5rem
  z-index 1
  position relative

  .featured-list
    margin-bottom 4rem

// section divider style
.section-divider
  text-transform uppercase
  font-size 1.2rem
  font-weight 600
  color $grey30
  font-family $fontSansSerif
  position relative
  margin 0 -4rem 3rem -4rem

  @media(max-width: $MQNarrow)
    margin-left 0
    margin-right 0

    .section-divider-inner
      margin-left 3rem

  &:before
    content ''
    height 1px
    width 100%
    top 50%
    position absolute
    background-color $grey10

  &-inner
    &:before
      content ''
      position absolute
      height 14px
      width 100%
      top 0
      left 0
      background white
      z-index -1
      border-top-left-radius 20px
      border-top-right-radius 20px
      border-width 1px
      border-style solid
      border-color $grey10 $grey10 transparent $grey10

    z-index 2
    position relative
    display inline-block
    margin-left 5rem
    margin-right 5rem
    padding .2rem 1.6rem
    background-color white
    border-top-left-radius 20px
    border-top-right-radius 20px

.home-post-list

  &-footer
    text-align center
    padding 1rem 0 2rem

    .nav-link
      padding .8rem 4rem

</style>