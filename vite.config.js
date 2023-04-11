import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // @代表src，所以以后要找src里的文件，就可以用@l
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 反向代理
  server:{
    port:'8080',
    proxy: {
      '/api': {
        target:'http://localhost:3000',
        changeOrigin:true,
        // 后端接口不带api，所以要写一下
        rewrite:(path) => path.replace(/^\/api/,'')
      },
    }
  }
})
