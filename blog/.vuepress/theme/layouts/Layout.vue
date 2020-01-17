<template>
  <div>
    <BaseListLayout v-if="$pagination" />
    <!-- <Content v-else /> -->
    <Home v-else />
  </div>
</template>

<script>
import Home from "../components/Home";

export default {
components: { Home }
}
</script>

<style src="prismjs/themes/prism-okaidia.css"></style>
