import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/movie/:id",
    name: "MovieDetails",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Detail.vue")
  },
  {
    path: "/movie/:id/tickets",
    name: "Tickets",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Tickets.vue")
  },
  {
    path: "/movie/:id/seat-selection",
    name: "SeatSelection",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/SeatSelection.vue")
  }

  // {
  //   path: "/about",
  //   name: "About",
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   hich is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
