<template>
    <header class="main-header">
        <nav class="main-nav">
            <ul class="nav-links">
                <nuxt-link to="./"><img src="~/static/q-logo.svg"></nuxt-link>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    .main-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: white;
        height: 5rem;
    }

    .main-nav {
        height: 100%;
    }

    .nav-links {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .nav-link {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: .1rem;
        padding: .3rem;
    }

    .nav-link.nuxt-link-exact-active {
        border-bottom: 3px solid #4A4A4A;
    }

    .nav-link a {
        display: block;
        text-decoration: none;
        color: #4A4A4A;
    }

    .nav-link a:hover,
    .nav-link a:active,
    .nav-link.nuxt-link-exact-active a {
        color: white;
    }
</style>
