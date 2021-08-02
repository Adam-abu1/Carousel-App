<template>
<main>
    <div v-if="currentSlide.content">
        <div class="slide-header">{{ currentSlide.content.heading }}</div>
        <div class="slide-description">{{ currentSlide.content.description }}</div>
        <img v-if="image" :src="image.url" :alt="image.alt">
        <div v-for="group in currentSlide.content.groups" v-if="currentSlide.content.groups">
            <input type="checkbox" :name="group.label">
            <label :for="group.label">{{ group.label }}</label>
        </div>
    </div>
    <div v-if="!currentSlide.content">
        <div class="slide-header">{{ currentSlide.heading }}</div>
        <div class="slide-description">{{ currentSlide.description }}</div>
        <img v-if="image" :src="image.url" :alt="image.alt">
    </div>
</main>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        name: "Content",

        computed: {
            ...mapState(['currentSlide']),

            image() {
                if (this.currentSlide.content) {
                    return this.currentSlide.content.image && this.currentSlide.content.image;
                } else {
                    return this.currentSlide.image && this.currentSlide.image;
                }
            }
        },

        created() {
            this.$store.dispatch('fetchSlide', 1);
        }
    }
</script>

<style scoped>

</style>
