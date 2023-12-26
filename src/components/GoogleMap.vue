<template>
<div>
	<div id = "map-canvas"/>
</div>
</template>

<script>
	export default {
		name: 'map-canvas',
        created(){
            this.$bus.$on('deviceSelected',this.refleshData)
        },
        methods: {
            refleshData(data) {
                /*global google*/
 //               console.log(data.latitude)
                var center = new google.maps.LatLng(data.latitude,data.longitude)
                new google.maps.Map(document.getElementById('map-canvas'), {
                    center : center,
                    zoom:12
                })  
                this.$bus.$emit('sendCorrdinate',map.getCenter())
		  		var marker = new google.maps.Marker({ //marker를 표시
					position:center,
					 map:map
		  })
		  //이벤트를 실행하는 리스너(함수)를 등록
		  map.addListener('center_changed', () => {
			//(구글맵 api)마커 위치를 계속중심으로 위치
			marker.setPosition(map.getCenter())
		  })
		  //이벤트를 실행하는 리스너를 등록
		  map.addListener('center_changed',()=>{
			 this.$bus.$emit('sendCoordinate',map.getCenter())
          })      
           
        }
    }
}</script>


 //맵의 세로 가로길이
<style scoped>
	#map-canvas{ 
		width: 1350px; 
		height: 750px;
	} 
</style>