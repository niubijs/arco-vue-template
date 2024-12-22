import {createRouter, createWebHistory} from 'vue-router'
import {DEFAULT_LAYOUT, NOT_FOUND_ROUTE, REDIRECT_MAIN} from "@/router/routes/base.js";
import {isLogin} from "@/utils/auth.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: 'dashboard/workspace'
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login/index.vue'),
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DEFAULT_LAYOUT,
            children: [
                {
                    path: 'workspace',
                    name: 'workspace',
                    component: () => import('@/views/WorkSpace/index.vue')
                },
            ]
        },
        REDIRECT_MAIN,
        NOT_FOUND_ROUTE
    ],
})

router.beforeEach((to, from, next) => {
    console.log(to, isLogin())
    if (isLogin()) {
        console.log('用户已登录')
        // next({
        //     name: 'login',
        // })
        next()
    } else {
        if (to.name === 'login') {
            console.log()
            next();
            return;
        }
        next({
            name: 'login',
            query: {
                redirect: to.name,
                ...to.query
            }
        })
    }
    // if (isLogin()) {
    //     // if (userStore.role) {
    //     //     next();
    //     // } else {
    //     //     try {
    //     //         next();
    //     //     } catch (error) {
    //     //         next({
    //     //             name: 'login',
    //     //             query: {
    //     //                 redirect: to.name,
    //     //                 ...to.query,
    //     //             },
    //     //         });
    //     //     }
    //     // }
    //     next()
    // } else {
    //     if (to.name === 'login') {
    //         next();
    //         return;
    //     }
    //     next({
    //         name: 'login',
    //         query: {
    //             redirect: to.name,
    //             ...to.query,
    //         },
    //     });
    // }
})

export default router
