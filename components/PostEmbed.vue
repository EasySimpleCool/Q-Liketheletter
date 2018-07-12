<template>
    <div v-editable="blok" class="postembed">
      <iframe :src="blok.url" allowfullscreen></iframe>
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
  align: middle;
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) { 
      iframe {
        width: 1/3;
        height: 1/3;
      } 
    } */


</style>


