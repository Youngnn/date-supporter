<template>
    <div id="app">
      <SpotSearch videoId="fEruIKeTQNg" :width="784" :height="441" />
    </div>
  </template>
  
  <script>
  import SpotSearch from "../components/Spotsearch.vue";
  export default {
    components: {
    SpotSearch,
},
  };
  </script>