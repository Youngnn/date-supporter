<template>
    <v-row justify="center">
      <v-date-picker
        v-model="picker"
        @click:date ="Click" 
      ></v-date-picker> 
    </v-row>
  </template>
 

 
<script>
export default {
  data () {
    return {
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }
  },
  
  methods: {
    Click(date){
        this.$emit('newDate', date) //event 발생
    }
  }
}
</script>