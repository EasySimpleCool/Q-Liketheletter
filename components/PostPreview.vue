<template>
  <nuxt-link
    :to="'/' + slug"
    class="page"
    :style="{backgroundImage: 'url(' + thumbnailImage + ')'}">
      <!-- <p>{{ tag }}</p> -->
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    // tag: {
    //   type: String,
    //   required: true,
    // },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,     
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>

a {
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: solid white 8px; */
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  text-decoration: none;
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.0);
  transition: .6s cubic-bezier(0.2, 0.8, 0.2, 1.0);
}

a:hover h2 {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 16px;
}

a:hover p {
  opacity: 1;
}

a:hover {
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.5);
}

h2 {
  color: #ffffff;
  transition: .6s cubic-bezier(0.2, 0.8, 0.2, 1.0);
}

p {
  margin-top: 8px;
  font-size: 12px;
  color: #ffffff;
  opacity: 0;
  transition: .6s cubic-bezier(0.2, 0.8, 0.2, 1.0);
}


.v-enter-active {
  animation: fade 2s;
}

.v-leave-active {
  animation: fade 2s reverse;
}

/* @keyframes fade {
  0%{
    transform: scale(.1);
    opacity: 0;
  }
  60%{
    transform: scale(1.2);
    opacity(1);
  }
  100%{
    transform(1);
  }
} */
</style>