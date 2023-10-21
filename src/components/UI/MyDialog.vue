<template>
    <div v-if="show" class="dialog" @click.stop="hideDialog">
        <div class="dialog__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:show'],
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        },
    },
}
</script>

<style scoped>
.dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.dialog__content {
    margin: auto;
    background-color: white;
    padding: 15px;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
}
</style>
