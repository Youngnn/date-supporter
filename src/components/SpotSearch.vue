<template>
   <div>
      <h1>  장소 보는 방법 영상 </h1>
      <br>
    <u1>
      <li> 장소 찾아보기! </li> 
      <li> 장소 위도, 경도 찾기 </li> 
      <br>
    </u1>

    <iframe width="1500" height="800" src="https://www.youtube.com/embed/xbOxu-MG7ks" 
    title="구글맵, 카카오맵에서 위도 경도 좌표 찾는 방법" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    
    <h1>  밑의 버튼으로 구글맵 들어가는 링크 Click! </h1>  <br>
    <v-btn href="https://www.google.com/maps/"> 구글맵 링크</v-btn>
    <br>
    <br>
    <br>
    <br>

    <br>
    <br>
    <br>
    <br>
    <h1>  밑의 버튼으로 카카오맵 들어가는 링크 Click! </h1>  <br>
    <v-btn href=" https://map.kakao.com/"> 카카오맵 링크</v-btn>
    <br>
    <br>
    <br>
    <br>

    <h1> 영상 다시보러 가기 Click! </h1>  <br>
      <a href="#top"> 
      <strong >영상 다시보러 이동하기!</strong></a>
  </div>    
</template>
  
  <script>
  export default {
    props: {
      width: {
        type: Number,
        default: 1500,
      },
      height: {
        type: Number,
        default: 800,
      },
      videoId: {
        type: String,
        required: true,
      },
    },
  };
  </script>

