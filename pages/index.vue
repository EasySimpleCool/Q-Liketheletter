<template>
  <div>
    <div class="title"><h1><strong>Hey</strong> my name’s <strong>Q</strong>. <strong>Interaction Designer</strong> based in <strong>Melbourne</strong>.</h1></div>
    <section class="post-grid">    
      <li v-for="(page, index) in pages" :key="index" class="page">
        <nuxt-link :to="page.slug">{{ page.name }}</nuxt-link>
      </li>
  </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css" }
      ]
    } 
  },
  data () {
    return {
      pages: []
    }
  },
  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi.get('cdn/links', {
      version: version
    }).then((result) => {
      let pages = []
      for (let id in result.data.links) {
        if (result.data.links.hasOwnProperty(id)) {
          let link = result.data.links[id]
          pages.push({ slug: link.slug, name: link.name })
        }
      }
      return { pages: pages }
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  head () {
    return {
      title: "Liketheletter" 
    }
  }
}
</script>

<style scoped>
.post-grid {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 240px;
}
li {
    border: 8px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: rgb(119, 206, 247);
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
}
a {
    color: #4A4A4A;
    text-decoration: #ffffff;
}

.pages
{
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
