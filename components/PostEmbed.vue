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
  left: 0;
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 100%;
}

iframe {
  border: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
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


