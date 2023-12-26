import Vue from 'vue'
import VueRouter from 'vue-router' //설치된 vue-router로부터  가져온 이름
import HomeView from '../views/HomeView.vue'
import WeatherView from '../views/WeatherView.vue'
import CalendarView from '../views/CalendarView.vue'
import DataTable from '../components/DataTable.vue'
import GoogelMap from '../components/GoogleMap.vue'
import Sns from '../components/Sns.vue'
import Spot from '../components/SpotSearch.vue'



Vue.use(VueRouter) //라우터 가동시킨다. (VueRouter는 생성자 객체)

const routes = [ //실제로 경로로 들어오면 어떤 page를 보여줄지 설정하는 것.
  {
    path: '/home', //route 경로로 들어오면 homeview 보여준다.
    name: 'home',
    component: HomeView //view에 설정되어있음
  },
  {
    path: '/dataTable',
    name: 'dataTable',
    component: DataTable
  },
  {
    path: '/about', //about 경로로 들어오면 aboutview 보여준다.
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. => 필요하지 않은 것들은 로딩을 천천히한다.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherView
  },
  {
    path: '/googelMap',
    name: 'googelMap',
    component: GoogelMap
  },
  {
    path: '/Sns',
    name: 'Sns',
    component: Sns
  },
  {
    path: '/SpotSearch',
    name: 'spotsearch',
    component: Spot
  },
]

const router = new VueRouter({ //새로운 Vue instace가 만들어 진다는 것이다.
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router //쓸 수 있도록 해주는 것
