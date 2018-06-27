<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'

export default {
  components: {
    TheHeader
  }  
}
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
}
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  background-color: #F5F5F5;
}

.main-content {
  margin-top: 5rem;
}
</style>
