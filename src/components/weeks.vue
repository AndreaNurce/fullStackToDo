<template>
    <div>
            <aside>
        <div class="sideBarContainer">
                <ul>
                    <li @click="print('Monday') " :class="{active: this.$store.state.week == 'Monday' }">Monday</li>
                    <li @click="print('Tuesday')  " :class="{active: this.$store.state.week == 'Tuesday' }">Tuesday</li>
                    <li @click="print('Wednesday') " :class="{active: this.$store.state.week == 'Wednesday' }">Wednesday</li>
                    <li @click="print('Tursday') " :class="{active: this.$store.state.week == 'Tursday' }">Tursday</li>
                    <li @click="print('Friday') " :class="{active: this.$store.state.week == 'Friday' }">Friday</li>
                </ul>
        </div>
            </aside>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
export default {

    
    data() {
        return {
        }
    },methods: {

        ...mapMutations(['getDate','print'])
        
    },mounted(){
           this.getDate();
           this.print(this.$store.state.week);
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
