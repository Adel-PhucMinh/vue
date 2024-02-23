<template>

    <form>
        <article v-for="(el, index) in inputs" :key="index">
        <input v-for="el in inputs" :type="el.type" :placeholder="el.placeholder" :id="el.name">
        </article>
    </form>

</template>
<script setup>

defineProps({
    inputs: {
        type: Array,
        default: []
    }
})

</script>
<style lang="scss" scoped>

</style>