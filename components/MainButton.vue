<template>
  <div v-editable="blok" class="mainbutton">
    <a :href="blok.link">{{ blok.label }}</a>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
.mainbutton {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background: #0BBACC;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.20);
  border-radius: 4px;
}

a {
  color: #ffffff;
  text-decoration: none;
}
</style>
