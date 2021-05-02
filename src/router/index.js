import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TvShowDetails from '../views/TvShowDetails.vue';
import Favorites from '../views/Favorites.vue';
import Upcoming from '../views/Upcoming.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/show',
    name: 'tvShowDetails',
    component: TvShowDetails,
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites,
  },
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: Upcoming,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
