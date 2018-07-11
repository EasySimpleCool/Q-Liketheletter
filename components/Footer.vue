<template>
    <div class="main-footer">
            <div class="nav">
            <nuxt-link to="/">Join the <strong>Q</strong>.</nuxt-link>
            <div>
                <ul class="footer-links">
                    <a href="https://www.instagram.com/easysimplecool/"><i class="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/EasySimpleCool"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/quincey.mazel"><i class="fab fa-facebook-f"></i></a>
                    <a href="mailto:easysimplecool@gmail.com"><i class="fas fa-envelope"></i></a>
                </ul>
            </div>
            </div>
    </div>
</template>

<style scoped>
.main-footer {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: white;
    height: 10rem;
}

.footer-links {
    display: flex;
}
.nav {
    align-items: center;
    justify-content: center;
}

a {
    text-decoration: none;
    color: #4A4A4A;
    padding: 16px;
}

</style>