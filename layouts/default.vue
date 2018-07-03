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
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

main {
  margin-top: 5rem;
  padding: 15px;
}

@media only screen and (min-width: 768px) {
  main {
    margin: 5rem auto;
    padding: 15px;
    max-width: 700px;
    }
}

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  background-color: #F7F7F7;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  text-align: center;
}
</style>
