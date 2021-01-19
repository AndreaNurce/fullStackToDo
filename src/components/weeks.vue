<template>
    <div>
            <aside>
        <div class="sideBarContainer">
                <ul>
                    <li @click="print('Monday') " :class="{active: week == 'Monday' }">Monday</li>
                    <li @click="print('Tuesday')  " :class="{active: week == 'Tuesday' }">Tuesday</li>
                    <li @click="print('Wednesday') " :class="{active: week == 'Wednesday' }">Wednesday</li>
                    <li @click="print('Tursday') " :class="{active: week == 'Tursday' }">Tursday</li>
                    <li @click="print('Friday') " :class="{active: week == 'Friday' }">Friday</li>
                </ul>
        </div>
            </aside>
    </div>
</template>

<script>
export default {
    data() {
        return {
            week : '',
        }
    },
    methods: {
    print : function(day){
            this.week = day;

    },
    getDate: function (){
            var currentDate = new Date();
            this.week = currentDate.toLocaleString("default", { weekday: "long" });
        }
    },mounted(){
            this.getDate(); 
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
