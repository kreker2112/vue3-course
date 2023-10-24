<template>
    <div class="app">
        <div class="routes__container">
            <router-link to="/">Главная</router-link>
            <router-link to="/pages">Посты</router-link>
            <router-link to="/about">О нас</router-link>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    max-width: 1480px;
    margin: 0 auto;
    padding: 15px;
}
.routes__container {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}

.routes__container a {
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
