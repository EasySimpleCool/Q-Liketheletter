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
  box-sizing: border-box;
}

html {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
}

h1 {
  font-size: 3rem;
  font-weight: 900;
}

h2 {
  font-size: 1.5rem;
  font-weight: 900;
}

h3 {
  
}

main {
  margin: 5rem auto 0;
  padding: 15px;
  max-width: 700px;
}

body {
  background-color: #4A4A4A;
}
</style>
