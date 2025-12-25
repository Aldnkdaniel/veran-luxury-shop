# VÉRAN - Luxury Fashion E-commerce

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Deployment](https://img.shields.io/badge/Live-Vercel-000000?logo=vercel&logoColor=white)](https://veran-luxury-shop.vercel.app)
[![Domain](https://img.shields.io/badge/Domain-Aliyun-orange?logo=alibabacloud&logoColor=white)](https://veran-shop.top)

> **沉浸式视觉复刻项目**：深度拆解并像素级还原 Louis Vuitton 官网视觉语言。本项目不仅是 UI 的重塑，更是一次基于 React 18 的高性能电商前端工程化实践。

🔗 **在线演示 (Live DPreview)**: [https://veran-shop.top](https://veran-shop.top) (阿里云自定义域名)  
🔗 **备用预览**: [https://veran-luxury-shop.vercel.app](https://veran-luxury-shop.vercel.app)

---

## 💎 项目亮点 (Core Highlights)

### 1. 像素级视觉复刻 (Pixel-Perfect UI)
* **杂志级排版**：运用 **Flex/Grid 复合布局** 还原奢侈品牌特有的留白艺术与非对称美学。
* **沉浸式交互**：实现了流畅的商品横向滚动展示及符合品牌调性的动态加载效果。

### 2. 原子化状态管理 (State Management)
* **核心方案**：采用 **Context API + Custom Hooks (useCart)** 模式，实现购物车逻辑与 UI 组件的深度解耦。
* **数据持久化**：支持用户会话级别的本地存储同步，确保在无后端环境下依然拥有完整的购物闭环体验。

### 3. 企业级网络层封装 (Network Layer)
* **Axios 二次封装**：统一配置请求/响应拦截器，实现全局 **Loading 状态机** 切换与网络异常捕获。
* **稳定性保障**：通过拦截器层级进行数据预处理，极大提升了前端对接口返回数据的鲁棒性。

### 4. 商业级自动化部署 (Engineering)
* **CI/CD 流水线**：集成 **Vercel + GitHub Actions**，实现代码推送即发布的自动化生产流。
* **生产优化**：利用 Vite 进行资源压缩与代码拆分，结合图片懒加载技术，显著优化首屏加载耗时。

---

## 🛠️ 技术栈 (Tech Stack)

* **框架**: React 18 (Hooks 模式)
* **构建**: Vite 5.0
* **路由**: React Router v6
* **通信**: Axios (Interceptors)
* **样式**: CSS Modules (Scoped)
* **基础**: JavaScript (ES6+), HTML5, CSS3 (高级布局特性)

---

## 📂 项目结构 (Project Structure)

```text
src/
├── api/            # 封装 Axios 实例及网络拦截逻辑
├── components/     # UI 原子组件 (ProductCard, SizeOverlay 等)
├── hooks/          # 核心业务逻辑 Hooks (useCart 购物车逻辑)
├── views/          # 视图层 (Home 首页, Category 分类页)
├── constants/      # 静态品牌数据与 Mock 配置文件
└── assets/         # 品牌视觉资源与全局样式