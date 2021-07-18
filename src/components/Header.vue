<template>
<header>
    <h3 class="slide-heading">{{ currentSlide.heading }}</h3>
    <input type="checkbox" v-for="slide in slides" >
</header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
