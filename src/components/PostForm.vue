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
        <button class="button__input" @click="createPost">Создать</button>
    </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
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
.button__input {
    width: 100%;
    border: 2px solid #18aa66;
    padding: 10px 15px;
    margin: 15px 0 0 0;
    background-color: #18aa66;
    box-shadow: 2px 2px 2px #6ac054;
    color: #fff;
    cursor: pointer;
    border-radius: 10px 5px 10px 5px;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        background-color: #ff6384;
    }
    50% {
        transform: scale(1.5);
        background-color: #42a5f5;
    }
    100% {
        transform: scale(1);
        background-color: #ff6384;
    }
}
.button__input:hover {
    background-color: #6ac054;
    box-shadow: 2px 2px 2px #18aa66;
    transform: scale(1.01);
    transition: all 0.5s;
}
</style>
