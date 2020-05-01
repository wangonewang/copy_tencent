import Vue from 'vue'
import VueRouter from 'vue-router'

// vue-router升级到3.0.7以上时使用$router.push方法时是返回一个promis,
// 所以使用push方法要在后面加catch方法
// 比如 this.$router.push('/home').catch(err => err),不然就会报错
// 如果不想加catch方法就加上下面这段代码
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}

const Index = () => import('views/index/index.vue')
const Busi = () => import('views/busi/busi.vue')
const Introd = () => import('views/introd/introd.vue')
const Investor = () => import('views/investor/investor.vue')
const Media = () => import('views/media/media.vue')
const Resp = () => import('views/resp/resp.vue')
const Staff = () => import('views/staff/staff.vue')

Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/introd',
      component: Introd
    },
    {
      path: '/busi',
      component: Busi
    },
    {
      path: '/staff',
      component: Staff
    },
    {
      path: '/resp',
      component: Resp
    },
    {
      path: '/investor',
      component: Investor
    },
    {
      path: '/media',
      component: Media
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
