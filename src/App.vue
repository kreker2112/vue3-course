<template>
    <div class="app">
        <h1 class="header__1">Страница с постами</h1>
        <div class="btn_fetch">
            <small-button @click="fetchPosts">Получить посты</small-button>
        </div>

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
import axios from 'axios'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/posts'
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
    mounted() {
        this.fetchPosts()
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
            this.dialogVisible = false
        },
        removePost(post) {
            this.posts = this.posts.filter((item) => item.id !== post.id)
        },
        ShowDialog() {
            this.dialogVisible = true
        },
        async fetchPosts() {
            const fetchSettings = {
                mainSetting: '_limit',
                postsPerLimit: '10',
            }
            try {
                setTimeout(async () => {
                    const response = await axios.get(
                        `?${fetchSettings.mainSetting}=${fetchSettings.postsPerLimit}`,
                    )
                    this.posts = response.data
                }, 1000)
            } catch (e) {
                alert(e)
            }
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
    max-width: 1480px;
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
.btn_fetch {
    display: flex;
    justify-content: center;
    margin: 15px 0;
}
</style>
