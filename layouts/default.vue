<template>
  <div>
    <Header/>
    <main class="main-content">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
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
  margin-top: 7.5rem;
}

</style>
