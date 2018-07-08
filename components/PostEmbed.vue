<template>
    <div v-editable="blok" class="postembed">
      <iframe :src="blok.url"></iframe>
    </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style>
.postembed {
  height: 329px;
  width: 329px;
  margin: 0 auto;
}


iframe {
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
  border: none;
}
</style>


