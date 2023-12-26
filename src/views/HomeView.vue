<template> 
  <div class="home">
    <v-container fluid>
    <a href="#one">여행지 추가테이블로 이동</a>
    <p>첫번 째로 이동</p> 

    <a href="#two">여행지 온도그래프로 이동</a>
    <p>두번 째로 이동</p>
    
    <a href="#three">지도로 이동</a>
    <p>세번 째로 이동</p> 

    <a href="#four">날짜로 이동</a>
    <p>네번 째로 이동</p> 

    <br>
    <br>
    <br>
    <br>
    <br>

                <v-row>
                    <v-col>
                      <p id ="여행지 추가" style="margin-top: 10px"><strong>여행지 추가</strong></p>
                      <device-table/>
                    </v-col>
                    
                    <!-- <v-col>
                      <p id ="one" style="margin-top: 10px"><strong>여행지의 온습도</strong></p>
                      <data-table/>
                    </v-col> -->
                </v-row>

              <br>
              <br>

                <v-row>
                    <v-col>
                      <p id ="two" style="margin-top: 500px"><strong>여행자의 온도를 그래프</strong></p>
                      <data-chart/>
                    </v-col>
                </v-row>


                <v-row>
                    <v-col>
                      <p id ="three" style="margin-top: 700px"><strong>여행지의 지도정보</strong></p>
                      <google-map/>
                    </v-col>
                </v-row>

                <br>
                

                <v-row>
                    <v-col>
                      <p id ="four" style="margin-top: 1000px">
                      <strong>첫 번째 여행위한 날짜정보</strong></p>
                      <date-picker/>
                      <v-col>

                        <br>
                        <br>
                        <br>
                        <br>


                      <strong>두번 째 여행위한 날짜정보</strong>
                    <date-picker v-on:newDate = "dateUpdate"/>
                      </v-col>
                      <a href="#top">  <br>
                                       <br>
                                       <br>
                                       <br> 상단으로 이동</a>

                    </v-col>
                </v-row>

              </v-container>         
  </div>
</template>

<script>
import DataTable from '../components/DataTable'; //부품을 끼워 넣는 곳
import DeviceTable from '../components/DeviceTable';
import GoogleMap from '../components/GoogleMap';
import DataChart from '../components/DataChart';
import DatePicker from '../components/DatePicker';
import Calendar from '../components/Calendar';

  export default {
    name: 'App',
      components: {
        DataTable,
        DeviceTable,
        GoogleMap,
        DataChart,
        DatePicker,
        Calendar,
    },
  data: () => ({
    //
  }),
  methods: {
    dateUpdate(date){
      alert(date);
  }
}
}
</script>


