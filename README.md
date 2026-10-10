# Crystal Liu — 编辑风作品集落地页

![Crystal Liu 肖像](public/sxjj.png)

黑色 / 米色（black / cream）编辑排版的单人作品集单页 Hero，基于 Vite + React + TypeScript + Tailwind CSS 构建。

## 技术栈

- **构建工具**：[Vite 5](https://vitejs.dev/)
- **框架**：React 18 + TypeScript
- **样式**：Tailwind CSS 3 + 自定义 `@font-face`（Helvetica Neue ME）
- **图标**：lucide-react
- **包管理**：pnpm（不使用 npm）

## 快速开始

```bash
pnpm install      # 安装依赖（首次）
pnpm dev          # 启动开发服务器，默认 http://localhost:5174
pnpm build        # 类型检查 + 生产构建，产物在 dist/
pnpm preview      # 本地预览生产构建
```

> 开发服务器固定监听 **5174** 端口（`strictPort`），并已开启 `host: true` 以支持局域网访问。

## 目录结构

```
ui/
├─ public/            # 静态资源（直接以根路径提供）
│  └─ sxjj.png        # 人物 cutout 肖像，App.tsx 中经 /sxjj.png 引用
├─ src/
│  ├─ App.tsx         # 主组件：Hero / 跑马灯 / 抽屉 / 入场动画
│  ├─ index.css       # 全局样式、@font-face、关键帧动画
│  └─ main.tsx        # React 入口
├─ index.html         # 页面外壳（<title> 等）
├─ vite.config.ts
├─ tailwind.config.js
└─ tsconfig*.json
```

## 说明

- 肖像图片读取的是 `public/sxjj.png`。
- 动画遵循 `prefers-reduced-motion`：在开启"减少动态效果"的系统上会自动塌缩，属预期行为。
