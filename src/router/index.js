import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TvShowDetails from '../views/TvShowDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/tvShowDetails',
    name: 'tvShowDetails',
    component: TvShowDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
