import Vue from 'vue'

// Import Vue Router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//pages
//import error from './components/views/404';
import home from './components/views/home';
import blog from './components/views/blog';

const routes = [
    //{ path: '*', component: error },
    { path: '/', name: 'home', component: home },
    { path: 'blog', name: 'blog', component: blog },
]

export default new VueRouter({
    routes,
    //mode: 'history',
    //linkActiveClass: 'active'
})
