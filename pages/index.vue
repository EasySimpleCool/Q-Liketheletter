<template>
  <div>
    <div class="title"><h1><span class="intro">Hey</span> my name’s <span class="intro">Q</span>. <span class="intro">Interaction Designer</span> based in <span class="intro">Melbourne</span>.</h1></div>
    <section class="post-grid">
        <nuxt-link :to="page.slug" v-for="(page, index) in pages" :key="index" class="page">{{ page.name }}</nuxt-link>
  </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      link: [
        { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css" },
        { rel: "stylesheet", href:"https://fonts.googleapis.com/css?family=Open+Sans:400,700,800"}
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
.title {
  display: flex;
  height: 300px;
  align-items: center;
  text-align: center;
}

.intro {
  font-weight: 800;
}

.post-grid {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 320px;
}
a {
    border: 8px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: rgb(119, 206, 247);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
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
