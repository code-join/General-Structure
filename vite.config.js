import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Paths
import { routes } from './src/assets/data/routes.js';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: `${routes[0].path}`,
});
