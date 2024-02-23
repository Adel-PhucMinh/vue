<template>

    <main class="home__main">

        <h1>Home Page</h1>

    </main>

</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    console.log('HomeView page has mounted');
});
onUnmounted(() => {
    console.log('HomeView page has been destroyed');
});

</script>
<style lang="scss" scoped>


//.home__main {

//    h1 {
        
//    }
//}

</style>