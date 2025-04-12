# 首页组件设计文档

此目录包含驾校设计规划服务网站首页的所有组件。

## 组件结构

首页由以下组件组成:

1. **Header** - 顶部导航栏
   - 包含Logo、导航菜单、联系按钮
   - 支持响应式设计,移动端使用汉堡菜单
   - 滚动时自动调整背景透明度和阴影

2. **HeroSection** - 首屏区域
   - 全屏背景图片
   - 半透明叠加层
   - 主标题、副标题和简短介绍
   - 两个行动按钮:"免费咨询"和"了解更多"
   - 向下滚动指示器

3. **ServiceOverview** - 服务概览区
   - 服务卡片,展示两个主要服务
   - 服务优势,使用图标+文字展示四个优势点
   - 服务流程,以时间线形式展示五个步骤

4. **FeaturedCases** - 精选案例展示
   - 三个精选案例卡片
   - 每个案例包含图片、标题、客户信息和简短描述
   - "查看更多案例"按钮

5. **PolicySummary** - 政策法规摘要
   - 最新政策列表,包含日期和摘要
   - 重要法规解读
   - "查看更多政策法规"按钮

6. **ContactSection** - 联系方式区
   - 基本联系信息
   - 在线咨询表单
   - 社交媒体链接

7. **Footer** - 页脚
   - 网站地图分类
   - 版权信息
   - 社交媒体链接
   - 相关政策链接

## 设计要点

1. **响应式设计**
   - 所有组件均适配桌面端、平板和移动端
   - 使用Tailwind CSS的响应式类处理不同屏幕尺寸

2. **色彩方案**
   - 主色调: 蓝色(#2563eb)作为主要颜色
   - 文字颜色: 深灰(#111827)作为主要文字颜色
   - 背景色: 白色和浅灰色交替使用,增加视觉层次感
   - 强调色: 白色用于深色背景上的文字和按钮

3. **交互设计**
   - 卡片悬停效果
   - 按钮悬停状态变化
   - 下拉菜单动画
   - 滚动时导航栏样式变化

4. **视觉层次**
   - 使用字体大小、粗细和颜色创建视觉层次
   - 使用背景色变化分隔不同的内容区域
   - 重点内容使用更大的字体和突出的颜色

## 数据结构

各组件使用的主要数据模型:

### 服务数据
```typescript
interface Service {
  title: string;
  icon: ReactNode;
  description: string;
  link: string;
}
```

### 优势数据
```typescript
interface Advantage {
  title: string;
  icon: ReactNode;
  description: string;
}
```

### 流程数据
```typescript
interface Process {
  step: string;
  icon: ReactNode;
  description: string;
}
```

### 案例数据
```typescript
interface Case {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  link: string;
}
```

### 政策数据
```typescript
interface Policy {
  id: number;
  title: string;
  date: string;
  summary: string;
  link: string;
}
```

## 交互逻辑

1. **导航**
   - 顶部导航固定,滚动时保持可见
   - 下拉菜单在鼠标悬停时显示
   - 移动端使用汉堡菜单,点击打开/关闭
   
2. **表单处理**
   - 表单验证:必填字段、电话号码格式
   - 表单提交按钮:点击触发提交事件
   - 提交成功后显示提示信息

3. **响应式行为**
   - 在小屏幕上,多列布局转为单列
   - 移动端隐藏部分非核心内容
   - 导航栏在移动端转为汉堡菜单

## 样式规范

基于Tailwind CSS实现,主要样式特点:

1. **卡片样式**
   - 圆角: rounded-lg (0.5rem)
   - 阴影: shadow-lg
   - 边距: p-6 或 p-8
   - 悬停效果: hover:-translate-y-1

2. **按钮样式**
   - 主按钮: bg-blue-600 hover:bg-blue-700 text-white rounded-full
   - 次按钮: bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full
   - 文本按钮: text-blue-600 hover:text-blue-700

3. **文字样式**
   - 主标题: text-4xl md:text-5xl font-bold
   - 区域标题: text-3xl md:text-4xl font-bold
   - 卡片标题: text-2xl font-bold
   - 正文: text-gray-600 或 text-white/80 (深色背景) 