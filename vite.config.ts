import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import path from 'path';

import tailwindcss from '@tailwindcss/vite';
//mock插件提供方法
import { viteMockServe } from 'vite-plugin-mock';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
	return {
		plugins: [
			vue(),
			tailwindcss(),
			AutoImport({
				resolvers: [ElementPlusResolver()],
			}),
			Components({
				resolvers: [ElementPlusResolver()],
			}),
			viteMockServe({
				supportTs: true, // 如果使用 TypeScript，可以设置为 true
				localEnabled: command === 'serve', //保证开发阶段可以使用mock接口
			}),
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
	};
});
