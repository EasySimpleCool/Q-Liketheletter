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
  width: 329px;
  height: 329px;
  border: none;
}
</style>


