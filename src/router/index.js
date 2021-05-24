import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import home from '../components/home.vue'
import homepage from '../components/homePage.vue'
import breedingRecord from '../components/breedingInformation/breedingRecord.vue'
import userPage from '../components/userPage.vue'
import reproductivePerformance from '../components/breedingInformation/reproductivePerformance.vue'
import userDetails from '../components/userDetails.vue'
import sheep_Info from '../components/sheepManage/sheep_Info.vue'
import sheep_InfoUp from '../components/sheepManage/sheep_InfoUp.vue'

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [

]

const router = new VueRouter({
  routes: [
    {path: '/login', component: login},
    {path: '/', redirect: '/login' },
    {
      path: '/home', component: home,redirect:'/homePage',
      children: [{ path: '/homePage', component: homepage },
        { path: '/breedingRecord', component: breedingRecord },
        { path: '/userPage', component: userPage },
        { path: '/sheep_Info', component: sheep_Info },
        { path: '/reproductivePerformance', component: reproductivePerformance },
        { path: '/userDetails', component: userDetails },
        { path: '/sheep_InfoUp', component: sheep_InfoUp }
      ]
    },

  ]
})

//挂载路由导航守卫
/* router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next();
}) */

export default router
