export const DEFAULT_LAYOUT = () => import('@/layout/DefaultLayout.vue');

/**
 * 跳转
 */
export const REDIRECT_MAIN = {
    path: '/redirect',
    name: 'redirectWrapper',
    component: DEFAULT_LAYOUT,
    meta: {
        requiresAuth: true,
        hideInMenu: true,
    },
    children: [
        {
            path: '/redirect/:path',
            name: 'Redirect',
            component: () => import('@/views/Redirect/index.vue'),
            meta: {
                requiresAuth: true,
                hideInMenu: true,
            },
        },
    ],
}

/**
 * 找不到路由
 * @type {{path: string, component: (function(): Promise<*>), name: string}}
 */
export const NOT_FOUND_ROUTE = {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFound/index.vue'),
};