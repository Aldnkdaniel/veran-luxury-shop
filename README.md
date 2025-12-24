# VÉRAN - Luxury E-commerce System (Architecture Refactor)

## 🚀 线上演示 (Live Demo)
**[点击访问在线项目地址](https://veran-luxury-shop.vercel.app)**

## 🏗️ 核心重构审计 (Engineering Audit)

### 1. 工业级异步请求中心 (API Layer)
- **Axios 物理封装**：实现了具备 5000ms 超时熔断机制的全局拦截器。
- **异常捕获链路**：通过响应拦截器统一管理网络错误，将业务逻辑与错误捕获完全解耦。

### 2. 多账号隔离的持久化存储 (Storage Logic)
- **动态身份 Key**：基于 `userToken` 实现了购物车数据的物理隔离，确保不同账户间数据互不干扰。

### 3. 原子化组件拆解 (Modularization)
- **解耦重构**：将原本臃肿的组件拆分为 `FormField`、`ProductCard` 等高复用零件。

## 🛠️ 技术栈清单
React 18 + Vite + Axios + React-Router + Vercel Deployment