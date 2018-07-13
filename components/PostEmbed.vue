<template>
    <div v-editable="blok" class="postembed">
      <iframe id="frame" :src="blok.url" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
  props: ['blok']
};
  /* function myFunction() { var iframe = document.getElementById("frame");
  var elmnt = iframe.contentWindow.document.getElementsByTagName("div")[0];
  elmnt.style.width = "100%";} */
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

@media only screen and (max-width: 768px) {
  .postembed {
    display: none;
  }
}

</style>


