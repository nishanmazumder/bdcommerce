import Vue from 'vue'

// Import Vue Router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Import pages
import dashboard from './components/views/dashboard';
import hooks from './components/basic/hooks';
import methods from './components/basic/methods';
import vuex from './components/views/vuex';

//pages
import category from './components/views/category';

//const test = { template: '<div>foo</div>' }

const routes = [{
        path: '/',
        name: 'dashboard',
        component: dashboard
    },
    {
        path: '/category',
        name: 'category',
        component: category
    },
    {
        path: '/vuex',
        name: 'vuex',
        component: vuex
    },
    {
        path: '/hooks',
        component: hooks
    },
    {
        path: '/methods',
        component: methods
    }

]

// const router = new VueRouter({
//     routes
// })

// export default router;

export default new VueRouter({
    routes,
    //mode: 'history',
    linkActiveClass: 'active'
})
