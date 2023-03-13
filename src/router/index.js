import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignIn.vue"),
  },
  {
    path: "/activate",
    name: "Activate",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Activate.vue"),
  },
  {
    path: "/resend",
    name: "ResendOtp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResendOtp.vue"),
  },
  {
    path: "/reset",
    name: "Resetpassword",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Resetpassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requireLogin) &&
    !store.state.isAuthenticated
  )
    next({ name: "home" });
  else next();
});

export default router;
