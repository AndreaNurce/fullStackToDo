import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
    state :{
        week: '',
        show: true,
        important: false,
        toDoText : '',
        response : [],
    },
    mutations :{
        async getDate(state) {
            var currentDate = new Date();
            state.week = currentDate.toLocaleString("default", { weekday: "long" });

            let res = await axios.get('http://localhost:5000/', {
                params: {
                    day: state.week
                }});
            state.response = res.data;
            
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

            axios.post('http://localhost:5000/',{
                day: state.week,
                data: state.toDoText,
                important: state.important
            })
             
            state.show = !state.show;
            state.important =false;


        }, newItem(state){
            state.show = !state.show;
            state.important = false;
            document.querySelector('#toDO').style.border = '1px solid black';
        },
        setState(state, value){
            state.toDoText = value;
            value = '';
        }

    },
})