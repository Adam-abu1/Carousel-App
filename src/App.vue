<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Content v-if="slides.length"/>
    <Footer/>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Content from "@/components/Content";
    import Footer from "@/components/Footer";
    import { mapState } from "vuex";

    export default {
        name: 'App',

        computed: {
          ...mapState(['slides'])
        },

        created() {
            this.$store.dispatch('fetchSlides');
        },
        components: {
            HelloWorld,
            Content,
            Footer
        }
    }
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
