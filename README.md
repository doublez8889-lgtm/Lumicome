# Lumicome

施工版本 v1.1 · 静态 HTML/CSS 站点。

## 目录结构

```
/
├── index.html                       首页(七个区块)
├── css/style.css                    全站样式
├── favicon.svg
├── roster/index.html                名册(七位)
├── works/
│   ├── index.html                   作品档案
│   └── letter-south-france.html     作品详情页模板
├── writing/
│   ├── index.html                   手记列表
│   └── 001-title-inflation.html     第一篇手记
├── patrons/
│   ├── index.html                   委托方说明
│   └── apply.html                   申请表
├── office/index.html                事务所(联络 / 关于 / 法律链接)
└── legal/                           隐私 / Cookie / 条款 / 致谢
```

## 路径说明

施工图原文使用路径 `/index` 指向”名册”页。在静态托管(Cloudflare Pages / Vercel / Framer)下,`/index`
会与 `index.html` 解析冲突,因此本实现使用 `/roster/`。如需保留原路径,可在托管商处配置重写(rewrite)
规则:`/index/ → /roster/index.html`。

## 本地预览

```
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

或任何其他静态文件服务器。

## 字体加载

所有字体经 Google Fonts 加载。中文字体(Noto Serif SC / Noto Sans SC)体积较大,首次加载可能慢。
正式上线前请按施工图 § 08 第一条提示,启用 subset 或自托管字体,首屏体积压到 1MB 以内。

## 待你替换的内容

- `writing/001-title-inflation.html` 文章正文(目前为占位)
- `works/letter-south-france.html` 之外的其他作品详情页(目前只有一页模板,其余作品需复制此页)
- `patrons/index.html` 第三段(权益与义务)
- `legal/*.html` 四份法律文本(须经巴黎本地法务顾问起草或审核)
- 名册中除 Anouk Vermeer 和 佐藤健司 之外的五个名字(根据真实成员替换)
- 所有作品的代表图位 — 替换为真实图片

## 上线前清单

参见施工图 § 07 节(共 25 项)。

## 颜色与字体规范

- 主背景 `#FFFFFF` / 主文字 `#0A0A0A` / 唯一彩色区域 `#F4F2EE`
- 中文衬线 Noto Serif SC / 英文衬线 EB Garamond
- 中文无衬线 Noto Sans SC / 英文无衬线 Inter
- 全站零圆角,零阴影,零渐变

详见 `css/style.css` 顶部的 `:root` 变量与施工图 § 04。
