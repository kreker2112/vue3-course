<template>
    <div class="app">
        <h1 class="header__1">Страница с постами</h1>
        <big-button @click="ShowDialog">Создать пост</big-button>
        <my-dialog v-model:show="dialogVisible">
            <PostForm @create="createPost"
        /></my-dialog>

        <PostList :posts="posts" @remove="removePost" />
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
            dialogVisible: false,
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
            console.log(post.id)
            this.dialogVisible = false
        },
        removePost(post) {
            this.posts = this.posts.filter((item) => item.id !== post.id)
        },
        ShowDialog() {
            this.dialogVisible = true
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
.app {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px;
}
.header__1 {
    margin: 15px 0 0 0;
    text-align: center;
    font-size: 2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
