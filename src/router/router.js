import Vue from 'vue'
import Router from 'vue-router'
import Phonebook from '../views/Phonebook.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Todolist from '../views/Todolist.vue'
import Diary from '../views/Diary/Index.vue'
import Entries from '../views/Diary/Entries.vue'
import Calendar from '../views/Diary/Calendar.vue'
import Write from '../views/Diary/Write.vue'
import Gallery from '../views/Gallery.vue'
import Img from '../views/Img.vue'
import Setting from '../views/Setting.vue'
import Help from '../views/Help.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/diary',
      component: Diary,
      children: [
        {
          path: 'entries',
          component: Entries
        },
        {
          path: 'calendar',
          component: Calendar
        },
        {
          path: 'write',
          component: Write
        }
      ]
    },
    {
      path: '/phonebook',
      component: Phonebook
    },
    {
      path: '/todolist',
      component: Todolist
    },
    {
      path: '/gallery',
      component: Gallery
    },
    {
      path: '/img',
      component: Img
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/help',
      component: Help
    }
  ]
})

// router.afterEach((to, from) => {
//   console.log(`从${from.path}到${to.path}跳转`)
//   let temp = ''
//   Array.prototype.map.call(document.querySelectorAll('.iconfont'), val => {
//     val.addEventListener('touchstart', e => {
//       temp = e.target.style.color
//       e.target.style.color = 'black'
//     })
//   })
//   Array.prototype.map.call(document.querySelectorAll('.iconfont'), val => {
//     val.addEventListener('touchend', e => {
//       e.target.style.color = temp
//     })
//   })
// })
export default router
