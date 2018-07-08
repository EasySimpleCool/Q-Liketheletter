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
  width: 100%;
  height: 100%;
  border: none;
}

@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) { .iframe {
      width: 1/3;
      height: 1/3;
    } }


</style>


