# MANUS_BRIEF · Lumicome 网站重做交接文档

给 Manus(或任何后续重做这个站的 AI 工程师 / 设计师):**读这份文档,
不要直接读 README.md。本文档的优先级最高。**

---

## 1. 项目身份

Lumicome 是一家**小型跨境创意事务所**,由 4 位常驻巴黎与上海的创作者
组成。它不是 SaaS、不是 startup、不是 platform、不是 ecosystem。
任何把它做成"科技产品 / 营销机构 / 内容平台"的视觉与文案,都偏离了
定位。

四位成员是**等大、平级**呈现的(团队页 2×2 网格)—— 不要把创始人放大。

---

## 2. 你的工作边界

### 复用(以现状为准,不要改)

| 来源 | 内容 |
|---|---|
| `js/content.jsx` 里的 `LUMI` 对象 | **全部中英对照文案**。已反复打磨,字面不准动。 |
| 信息架构 | 10 个页面 · 4 个核心模块名 · 团队 4 人 · 档案 2 件作品 · 规范 10 条款 |
| 主导航顺序 | 档案 / 编辑室 / 协作网络 / 规范 / 联系。其它 4 页(愿景 / 媒体 / 团队 / 法务)放 footer |
| 四模块名 | Archive 档案 / Editorial 编辑室 / Network 协作网络 / Protocol 规范 — 不要换回 Journal / Collaborative / Charter |
| 邮箱体系 | hello@atelieryf.com / network@atelieryf.com / press@atelieryf.com |
| 业务事实 | 4 人团队;两家法律实体(Atelier Lumicome SAS 注册中,2026 Q1 完成;帧汐映社沈阳已注册);媒体页 items 留空 |

### 弃用(全部重做)

- `css/style.css` 整份
- `vendor/` 目录(React UMD 文件)
- `js/bundle.js`(浏览器 Babel 产物)
- `js/sections.jsx` 里的组件渲染方式与 className 命名
- 所有现有的圆角策略、字号阶梯、字体选择、配色

---

## 3. 设计原则(必须遵守)

1. **事务所气质** —— 克制、机构感、不解释自己。参考 Margiela、Bottega Veneta
   的网站气质,不参考 fashion-tech startup。
2. **团队页 2×2 等大网格**,创始人 Kairos 与其他 3 位视觉完全平级。不放大、
   不特殊背景、不特殊字号。
3. **媒体页 items 为空** —— 这是诚实的选择。不要补占位、不要加"敬请期待"。
4. **不做**:hero 轮播、客户 logo wall、testimonial 滚动条、订阅弹窗、
   counter 动画、滚动 stock-ticker。任何 1 项出现就违背了"事务所"定位。
5. 团队成员的城市数据保留在 LUMI 里 —— **不要在 Collaborative 页列具体城市**
   (那是开放协作网络,不锁定城市)。

---

## 4. 文案纪律(防止你不小心补回 AI 词)

这套文案经过多轮去 AI 措辞,**以下结构与词汇不准出现**:

### 禁用结构
- 「不是 X,而是 Y」对仗句式(及变体:并非...而是 / 不在...而在)
- 「X、Y、Z」抽象名词三件套(尤其是当 X/Y/Z 都是形容词时)
- 凭空的「国际XX标准」「国际XX通用语言」(没人能验证的伪权威)
- 引号加抽象名词收束(如「就是「身份」」)

### 黑名单词
立得住 · 持续失真 · 真正发生在...的层面 · 以X为棱镜 · 方法论 ·
让每一位被记下来 · 严肃创作 · 觉醒 · 两条曲线交汇 · 生态 · 平台 ·
公约(改用「规范」)· Journal(改用 Editorial)· Collaborative(改用
Network)· Charter(改用 Protocol)

### 替代:用「事务所」/「atelier」,不用「平台」/「ecosystem」/「生态」

---

## 5. 内容边界(不准发明)

不要为了让网站"看起来更充实"而:
- 加新的团队成员
- 加新的客户 logo
- 加假的 press 引文
- 加客户证言
- 加业绩数字(stats 行已经在审查中,不要再补"50+ / 200+ / 5 属地"这类)
- 编新的项目案例

如果某个区块感觉"内容不够",**告诉用户**,不要自己填。

---

## 6. 技术要求

- **静态站**:Astro / Next.js SSG / 11ty 任选,不要 SPA
- **预渲染两种语言**(中文默认,英文备选)
- **字体自托管**,中文字体务必 subset,首屏 < 100KB
- **零运行时依赖**(除 lang toggle 和 hamburger 之外)
- 圆角:**仅** pill / tag 元素用 `border-radius: 100px`,其它一律直角
- 部署:Cloudflare Pages 或 Vercel
- 表单(Newsletter / 联系 / 协作申请):接 Cloudflare Forms 或 Formspree

---

## 7. 工作顺序(请按此进行)

### Phase 1 · 不出代码,先出方向

给用户看 **3 个不同方向的首页 mockup**(JPG / Figma 链接皆可):
- 方向 1 · 极简编辑型(参考 Apartamento / Pin-Up)
- 方向 2 · 现代建筑式(参考 OMA / Snøhetta 工作室站)
- 方向 3 · 你自己的提案

每个 mockup 必须显示:
- 顶部导航 + 语言切换
- Hero 区(用 content.jsx 的 home.banner / home.sub)
- 4 个模块的入口呈现方式
- 联系入口与 footer 雏形

**用户确认方向后再写代码。**

### Phase 2 · 出代码

确定方向后,按选中的 mockup 实现全 10 页。提交到 `manus-rebuild` 分支。

### Phase 3 · 交付

提交一份 README 说明:
- 本地起跑方式
- 部署到 Cloudflare/Vercel 的步骤
- 字体替换说明(目前自托管的字体放在哪里,如何换)
- content.jsx 数据编辑流程(后续更新文案的人怎么改)

---

## 8. 联系人

repo 所有者已对接,可以直接通过你的对话界面提问。**遇到内容 / 边界
的疑问立刻问,不要自作主张**。
