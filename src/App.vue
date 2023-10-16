<template>
    <div class="app">
        <PostForm @create="createPost" />
        <PostList :posts="posts" />
    </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
export default {
    components: {
        PostForm,
        PostList,
    },
    data() {
        return {
            posts: [],
            //Данный компонент мы не переносим в соответствующие компоненты, а оставляем в App.vue, поскольку данный компонент будет переиспользуемым
            // и в данном примере внутри себя он не должен содержать список постов, поскольку эти посты должны поступать извне. То есть на одной странице один список постов,
            // а на другой - другой список постов, они разные. Таким образом компонент не содержит в себе модель постов, но он извне получает некоторый аргумент. Как функция
            // принимает какие-то рагументы, так и наш компонент может принимать какие-то параметры, аргументы, и в контексте Vue.js эти параметры называются props.
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
        },
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
