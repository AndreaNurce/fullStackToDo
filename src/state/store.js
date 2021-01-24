import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state :{
        week: '',
        show: false,
        important: false,
        toDoText : '',
    },
    mutations :{
        getDate(state) {
            var currentDate = new Date();
            state.week = currentDate.toLocaleString("default", { weekday: "long" });
            
        },
        print(state,payload){
            state.week = payload;
        }, 
        stare(state){
            state.important = !state.important;
        },
        save(state) {
            state.show = !state.show;
            state.important =false;
        },
        setState(state, value){
            state.toDoText = value;
        }

    },
})