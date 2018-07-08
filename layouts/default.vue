<template>
  <div>
    <Header/>
    <main>
      <nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  }  
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
}

main {
  margin: 5rem auto 0;
  padding: 15px;
  max-width: 700px;
}

body {
  background-color: #F7F7F7;
}
</style>
