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
        z-index: 99;
        /* box-shadow: 0 1px 3px rgba(0,0,0,0.1); */
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
</style>