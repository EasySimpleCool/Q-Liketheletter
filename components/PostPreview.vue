<template>
    <nuxt-link class="post-preview-thumbnail" :style="{backgroundImage: 'url(' + thumbnailImage + ')'}"
      :to="id">
      <div class="post-preview" >
          <div class="post-preview-content">
            <h1>{{ title }}</h1>
            <p>{{ excerpt }}</p>
          </div>
      </div>
    </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>

a {
  text-decoration: none;
  color: black;
}

.post-preview {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: .5s ease;
  background-color: white;
}
.post-preview:hover {
  opacity: 1;
}

.post-preview-thumbnail {
  background-position: center;
  background-size: cover;
  border-radius: 4px;
  border: 8px solid white;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
}
.post-preview-content {

}
@media (min-width: 35rem) {
  .post-preview {
  }
}

</style>