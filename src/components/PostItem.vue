<template>
    <div class="post">
        <div class="post__titles">
            <div class="post__name">
                <strong>Название:</strong> {{ post.title }}
            </div>
            <div class="post__body">
                <strong>Описание:</strong> {{ post.body }}
            </div>
        </div>
        <div class="post__btns">
            <button class="post__btn--redact">Редактировать</button>
            <button class="post__btn--delete">Удалить</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>
.post {
    border: 2px solid #189ca5;
    padding: 15px;
    margin: 15px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
}

.post__titles {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    padding: 5px;
    font-size: larger;
    font-family: Arial, Helvetica, sans-serif;
}
.post__btns {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    padding: 5px;
    border-radius: 10px;
}

.post__btn--redact {
    background-color: #189ca5;
    color: #fff;
    border: none;
    box-shadow: 2px 2px 2px red;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
}

.post__btn--delete {
    background-color: #a51818;
    color: #fff;
    border: none;
    box-shadow: 2px 2px 2px #6ac054;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
}
</style>
