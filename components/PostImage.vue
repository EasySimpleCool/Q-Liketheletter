<template>
    <div v-editable="blok" class="postimage">
      <img :src="blok.image"> 
    </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
.postimage {
  text-align: center;
}

img {
  width:100%;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
  background-color: none;
}
</style>


