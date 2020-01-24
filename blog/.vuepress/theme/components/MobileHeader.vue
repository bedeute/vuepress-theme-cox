<template>
  <div id="mobile-header">
    <div class="mobile-header-bar">
      <div class="mobile-header-title">
        <NavLink link="/" class="mobile-home-link">{{ $site.title }} </NavLink>
        <component
          :is="isOpen ? 'XIcon' : 'MenuIcon'"
          @click="$emit('toggle-sidebar')"
        />
      </div>
      <div class="mobile-menu-wrapper" :class="{ open: isOpen }">
        <hr class="menu-divider" />
        <nav class="mobile-nav">
          <ul v-if="$themeConfig.nav">
            <li
              v-for="item in $themeConfig.nav"
              :key="item.text"
              class="mobile-nav-item"
            >
              <NavLink :link="item.link">{{ item.text }}</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from 'vue-feather-icons'

export default {
  components: {
    MenuIcon,
    XIcon,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
<style lang="stylus" scoped  src="../styles/header.styl" />

<style lang="stylus">

.mobile-nav-item
    list-style none

    a
      text-decoration none

  .menu-divider
    margin 0

  .mobile-menu-wrapper
    border-top solid 1px $grey20
    max-height 0
    overflow hidden
    transition 0.3s ease
    background-color #fff

  .mobile-menu-wrapper.open
    max-height 450px
    transition 0.3s ease

  @media (min-width: $MQMobile)
    #mobile-header
      display none

</style>
