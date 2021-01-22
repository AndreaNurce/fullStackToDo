import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state :{
        week: '',
    },
    mutations :{
        getDate(state) {
            var currentDate = new Date();
            state.week = currentDate.toLocaleString("default", { weekday: "long" });
            
        },
        print(state,day){
            state.week = day;
            console.log(state.week);
        }
    },
})