<template>
    <div>
            <aside>
        <div class="sideBarContainer">
                <ul>
                    <li @click="getDate()">Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Tursday</li>
                    <li>Friday</li>
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
    getDate: function (){
        
  var currentDate = new Date();

  this.week = currentDate.toLocaleString("default", { weekday: "long" });
  console.log(this.week);
}
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
    transform: translateY(-50%);
}

</style>
