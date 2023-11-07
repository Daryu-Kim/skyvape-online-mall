import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from "@/views/NotFoundView.vue";
import PaymentView from "@/views/PaymentView.vue";
import LoginView from "@/views/LoginView.vue";
import CartView from "@/views/CartView.vue";
import JoinView from "@/views/JoinView.vue";

const requireAuth = () => (to, from, next) => {
  if (localStorage.getItem('USER_TOKEN')) {
    return next();
  }
  next("/login");
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/join',
      name: 'join',
      component: JoinView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      beforeEnter: requireAuth(),

    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView
    },
    {
      path: "/notFound",
      name: "notFound",
      component: NotFoundView
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/notFound"
    }
  ]
})

export default router
