<template>
    <div>
      <h1>  영상보기 </h1>
    <u1>
      <li> 데이트 가기 전 꼭 영상보기! </li> 
      <li> 호감을 얻을 수 있는 데이트장소 꿀팁! </li> 
    </u1>
    <iframe width="1000" height="750" 
    src="https://www.youtube.com/embed/OdRspdhFgK0" 
    title="여자의 호감을 얻을 수 있는 데이트 장소 찾는 법" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    
      <h1> 국내여행, 데이트 유명 유튜버! </h1>
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/aVzHCksOJ4M" 
    title="[500만뷰 돌파] 3년 동안 직접 다녀온 해외여행 가고플 때 가면 좋은 외국같은 국내 여행지 베스트 14   수생학습식물원 제주비밀의숲 진안 마이산 비둘기낭폭포 외도보타니아 외" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>

    
  
    </div>
  </template>
  
  <script>
  export default {
    props: {
      width: {
        type: Number,
        default: 1280,
      },
      height: {
        type: Number,
        default: 720,
      },
      videoId: {
        type: String,
        required: true,
      },
    },
  };
  </script>

