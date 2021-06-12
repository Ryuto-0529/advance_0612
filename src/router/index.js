import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import RegistrationThanks from '../views/RegistrationThanks.vue'
import BookingThanks from '../views/BookingThanks.vue'
import ShopDetail from '../views/ShopDetail.vue';
import Mypage from '../views/Mypage.vue';
import store from '../store/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/registrationthanks',
    name: 'registrationthanks',
    component: RegistrationThanks
  },
  {
    path: '/bookingthanks',
    name: 'bookingthanks',
    component: BookingThanks
  },
  {
    path: '/shopdetail/:shop_id',
    name: 'shopdetail',
    component: ShopDetail,
    meta: {
      requiresAuth: true,
    },
    props: true
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: Mypage,
    meta: {
      requiresAuth: true,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.id
  ) {
    next({
      path: '/',
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router;
