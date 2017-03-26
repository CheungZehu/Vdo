import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import MovieTab from '@/view/Movie/Tab'
import MovieSubject from '@/view/Movie/Subject'
import MovieSearch from '@/view/Movie/Search'
import About from '@/view/About/Index'

Vue.use(Router)

export default new Router({
	// mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/movie/home',
      name: 'Home',
      component: MovieTab
    },
    {
      path: '/movie/home',
      name: 'MovieHome',
      component: MovieTab
    },
    {
    	path: '/movie/subject/:id',
    	name: 'MovieSubject',
    	component: MovieSubject
    },
    {
      path: '/movie/Search',
      name: 'MovieSearch',
      component: MovieSearch
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
