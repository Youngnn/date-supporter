<template> 
    <div class="calendar">
        <h1> 이번 스케쥴 </h1>
        <br>
        <br/>
        <v-container fluid>
             <v-row>
                <v-col>
                    <calendar/>
                </v-col>
            </v-row>
        </v-container>         
    </div>
  </template>
  
  <script>
  import Calendar from '../components/Calendar'; //부품
  
    export default {
      name: 'App',
        components: {
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
  
  
