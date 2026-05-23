# Lumicome

中欧跨境 · 巴黎 / 上海。React + Babel (浏览器编译) 单页站。

## 目录结构

```
/
├── index.html              入口,加载 React/Babel CDN 与三份 JSX
├── css/style.css           全站样式(基于 v7 design)
├── js/
│   ├── content.jsx         LUMI 数据(中英对照,各节内容)
│   ├── sections.jsx        各页面组件(HomePage / ArchivePage / …)
│   └── app.jsx             根组件 · 头部导航 · 语言切换 · 路由
└── favicon.svg
```

## 页面

- **/** 首页 — Hero / Ticker / Stats / 四个 Module / 近作 / Partners / Contact
- **/#archive** 视觉档案 — 带筛选,Hover 翻转展示完整 crew
- **/#journal** 编辑室 — 文章列表,已发表的可展开
- **/#collaborative** 协作院 — 8 城市 · 4 学科 · 准入表单(含 Charter 勾选)
- **/#protocol** 协作公约 — 十节条款,从 SPOC 到 ICC 仲裁
- **/#vision** 愿景 / 创始人手记 — 6 段 + 4 支柱 + 两个 CTA
- **/#press** 媒体与背书 — 5 条引文 + 投资人垂询
- **/#team** 团队 — 创始人 + 三个在招岗位 + 顾问
- **/#legal** Mentions Légales · Privacy · Cookies
- **/#contact** 联系 — 表单 + 两地地址 + 协作邮箱

## 本地预览

```sh
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 关于 React/Babel 浏览器编译

第一版用 `@babel/standalone` 在浏览器里现场编译 JSX,无需构建工具。
代价是首屏会有数百 ms 的编译时间。**正式上线前需要预编译**(用 Vite / esbuild),
把三份 .jsx 编译成单个 .js,删掉 Babel CDN。

## 字体

经 Google Fonts 加载:
- Cormorant Garamond / EB Garamond(英文衬线 · 斜体显示字)
- Inter(英文无衬线 · 标签)
- Noto Sans SC / Noto Serif SC(中文)

主字体栈优先 Helvetica Neue / PingFang SC,Google Fonts 字体仅作回退与衬线斜体。

## 调色板

`body[data-palette="paper"]` 默认 — 暖白纸面感。
可在 `body` 标签上换 `atelier`(深米色)或 `night`(深色)预览。

## 上线前还要做

- 在 `js/content.jsx` 里逐字核对每条声明(Forbes / Printemps / SHIATZY CHEN /
  两家公司主体的 SIREN / VAT / 18 位统一信用代码 …),用真实的内容替换占位
- 预编译 JSX,删 Babel CDN
- 替换 .plate 米色色块为真实图片(每张 < 200KB)
- 法务页文本由巴黎本地法务顾问审一遍
- favicon / og:image 用品牌资产替换
- Newsletter / 表单的 submit 接到后端(目前只是本地 setSent(true))
