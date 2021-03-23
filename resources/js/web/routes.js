import Vue from 'vue'

// Import Vue Router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//Auth
import login from './components/auth/login';
import register from './components/auth/register';

//User
import account from './components/user/account';
import wishlist from './components/user/wishlist';

//Pages
//import error from './components/views/404';
import home from './components/views/home';
import blog from './components/views/blog';



const routes = [
    //{ path: '*', component: error },

    //Auth
    { path: '/login', name: 'Login', component: login },
    { path: '/register', name: 'Register', component: register },

    //User
    { path: '/account', name: 'Account', component: account },
    { path: '/wishlist', name: 'Wishlist', component: wishlist },

    //Pages
    { path: '/', name: 'Home', component: home },
    { path: '/blog', name: 'Blog', component: blog },
]

export default new VueRouter({
    routes,
    //mode: 'history',
    //linkActiveClass: 'active'
})
