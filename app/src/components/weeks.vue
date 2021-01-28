<template>
    <div>
            <aside>
        <div class="sideBarContainer">
                <ul>
                    <li @click="print('Monday') " :class="{active: week == 'Monday' }">Monday</li>
                    <li @click="print('Tuesday')  " :class="{active: week == 'Tuesday' }">Tuesday</li>
                    <li @click="print('Wednesday') " :class="{active: week == 'Wednesday' }">Wednesday</li>
                    <li @click="print('Thursday') " :class="{active: week == 'Thursday' }">Tursday</li>
                    <li @click="print('Friday') " :class="{active: week == 'Friday' }">Friday</li>
                    <li @click="print('Saturday') " :class="{active: week == 'Saturday' }" style="color:red;">Saturday</li>
                    <li @click="print('Sunday') " :class="{active: week == 'Sunday' }" style="color:red;">Sunday</li>
                </ul>
        </div>
            </aside>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import {mapState} from 'vuex'
export default {
    computed :{
        ...mapState(['week'])
    },
    methods: {

        ...mapMutations(['getDate','print'])
        
    },created(){
           this.getDate();
           this.print(this.week);
        }
}
</script>

<style scoped>
aside{
    position:absolute;
    float :left;
    clear: both;
    padding: 5px 15px;
    height: 98.5vh;
    display: flex;
    justify-content: center;
    align-items: center;

}

li{

    list-style-type: none;
    padding: 5px;
    margin: 5px 0px ;
    transition:all ease-in-out .2s;

}
li:hover{
   cursor: pointer;
}
ul{
        transform: translateY(-10%);
}
.active{
    color:blue;    
    transform: scale(1.5);
    padding: 15px;
}

</style>
