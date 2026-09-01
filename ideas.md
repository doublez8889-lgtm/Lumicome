# Atelier YF — Design Ideas

## 设计方向探索

<response>
<text>
**方向一：Parisian Editorial Silence（巴黎画册式静默）**

- **Design Movement**: 1970s–1980s Swiss International Typography meets contemporary Parisian editorial design
- **Core Principles**:
  1. 绝对的文字主权——排版即设计，无需图形装饰
  2. 不对称的水平分割——页面像被一把精准的刀切开，而非居中堆叠
  3. 极大的留白作为"呼吸的奢侈品"
  4. 克制的微动效——只在必要时才有动作，如同高级时装的走秀节奏
- **Color Philosophy**: 象牙白 (#F5F2EC) 作为纸张底色，炭黑 (#1A1A1A) 作为墨水，暖灰 (#8C8278) 作为注脚，深橄榄 (#3D3C2E) 作为极细的点缀线
- **Layout Paradigm**: 非对称双栏——左侧大留白，右侧文字块；标题横跨整宽，正文偏右对齐；打破居中惯例
- **Signature Elements**:
  1. 细如发丝的水平分隔线（1px, warm grey）
  2. 大号序号（01, 02, 03）作为视觉锚点，字号极大但透明度低
  3. 导航栏极细，字母间距拉宽（letter-spacing: 0.15em）
- **Interaction Philosophy**: 悬停时文字轻微位移（translateX 4px），无颜色变化；页面滚动时元素以极慢速度淡入（0.8s ease）
- **Animation**: 页面加载时标题从下方 20px 淡入（opacity 0→1, translateY 20px→0, 1.2s ease-out）；各 section 使用 Intersection Observer 触发同款淡入
- **Typography System**:
  - Display/Headline: Playfair Display, 700 weight, 大字号（clamp 4rem–9rem）
  - Body/Nav: DM Sans 或 Helvetica Now Text, 300–400 weight
  - Accent/Caption: DM Sans 300, letter-spacing 0.12em, 全大写
</text>
<probability>0.08</probability>
</response>

<response>
<text>
**方向二：Monastic Minimalism（修道院式极简）**

- **Design Movement**: Dieter Rams 功能主义 + 当代日本空间美学（Ma 间）
- **Core Principles**:
  1. 每屏只传达一个核心信息
  2. 文字排版遵循黄金比例的行高与字间距
  3. 颜色几乎不存在——仅靠明度差异区分层级
  4. 滚动即叙事——页面是一条时间轴
- **Color Philosophy**: 近白 (#F8F6F2) 背景，近黑 (#141414) 文字，仅用深棕 (#2C2018) 作为唯一点缀
- **Layout Paradigm**: 单栏居中，但文字块极窄（max-width: 52ch），大量空白围绕文字，像博物馆展签
- **Signature Elements**:
  1. 每个 section 之间有大量垂直空白（min 20vh）
  2. 所有文字左对齐，无居中
  3. 页脚极简，只有邮箱和城市
- **Interaction Philosophy**: 几乎无动效，只有极慢的淡入（2s ease）
- **Animation**: 极慢的 opacity 过渡，无位移动效
- **Typography System**:
  - Headline: Cormorant Garamond, italic, 很大
  - Body: IBM Plex Mono（等宽字体制造冷静感）
</text>
<probability>0.05</probability>
</response>

<response>
<text>
**方向三：Cinematic Tension（电影张力）**

- **Design Movement**: 当代电影海报设计 + 高端时尚品牌年报（Céline, The Row 风格）
- **Core Principles**:
  1. 强烈的字号对比——超大标题与极小正文并置
  2. 文字在页面上的位置充满戏剧性张力（非传统对齐）
  3. 深色背景作为主调，象牙白文字
  4. 滚动触发的文字揭示动效（mask reveal）
- **Color Philosophy**: 深炭黑 (#0F0F0D) 为主背景，象牙白 (#F0EDE6) 为文字，暗橄榄 (#4A4A35) 作为微妙的分层
- **Layout Paradigm**: 全宽布局，文字块在页面上漂浮，有时左对齐，有时右对齐，制造视觉张力
- **Signature Elements**:
  1. 文字 mask reveal 动效（clip-path 从下向上揭示）
  2. 超大字号标题（viewport width 单位，vw）
  3. 极细的竖线分隔元素
- **Interaction Philosophy**: 鼠标悬停时有微妙的文字颜色过渡（暖白→象牙黄）
- **Animation**: clip-path reveal 动效，0.9s cubic-bezier(0.16, 1, 0.3, 1)
- **Typography System**:
  - Headline: Playfair Display, 900 weight, 极大（10–15vw）
  - Body: DM Sans, 300 weight
</text>
<probability>0.07</probability>
</response>

---

## 选定方向

**选定：方向一 — Parisian Editorial Silence（巴黎画册式静默）**

理由：最符合 Brief 中"像一本薄而贵的先锋时尚画册"的要求，且非对称排版能最好地体现"判断力"而非"劳动力"的品牌定位。
