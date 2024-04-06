import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		// Добавляем каталог static в список разрешенных
		serve: {
		  allowed: ['/static']
		}
	  }
});
