# VÉRAN - React E-commerce Client

![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-purple)
![Status](https://img.shields.io/badge/Status-MVP_Ready-success)

基于 React 18 + Vite 构建的现代化电商前端应用。本项目专注于**前端工程化实践**，在无后端环境下实现了完整的用户会话隔离、网络层封装及组件化架构。

🔗 **在线演示：[https://veran-luxury-shop.vercel.app](https://veran-luxury-shop.vercel.app)**

## ⚡️ 核心架构 (Architecture)

### 1. 网络请求层封装 (Network Layer)
基于 Axios 进行二次封装，统一管理 HTTP 请求生命周期：
- **拦截器机制**：请求头自动注入 Token，响应层统一处理 `401 Unauthorized` 及网络异常。
- **配置化**：预设 5000ms 超时熔断，支持 BaseURL 动态切换。
- *File: `src/api/request.js`*

### 2. 购物车状态管理 (State Management)
自定义 Hook (`useCart`) 实现业务逻辑与视图分离：
- **数据隔离**：基于 `userToken` 动态切换 LocalStorage Key，实现 Guest/User 购物车数据物理隔离。
- **持久化同步**：状态变更自动同步至本地存储，保证刷新不丢失。
- *File: `src/hooks/useCart.js`*

### 3. 性能优化 (Performance)
- **计算属性缓存**：使用 `useMemo` 处理购物车金额与数量统计，避免频繁渲染时的无效计算。
- **组件原子化**：将 UI 拆分为 `ProductCard`, `SizeOverlay` 等独立组件，降低耦合。
- *File: `src/components/CartDrawer/index.jsx`*

## 🛠 技术栈 (Tech Stack)

- **核心框架**: React 18, React Router v6
- **构建工具**: Vite
- **状态/副作用**: React Hooks (useState, useEffect, useMemo)
- **网络请求**: Axios
- **样式方案**: CSS Modules (Scoped)

## 📂 目录结构 (Structure)

```text
src/
├── api/            # API 接口与 Axios 封装
├── assets/         # 静态资源
├── components/     # 通用组件 (Header, CartDrawer, etc.)
├── constants/      # 静态配置数据 (Products, Brands)
├── hooks/          # 自定义 Hooks (useCart, useScroll)
├── layout/         # 全局布局容器
├── views/          # 页面级入口
└── main.jsx        # 应用入口