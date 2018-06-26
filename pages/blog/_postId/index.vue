<template>
    <div id="post" v-editable="blok">
        <div class="post-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>
        <section class="post-content">
            <h1>{{ title }}</h1>
            <p>{{ content }}</p>
        </section>
    </div>
</template>

<script>
export default {
    asyncData(context) {
        return context.app.$storyapi
            .get("cdn/stories/blog/" + context.params.postId, {
                version: "draft"
            })
            .then(res => {
                console.log(res.data);
                return {
                    blok: res.data.story.content, 
                    image: res.data.story.content.thumbnail,
                    title: res.data.story.content.title,
                    content: res.data.story.content.content,
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
.post-thumbnail {
    width: 100%;
    height: 500px;
    background-size: cover;
    background-position: center;
}

.post-content {
    padding: 40px 0px;
    max-width: 700px;
    margin: auto;
}
</style>
