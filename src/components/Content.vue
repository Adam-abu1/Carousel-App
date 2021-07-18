<template>
<main>
    <div v-if="currentSlide.content">
        <div class="slide-header">{{ currentSlide.content.heading }}</div>
        <div class="slide-description">{{ currentSlide.content.description }}</div>
        <img :src="currentSlide.content.image.url" :alt="currentSlide.content.image.alt">
    </div>
    <div v-if="!currentSlide.content">
        <div class="slide-header">{{ currentSlide.heading }}</div>
        <div class="slide-description">{{ currentSlide.description }}</div>
        <img :src="currentSlide.image.url" :alt="currentSlide.image.alt">
    </div>
</main>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        name: "Content",

        computed: {
            ...mapState(['currentSlide'])
        },

        created() {
            this.$store.dispatch('fetchSlide', 1);
        }
    }
</script>

<style scoped>

</style>
