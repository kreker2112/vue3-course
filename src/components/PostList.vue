<template>
    <div class="container__post">
        <h3>Список пользователей:</h3>
        <post-item v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script>
import PostItem from '@/components/PostItem'
export default {
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style scoped>
.container__post {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px;
}
.container__post h3 {
    margin: 15px 0 0 0;
    text-align: center;
    font-size: 2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
