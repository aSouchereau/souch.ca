import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as process from "node:process";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue()],
        resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
    server: {
      proxy: {
        '/api/' : {
          target: env.LYCHEE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization' : `Bearer ${env.PUB_LYCHEE_KEY}`,
          }

        }
      },
    }
  }

})
