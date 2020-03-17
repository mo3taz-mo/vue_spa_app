import Vue from 'vue';
import Router from 'vue-router';

import { purchaseRoutes } from '@/app/purchase';

import { AppLoginFrom, Dashboard, AppPageNotFound } from '@/app/shared/components';

Vue.use(Router);

const appRoutes = [
    {
        path: '/',
        name: 'login-form',
        meta: {
            layout: 'no-navbar',
            title: 'Login'
        },
        component: AppLoginFrom
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '*',
        name: 'page-not-found',
        component: AppPageNotFound
    }
];

const routes = [...purchaseRoutes, ...appRoutes];

export default new Router({
    mode: 'history',
    routes
});
