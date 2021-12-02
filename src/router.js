import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Pages/Home.vue";
import Counter from "@/Pages/Counter.vue";
import Counter2 from "@/Pages/Counter2.vue";

import TodoList from "@/Pages/TodoList.vue";

const routes = [
  { path: "/", name: "Home", meta: { translation: "首頁" }, component: Home },
  {
    path: "/counter",
    name: "Counter",
    meta: { translation: "Counter" },
    // component: Counter,
    components: { default: Counter, second: Counter2 },
  },
  {
    path: "/todoList",
    name: "TodoList",
    meta: { translation: "TodoList" },
    component: TodoList,
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
