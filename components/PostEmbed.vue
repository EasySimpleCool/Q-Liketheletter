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
  width: 330px;
  height: 330px;
}

iframe {
 
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


