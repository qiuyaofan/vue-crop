import Vue from 'vue'
import Router from 'vue-router'
import validSlide from 'src/views/validSlideDemo'
import vueCrop from 'src/views/vueCropDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/validSlide',
      name: 'validSlide',
      component: validSlide
    },
    {
      path: '/',
      name: 'vueCrop',
      component: vueCrop
    }
  ]
})
