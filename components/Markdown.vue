<template>
  <div v-editable="blok" class="markdown">
    <vue-markdown class="container"> {{blok.content}} </vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  props: ['blok'],
  components: {
    VueMarkdown
  }
}
</script>

<style scoped>
.container {
  padding: 8px;
  max-width: 456px;
  margin: 0 auto;
}

</style>
