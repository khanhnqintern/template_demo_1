import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/homepage",
      name: 'homepage',
      component: () => import('@/views/TheHomePage.vue'),
      children: []
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import('@/views/TheDetail.vue'),
      children: []
    },
    {
      path: "/login",
      name: "login",
      component: () => import('@/components/TheLoginMobile.vue'),
      children: []
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import('@/components/TheSignUpMobile.vue'),
      children: []
    },
    {
      path: "/search",
      name: "search",
      component: () => import('@/views/TheSearch.vue'),
      children: []
    },
    {
      path: "/mycourse",
      name: "mycourse",
      component: () => import('@/views/TheMyCourse.vue'),
      children: []
    },
    {
      path: "/account",
      name: "account",
      component: () => import('@/views/TheAccount.vue'),
      children: []
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name === 'login' && window.innerWidth >= 1024) {
    next({ path: '/homepage', query: { modalLogin: 'true' } });
  } if (to.name === 'signup' && window.innerWidth >= 1024) {
    next({ path: '/homepage', query: { modalSignUp: 'true' } });
  } else {
    next();
  }
});

export default router
