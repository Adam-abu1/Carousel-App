<template>
    <footer>
        <div class="slide-navigational-buttons">
            <button class="back-button">BACK</button>
            <input type="checkbox" disabled>
            <button class="next-button">NEXT</button>
        </div>
        <div class="footer-links">
            <a target="_blank" v-for="footer in footers" :href="footer.url">{{ footer.label }}</a>
        </div>
    </footer>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "Footer",

        computed: {
            ...mapState(['footers'])
        },

        created() {
            this.$store.dispatch('fetchFooters');
        }
    }
</script>

<style scoped lang="scss">
button {
    border-radius: 40%;
    padding: 0.9em 1.4em;
    margin: 2em;
    background-color: transparent;
    border: 2px solid #000;

    &.next-button {
        background-color: #000;
        color: #FFF;
    }
}

a {
    text-transform: uppercase;
    padding: 1vw;
    text-decoration: none;
}
</style>
