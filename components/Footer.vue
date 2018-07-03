<template>
    <footer class="main-footer">
        <nav class="main-footer">
            <ul class="footer-links">
                <nuxt-link to="./">Footer</nuxt-link>
            </ul>
        </nav>
    </footer>
</template>

<style scoped>
    .main-footer {
        width: 100%;
        background: white;
        height: 10rem;
    }
    .main-nav {
        height: 100%;
    }
    .footer-links {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>