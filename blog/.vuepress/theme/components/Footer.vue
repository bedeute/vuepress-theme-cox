<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-left-wrap">
        <ul v-if="contact" class="contact">
          <li
            v-for="item in contact"
            :key="item.iconComponent"
            class="contact-item"
          >
            <NavLink :link="item.link">
              <component :is="item.iconComponent"></component>
              {{ item.text }}
            </NavLink>
          </li>
        </ul>
      </div>

      <div class="footer-right-wrap">
        <ul v-if="copyright" class="copyright">
          <li v-for="item in copyright" :key="item.text" class="copyright-item">
            <NavLink :link="item.link">{{ item.text }}</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  CodepenIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  PhoneIcon,
  TwitterIcon,
} from 'vue-feather-icons'

export default {
  components: {
    CodepenIcon,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    GlobeIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    MessageSquareIcon,
    PhoneIcon,
    TwitterIcon,
  },

  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      )
    },
  },

  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case 'facebook':
          return 'FacebookIcon'
        case 'github':
          return 'GithubIcon'
        case 'gitlab':
          return 'GitlabIcon'
        case 'instagram':
          return 'InstagramIcon'
        case 'linkedin':
          return 'LinkedinIcon'
        case 'mail':
          return 'MailIcon'
        case 'messenger':
          return 'MessageSquareIcon'
        case 'phone':
          return 'PhoneIcon'
        case 'twitter':
          return 'TwitterIcon'
        case 'web':
          return 'GlobeIcon'
        case 'codepen':
          return 'CodepenIcon'
        default:
          return ''
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
  ol, ul
    list-style none
    margin 0
    padding 0

  .footer
    box-sizing border-box
    color $grey80
    position relative
    padding-top 5rem
    padding-bottom 2rem

    &:before
      content ''
      background linear-gradient(rgba(230, 243, 255, 0) 0%, rgba(230, 243, 255, 1) 100%)
      position absolute
      left 0
      right 0
      bottom 0
      height 175%

    &-inner
      width 'calc(%s + 14rem)' %$contentWidth
      display flex
      margin auto

    .footer-left-wrap
      line-height 30px
      flex 1
      display flex
      align-items center
      position relative

      .contact
        display flex

        .contact-item
          flex 1
          margin-right 10px

          a
            font-size 12px
            color $grey
            text-decoration none
            transition color .3s

    .footer-right-wrap
      flex 1
      display flex
      align-items center
      justify-content center

      @media(min-width: $MQNarrow)
        justify-content flex-end

      .copyright
        display flex
        justify-content flex-end

        .copyright-item
          flex 0 0 auto
          padding 0 10px
          position relative
          line-height 12px
          border-right 1px solid rgba(255, 255, 255, 0.6)

          &:last-child
            border-right none

          a
            font-size 12px
            color $grey
            text-decoration none
            transition color .3s

            &:not([href="/.html"]):hover
              // color rgba(255, 255, 255, 0.9)

            &[href="/.html"]
              cursor default

              &:hover
                opacity 1


  @media (max-width: $MQMobile)
    .footer
      height 100px
      flex-direction column
      background linear-gradient(rgba(230, 243, 255, 0) 0%, rgba(230, 243, 255, 1) 100%)

      .footer-left-wrap
        align-items center
        justify-content center
</style>
