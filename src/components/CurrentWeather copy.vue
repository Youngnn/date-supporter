<template>
    <div id="current-weather">
        <div class="location">{{location}}</div>
        <div class="weather">{{weather}}</div>
        <div class="temperature">{{temperature}}℃</div>
    </div>
</template>

<script>
    export default {
        name: 'current-weather',
        data(){
            return{
                location:'seoul',
                weather:'맑음',
                temperature:0,
                lat:37.566535,
                lng:126.977969
            }
        },
        created(){      //컴포넌트가 생성될 때 이벤트버스의 이벤트를 처리
            this.$bus.$on('deviceSelected',this.refleshData)
        },
        methods: {
                refleshData(data) {
                this.axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=10d785b4f2c5e38479be317c73db0e72`)
                .then((response)=>{
                    let data = response.data
                    this.location = data.name
                    this.weather = data.weather.main
                    this.temperature = (data.main.temp-273.15).toFixed(0)
                })
                .catch((error)=>{
                    console.log(error)
                })        
            }
        }
    }
</script>

<style scoped>
	.location {
		text-align : center;
		font-size : 40pt;
		color : rgb(0, 25, 253);
	}
	.weather{
		text-align : center;
		font-size : 20pt;
		font-weight : 100;
		color : black;
	}
	.temperature{
		text-align : center;
		font-size : 50pt;
		font-weight : 100;
		color : rgb(255, 0, 0);
	}
</style>