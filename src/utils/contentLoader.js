import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

// 读取政策文件
export function getPolicies() {
  const policiesDirectory = path.join(process.cwd(), 'content/policies');
  
  // 确保目录存在
  if (!fs.existsSync(policiesDirectory)) {
    return [];
  }
  
  const filenames = fs.readdirSync(policiesDirectory);
  
  const policies = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(policiesDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      return {
        ...data,
        id: data.id || filename.replace(/\.md$/, ''),
        content: md.render(content)
      };
    });
  
  // 按发布日期排序（最新的在前）
  return policies.sort((a, b) => 
    new Date(b.issueDate || '2000-01-01') - new Date(a.issueDate || '2000-01-01')
  );
}

// 读取标准文件
export function getStandards() {
  const standardsDirectory = path.join(process.cwd(), 'content/standards');
  
  // 确保目录存在
  if (!fs.existsSync(standardsDirectory)) {
    return [];
  }
  
  const filenames = fs.readdirSync(standardsDirectory);
  
  const standards = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(standardsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      return {
        ...data,
        id: data.id || filename.replace(/\.md$/, ''),
        content: md.render(content)
      };
    });
  
  // 按发布日期排序（最新的在前）
  return standards.sort((a, b) => 
    new Date(b.issueDate || '2000-01-01') - new Date(a.issueDate || '2000-01-01')
  );
}

// 通过ID获取单个政策
export function getPolicyById(id) {
  const policies = getPolicies();
  return policies.find(policy => policy.id === id) || null;
}

// 通过ID获取单个标准
export function getStandardById(id) {
  const standards = getStandards();
  return standards.find(standard => standard.id === id) || null;
}

// 获取最新政策
export function getLatestPolicies(count = 5) {
  const policies = getPolicies();
  return policies.slice(0, count);
}

// 获取最新标准
export function getLatestStandards(count = 5) {
  const standards = getStandards();
  return standards.slice(0, count);
}

// 获取高亮政策
export function getHighlightedPolicies() {
  const policies = getPolicies();
  return policies.filter(policy => policy.isHighlighted);
}

// 按类别分组政策
export function getPoliciesByCategory() {
  const policies = getPolicies();
  const categories = {};
  
  policies.forEach(policy => {
    const category = policy.category || '未分类';
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(policy);
  });
  
  return categories;
}

// 按标签获取政策
export function getPoliciesByTag(tag) {
  const policies = getPolicies();
  return policies.filter(policy => 
    policy.tags && Array.isArray(policy.tags) && policy.tags.includes(tag)
  );
} 