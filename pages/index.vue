<template>
  <div class="grid">
    <div class="title-container">
        <div class="intro-container">
          <span class="intro">Hey</span> my name’s <span class="intro">Q</span>. <span class="intro">Interaction Designer</span> based in <span class="intro">Melbourne</span>.
        </div>
    </div>
    <section class="post-grid">
        <nuxt-link 
          v-for="(page, index) in pages"
          :to="page.slug" 
          :key="index" 
          class="page"
          :background-image="page.bg" >
          {{ page.name }}
        </nuxt-link>
  </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      link: [
        { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css" },
        { rel: "stylesheet", href:"https://fonts.googleapis.com/css?family=Open+Sans:100,400,700,800"}
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
    return context.app.$storyapi.get('cdn/stories', {
      version: version
    }).then((result) => {
      console.log(result);
    // variable pages = empty string
      let pages = []
    // for id in result data.links
      for (let id in result.data.stories) {
        // if id has unique name?
        if (result.data.stories.hasOwnProperty(id)) {
        // let link = unique name  
          let story = result.data.stories[id]
        // then push the values of slug and name to empty pages array
          pages.push({ slug: story.slug, name: story.name, bg: story.content.body.postimage })
        }
      }
      return { pages: pages }
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
    console.log('hello')
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-rows: 320px 1fr;
}

.title-container {
  display: flex;
  font-size: 32px;
  color: #4A4A4A;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.intro-container {
  max-width: 300px;
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
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  color: #ffffff;
  text-decoration: #ffffff;
}

.pages
{
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
