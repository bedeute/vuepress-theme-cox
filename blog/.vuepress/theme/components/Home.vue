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
        class="cooookkk"
        
      >
        <post-list />
        <NavLink link="/blog/">View all blog</NavLink>
      </div>

      <!-- <BaseListLayout /> -->

      <!-- <div class="blog-list is-latest">
        <div class="blog-list-inner">
          <div class="blog-list-item">
            <div class="blog-list-item-cover">
              <a
                href=""
                style="background-image: url('https://cdn-images-1.medium.com/fit/c/152/156/1*3wa7e-BlKgxRNI4gyh-Ncw.jpeg')"
              />
            </div>
            <div class="blog-list-item-content">
              <div class="blog-list-item-header">
                <div class="blog-list-item-time">
                  <vp-icon name="calendar" />
                  June 02, 2019
                </div>
                <div class="blog-list-item-tags">
                  <a href="#" class="tags">
                    #design
                  </a>
                  <a href="#" class="tags">
                    #tutorial
                  </a>
                </div>
              </div>
              <a href="#" class="blog-list-item-title">
                <h4>Speed Up Development with Prototyping and Vue</h4>
              </a>
              <p class="blog-list-item-summary">
                Have you ever worked on a project that got away from you? We can use Vue to build prototypes quickly, so you can get your ideas out there.
              </p>
              <div class="blog-list-item-footer">
                <button class="btn">Read blog list</button>
              </div>
            </div>
          </div>

          <div class="blog-list-item">
            <div class="blog-list-item-cover">
              <a
                href=""
                style="background-image: url('https://cdn-images-1.medium.com/fit/c/152/156/1*3wa7e-BlKgxRNI4gyh-Ncw.jpeg')"
              />
            </div>
            <div class="blog-list-item-content">
              <div class="blog-list-item-header">
                <div class="blog-list-item-time">
                  <vp-icon name="calendar" />
                  June 02, 2019
                </div>
                <div class="blog-list-item-tags">
                  <a href="#" class="tags">
                    #design
                  </a>
                  <a href="#" class="tags">
                    #tutorial
                  </a>
                </div>
              </div>
              <a href="#" class="blog-list-item-title">
                <h4>Speed Up Development with Prototyping and Vue</h4>
              </a>
              <p class="blog-list-item-summary">
                Have you ever worked on a project that got away from you? We can use Vue to build prototypes quickly, so you can get your ideas out there.
              </p>
              <div class="blog-list-item-footer">
                <button class="btn">Read blog list</button>
              </div>
            </div>
          </div>
        </div>
      </div> -->
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

.profile
  display flex
  flex-flow row nowrap
  justify-content center

  &-ava
    margin-left 2rem
    & > img
      border-radius 100%
      width 12rem

  &-content
    align-self center
    padding-left 2rem
    // padding-right 20px
// 
    & > h1
      font-size 3.6rem
      margin 0
    
    & > p
      font-size 2rem
      margin 0

    .social-link
      list-style none
      padding 0
      margin 1rem 0 0

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
  max-width 76rem
  margin 4rem auto 0
  text-align center

.home-content
  @extend $wrapper
  margin-top -5rem
  z-index 1
  position relative

// section divider style
.section-divider
  text-transform uppercase
  font-size 1.2rem
  font-weight 600
  color $grey30
  font-family $fontSansSerif
  position relative
  margin 0 -4rem 3rem -4rem
  // margin-left -50px
  // margin-right -50px
  // margin-bottom 30px

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



</style>