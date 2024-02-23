<template>

    <main class="login__main">

        <section>
            <FormComponent :inputs="inputs"/>
        </section>

    </main>

</template>
<script setup>
import FormComponent from "../components/myForm.vue"

const inputs = [
    {
        name: 'email',
        placeholder: 'entrez votre mail',
        type: ''
    },
    {
        name: 'email',
        placeholder: 'entrez votre mail',
        type: ''
    }
]


</script>
<style lang="scss" scoped>

//.login__main {
//    h1{

//    }
//}
</style>