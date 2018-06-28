<template>
    <div id="post" v-editable="blok">
        <div class="post-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>
        <section class="post-content">
            <h1>{{ title }}</h1>
            <p>{{ content }}</p>
            <div class="Prototype"><iframe width="442" height="935" :src="embed" frameborder="0" allowfullscreen></iframe></div>
        </section>
    </div>
</template>

<script>
export default {
    asyncData(context) {
        return context.app.$storyapi
            .get("cdn/stories/blog/" + context.params.postId, {
                version: process.env.NODE_ENV == 'production' ? 'published' : "draft"
            })
            .then(res => {
                console.log(res.data);
                return {
                    blok: res.data.story.content, 
                    image: res.data.story.content.thumbnail,
                    title: res.data.story.content.title,
                    content: res.data.story.content.content,
                    embed: res.data.story.content.embed
                };
            });
    },
    mounted() {
        this.$storyblok.init();
        this.$storyblok.on("change", () => {
            location.reload(true);
        });
    }
}
</script>

<style>
#post {
    max-width: 700px;
    margin: 0 auto;
    background-color: white;
    border-radius: 8px;
    border: 8px solid white;
    text-align: center;
}

.post-thumbnail {
    width: 100%;
    height: 500px;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
}

.post-content {
    padding: 0px 15px;
    margin: auto;
}

@media only screen and (min-width: 768px) {
    .post-content {
    padding: 0px 15px;
    max-width: 700px;
    }
}
</style>
