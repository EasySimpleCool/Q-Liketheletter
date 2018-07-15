<template>
  <div>
    <button v-on:click="counter += 1">Load Prototype</button>
    <div v-editable="blok" class="postembed">
      <iframe class="viewport" :src="blok.url" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style>
.postembed {
  position: relative;
  overflow: hidden; 
  z-index: 0;
  max-width: 100%;
  height: 0%;
  padding-bottom: 100%;
}

iframe {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>


