import { createRouter, createWebHistory } from 'vue-router';
import { contantRoute } from './routes';

//创建路由器
const router = createRouter({
	//路由模式
	history: createWebHistory(),
	routes: contantRoute,
	//滚动行为
	scrollBehavior() {
		return {
			left: 0,
			top: 0,
		};
	},
});
export default router;
