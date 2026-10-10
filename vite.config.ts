import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5174,
    strictPort: true,
    // 允许局域网其他设备通过本机 IP 访问（避免 Vite host 校验拦截）
    allowedHosts: true,
  },
})
