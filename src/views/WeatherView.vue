<template> 
    <div class="weather">
      <v-layout justify-center> 
        <h1> 오늘의 일기예보 </h1>
      </v-layout> 
        <br>
        <br/>
        <v-container fluid>
          <current-weather/>
        </v-container>         
    </div>
  </template>
  
  <script>
  import CurrentWeather from '../components/CurrentWeather'; //부품
  
    export default {
      name: 'App',
        components: {
          CurrentWeather,
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
  
  
