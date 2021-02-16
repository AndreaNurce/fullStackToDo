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
        url: 'http://localhost:5000/',
    },
    mutations :{
        async getDate(state) {
            var currentDate = new Date();
            state.week = currentDate.toLocaleString("default", { weekday: "long" });

            let res = await axios.get(state.url, {
                params: {
                    day: state.week
                }});
            state.response = res.data;
        },
        async print(state,payload){
            state.week = payload;
            let res = await axios.get(state.url, {
                params: {
                    day: state.week
                }
            })
            state.response = res.data;
            
        }, 
        stare(state){
            state.important = !state.important;
            if (state.important== true){
                document.querySelector('#toDO').style.border = '1px solid yellow';
            }else{
                document.querySelector('#toDO').style.border = '1px solid black';
            }
        },
        async save(state) {
            if (state.toDoText !== ''){

            await axios.post(state.url,{
                day: state.week,
                data: state.toDoText,
                important: state.important,
            })

                let res = await axios.get(state.url, {
                    params: {
                        day: state.week
                    }
                });
                state.response = res.data;
            
            state.show = !state.show;
            state.important =false;
            state.toDoText = '';
        }

        }, newItem(state){
            state.show = !state.show;
            state.important = false;
            document.querySelector('#toDO').style.border = '1px solid black';
            

        },
        setState(state, value){
            state.toDoText = value;
            value = '';
        }, async checked(state , [check,id]){
            check = !check
            let res = await axios.put(state.url, {
                day : state.week,
                id: id,
                checked : check
            });
            state.response = res.data;
        }, async deleteItem(state , id){
            let res = await axios.delete(state.url ,{params :  {
                day: state.week,
                id: id, 
            }});
            state.response = res.data;
        }

    }
})