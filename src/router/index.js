import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LivrosharryViewVue from "../views/LivrosharryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/livrosharry",
      name: "Livro de harry Potter",
      component: LivrosharryViewVue,
    },
  ],
});

export default router;
