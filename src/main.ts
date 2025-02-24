import { createApp } from 'vue';
import App from './App.vue';
//引入路由
import router from './router';
//引入tailwindcss
import '@/styles/tailwind.css';
//引入仓库
import pinia from './store';

const app = createApp(App);

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

//使用路由
app.use(router);
//安装仓库
app.use(pinia);

app.mount('#app');
