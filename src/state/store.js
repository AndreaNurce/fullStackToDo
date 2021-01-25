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
            if (state.important== true){
                document.querySelector('#toDO').style.border = '1px solid yellow';
            }else{
                document.querySelector('#toDO').style.border = '1px solid black';
            }
        },
        save(state) {
            state.show = !state.show;
            state.important =false;
            document.querySelector('#toDO').style.border = '1px solid black';

        },
        setState(state, value){
            state.toDoText = value;
        }

    },
})