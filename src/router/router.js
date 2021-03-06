import Vue from 'vue'
import VueRouter from "vue-router"
//引入组件
import List from '../components/admin-list'
import Form from '../components/admin-form'
import Login from '../components/admin-login'
//告诉Vue使用VueRouter
Vue.use(VueRouter)

const routes = [
    { path:'/',component:List },
    { path:'/List',component:List },
    { path:'/Edit',component:Form },
    { path:'/Build',component:Form },
    { path:'/Login',component:Login }
]
const router = new VueRouter({
    routes
})
export default router