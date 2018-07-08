<template>
  <div v-editable="blok" class="markdown">
    <vue-markdown> {{blok.content}} </vue-markdown>
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