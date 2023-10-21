<!-- eslint-disable vue/component-definition-name-casing -->
<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
// eslint-disable-next-line vue/component-definition-name-casing
export default { name: 'big-button' }
</script>

<style scoped>
.btn_container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.button {
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

.button:hover {
    background-color: #6ac054;
    box-shadow: 2px 2px 2px #18aa66;
    transform: scale(1.01);
    transition: all 0.9s;
}
</style>
