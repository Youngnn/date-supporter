<template>
    <v-app> 
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click.stop="bDrawer=!bDrawer"></v-app-bar-nav-icon>
            <v-toolbar-title> 데이트 도우미</v-toolbar-title> (1760050_조영민)

        </v-app-bar>

        
        <v-navigation-drawer absolute temporary v-model="bDrawer">
            <v-toolbar flat height="100px">
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-avatar>
                                <img src="https://imgix.bustle.com/elite-daily/2015/07/06025354/elitedaily_KristenCurrette_travel.jpg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg">
                            </v-list-item-avatar>
                            <v-list-item-title class="title">성공적인 데이트 옵션</v-list-item-title>
                            <v-list-item-subtitle></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list class="pt-3">
                <v-list-item v-for="item in items" :key="item.text" :href="item.to">
                    <v-list-item-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{item.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-content>
           
        </v-content>
        <v-main>
            <router-view/> 
        </v-main>
        <v-footer>
            <v-btn text value="서비스 안내">
                <v-icon></v-icon>
            </v-btn>
        </v-footer>
    </v-app>
</template>



<script>
export default {
  name: 'App',
  components: {
    
  },
  data() {     //네비게이션 드로우 
      return {
      bDrawer: false,
      items: [
        { text: '사용방법', icon: 'mdi-book-open-variant' , to:'/about'}, //to로 경로 설정해준 것이다.
        { text: '오늘 날씨', icon: 'mdi-weather-sunny', to:'/weather' },
        { text: '좌표 찾기', icon: 'mdi-compass-outline', to: '/spotsearch' }, //좌표 찾기
        { text: '계획 차트', icon: 'mdi-account-multiple', to:'/home'},
        { text: '스케쥴', icon: 'mdi-calendar', to:'/calendar' },
        { text: '참고 SNS', icon: 'mdi-instagram', to:'/sns' },
      ],
      }
  }
};
</script>





