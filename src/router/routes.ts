//对外暴露这些配置的路由
export const contantRoute = [
	{
		//登录
		path: '/login',
		component: () => import('@/views/login/index.vue'),
		name: 'denglu',
	},
	{
		//登陆后成功展示的数据
		path: '/',
		component: () => import('@/views/home/index.vue'),
		name: 'layout',
	},
	{
		path: '/404',
		component: () => import('@/views/404/index.vue'),
		name: 'error',
	},
];
