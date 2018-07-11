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
  word-spacing: .5px;
}

h1, h2 {
  color: #4A4A4A;
}

p {
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  color: #9B9B9B;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: .5rem;
}

h3 {
  font-size: .8rem;
  font-weight: 100;
  letter-spacing: 1px;
  margin-bottom: .3rem;
  color: #0BBACC;
}

main {
  margin: 5rem auto 0;
  padding: 15px;
  max-width: 700px;
}

body {
  background-color: #F2F2F2;
}
</style>
