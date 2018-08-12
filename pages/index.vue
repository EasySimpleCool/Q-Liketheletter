<template>
  <div class="grid">
    <div class="title-container">
        <div class="intro-container">
          <span class="intro">Hey</span> my name’s <span class="intro">Q</span>. <span class="intro">Interaction Designer</span> based in <span class="intro">Melbourne</span>.
        </div>
    </div>
    <section class="post-grid">
        <PostPreview 
          v-for="(page, index) in pages"
          :key="index"
          :slug="page.slug"
          :thumbnailImage="page.background"
          :tag="page.tag"
          :name="page.name"
          :description="page.description">
        </PostPreview>
  </section>
  </div>
</template>

<script>
import PostPreview from "@/components/PostPreview";

export default {
  components: {
    PostPreview
  },
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
    // variable pages = empty string
      let pages = []
    // for id in result data.links
      for (let id in result.data.stories) {
        // if id has unique name?
        if (result.data.stories.hasOwnProperty(id)) {
        // let link = unique name  
          let story = result.data.stories[id]
        // then push the values of slug and name to empty pages array
          pages.push({ 
            slug: story.slug,
            name: story.name,
            background: story.content.image,
            description: story.content.description,
            // tag: story.tag_list
          })       
        }
      }

      

      return { pages: pages }
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
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
/* a {
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  text-decoration: #ffffff;
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation: GridAnimation 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
}


a:hover h2 {
  border-bottom: 2px solid #ffffff;
  padding-bottom: 16px;
}

a:hover p {
  opacity: 1;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1.0);
}

a:hover a {
  color: rgba(100, 100, 100, 0.85);
}

h2 {
  color: #ffffff;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1.0);
}

p {
  margin-top: 8px;
  font-size: 12px;
  color: #ffffff;
  opacity: 0;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1.0);
} */

.pages
{
  list-style: none;
  margin: 0;
  padding: 0;
}

@keyframes GridAnimation {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

</style>
