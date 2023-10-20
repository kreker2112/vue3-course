<template>
    <form class="form" @submit.prevent>
        <h4>Создание поста</h4>
        <input
            v-model="post.title"
            class="input"
            type="text"
            placeholder="Название"
        />
        <input
            v-model="post.body"
            class="input"
            type="text"
            placeholder="Описание"
        />

        <button-create @click="createPost">Создать</button-create>
    </form>
</template>

<script>
import ButtonCreate from '@/components/UI/ButtonCreate'
import { v4 as uuidv4 } from 'uuid'
export default {
    components: {
        ButtonCreate,
    },
    emits: ['create'],
    data() {
        return {
            post: {
                title: '',
                body: '',
            },
        }
    },

    methods: {
        createPost() {
            this.id = uuidv4()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '',
            }
        },
    },
}
</script>

<style scoped>
.form {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px;
}
.form h4 {
    margin: 15px 0 0 0;
    text-align: center;
    font-size: 2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.input {
    width: 100%;
    border: 2px solid #18aa66;
    padding: 10px 15px;
    margin: 15px 0 0 0;
    border-radius: 10px;
}
</style>
