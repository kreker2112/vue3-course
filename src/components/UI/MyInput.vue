<template>
    <input :value="modelValue" class="input" type="text" @input="updateInput" />
</template>

<script>
export default {
    // eslint-disable-next-line vue/component-definition-name-casing
    name: 'my-input',
    props: {
        modelValue: {
            type: [String, Number],
            default: '',
            required: true,
        },
    },
    emits: ['update:modelValue'],

    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    },
}
</script>

<style scoped>
.input {
    width: 100%;
    border: 2px solid #18aa66;
    padding: 10px 15px;
    margin: 15px 0 0 0;
    border-radius: 10px;
}
</style>
