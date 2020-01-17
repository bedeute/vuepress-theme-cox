<template>
  <div id="desktop-header">
    <div class="header-wrapper">
      <div class="title">
        <NavLink link="/" class="home-link">{{ $site.title }} </NavLink>
      </div>
      <div class="header-right-wrap">
        <ul v-if="$themeConfig.nav" class="nav">
          <li
            v-for="item in $themeConfig.nav"
            :key="item.text"
            class="nav-item"
          >
            <NavLink :link="item.link">{{ item.text }}</NavLink>
          </li>
        </ul>
        <SearchBox />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  components: { SearchBox },
}
</script>

<style lang="stylus" scoped  src="../styles/header.styl" />