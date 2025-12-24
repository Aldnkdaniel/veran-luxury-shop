# VÉRAN - 极致主义奢侈品电商平台 (架构重构版)

## 🌟 项目定位
本项目是一个基于 React 的高端电商前端工程，旨在通过“物理重构”实现工业级的代码解耦与性能优化，模拟上海顶级互联网大厂的开发规范。

## 🏗️ 核心架构审计 (物理重构亮点)

### 1. 工业级 API 请求中枢
- **Axios 物理封装**：在 `src/api/request.js` 中实现了全局请求/响应拦截器。
- **智能防御**：具备 5000ms 超时熔断机制及 401 登录过期自动重定向逻辑。
- **业务解耦**：所有业务接口在 `api/product.js` 统一收口，支持 API Mock 模式，实现前后端并行开发。

### 2. 响应式多账号购物车系统
- **动态隔离存储**：自定义 `useCart` Hook 能够根据用户 `userToken` 物理切换 `localStorage` 存储 Key，确保不同总裁账号的数据绝对隔离。
- **原子化数据流**：状态由 `App.jsx` 顶层下发，通过 `MainLayout` 全局调度。

### 3. 集中化资产管理
- **Single Source of Truth**：全站 300+ 商品数据、品牌素材及配置参数统一物理合并至 `constants/Product.js`，极大降低了维护成本。

## 🛠️ 技术栈
- **核心框架**: React 18 + Vite
- **路由管理**: React-Router-DOM
- **网络通信**: Axios (含拦截器封装)
- **持久化**: LocalStorage API

## 🚀 快速启动
1. 安装依赖: `npm install`
2. 启动项目: `npm run dev`
3. 物理构建: `npm run build`