# EAT 食物推荐

一个适配手机尺寸的静态食物推荐互动页面，可直接部署到 GitHub Pages。

## 项目结构

```text
eat-github-pages/
├── index.html          # 页面入口
├── css/style.css       # 页面样式与动画
├── js/app.js           # 选择、重选和分享交互
├── images/             # PNG 图片资源
├── svg/                # SVG 矢量资源
├── README.md           # 使用说明
└── .nojekyll           # 禁用 Jekyll 转换
```

## 本地预览

在项目目录中启动任意静态服务器，例如：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## 部署到 GitHub Pages

1. 新建一个 GitHub 仓库。
2. 将本目录中的全部文件上传到仓库根目录。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**。
5. 选择发布分支（通常为 `main`）和根目录 `/ (root)`，保存设置。
6. 等待 GitHub 完成部署后，使用 Pages 提供的网址访问。

页面为纯静态项目，不需要安装依赖或执行构建命令。
