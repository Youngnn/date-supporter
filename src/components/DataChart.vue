<script>
import axios from 'axios'
import { Line } from "vue-chartjs"

const API_URL = 'http://localhost:8080/datas/'

export default {
	name: 'line-chart',
    extends: Line,
        data(){
        return {
            linedata: {
                labels: [
                "현재 온도",
                "1시간 후",
                "2시간 후",
                "3시간 후",
                "4시간 후",
                "5시간 후",
                "6시간 후",
                ],
                datasets: [ //axios library를 사용하여 datasets이 들어오면 그것을 밑에 Temperature에 넣어준다.
                {
                    label: "Temperature",
                    data: [18, 18, 19, 21, 24, 26, 26],
                    backgroundColor: "transparent",
                    borderColor: "rgba(1, 116, 188, 0.50)",
                    pointBackgroundColor: "rgba(255, 0, 0, 1)"
                }
                ]
            }
        }
    },
    mounted() {
        console.log(this.bardata)
    },
    created(){
        this.$bus.$on('deviceSelected',this.refleshData)
    },
    methods: {
      refleshData(data) {
        axios.get(API_URL+data.deviceId) //서버에 요청하기 API로 
        .then((response) => {            
            var data = response.data
            data.forEach((value,index)=>{
                this.linedata.datasets[0].data[index] = value['temperature'] //가지고오고싶은 값 넣어서 가져올 수 있음.
                console.log(value['temperature'])
            })
            this.renderChart(this.linedata, { //chart를 그려라
                responsive: true,maintainAspectRatio: false,
                title: {
                display: true,
                text: "My Data"
                }
            })
        })
        .catch((err) => {
        alert('에러 발생: ' + err); //에러 발생
        });          
      }
  }
};
</script>