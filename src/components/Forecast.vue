<template>
	<div>
		<ul class="forecasts">
			<li v-for="forecast in forecasts" :key="forecast.dt" class="item">
                <div class="weekday">
                    {{convertToDate(forecast.dt) | weekday}}
				</div>
				<div class="icon">
                    <img src="`http://openweathermap.org/img/w/${forecast/weather[0].icon}.png`">
    			</div>
    			<div class="temperature">
        			{{(forecast.temp.day - 273.15).toFixed(0)}}℃
        		</div>
        	</li>
		</ul>
	</div>
</template>

<script>
	export default {
    	name: 'forecast',
    	data () {
     		return {
           		forecasts: [],
           		lat: 37.566535,
         		lng: 126.977969
        	}
    	},
    	filters: {
        	weekday(date){
            	let weekdayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
				return weekdayName[date.getDay()];
			}
		},
    	mounted() {
        	this.axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${this.lat}&lon=${this.lng}&cnt=10&appid=67c78818c6afe50f6425fa397c98a955`)
        	.then((response) => {
            	let data = response.data
            	this.forecasts = data.list
            })
            .catch((error) => {
                console.log(error);
            })
    	},
        methods: {
            convertToDate (timestamp) {
            	return new Date(timestamp * 1000)
            }
        }
	}
</script>

