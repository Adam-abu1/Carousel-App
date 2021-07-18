import {createStore} from 'vuex';
import SlidesContent from "@/Api/SlidesContent";

export default createStore({
    state: {
        slides: [],
        currentSlide: {},
        footers: {}
    },
    mutations: {
        SET_SLIDES(state, slides) {
            state.slides = slides;
        },

        SET_CURRENT_SLIDE(state, slide) {
            state.currentSlide = slide;
        },
        SET_FOOTERS(state, footers) {
            state.footers = footers;
        }
    },
    actions: {
        fetchSlides({ commit }) {
            SlidesContent.getContent()
                .then(response => {
                    commit('SET_SLIDES', response.data.slides);
                })
                .catch(error => {
                    console.error('There was a problem fetching the slide: ' + error.message)
                });
        },
        fetchSlide({ commit, getters }, id) {
            return  getters.getSlideById(id);
        },
        fetchFooters({ commit }) {
            SlidesContent.getContent()
                .then(response => {
                    commit('SET_FOOTERS', response.data.footer);
                })
                .catch(error => {
                    console.error('There was a problem fetching the footers: ' + error.message);
                });
        }
    },
    getters: {
        getSlideById: state => id => {
            return state.slides.find(slide => slide.id === id);
        }
    }
});
