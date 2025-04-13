// 导入政策文件
import { policy001 } from './policy/policy-001';
import { policy002 } from './policy/policy-002';
import { interpretation001 } from './interpretation/interp-001';
import { interpretation002 } from './interpretation/interp-002';
// 在这里导入更多政策...

// 创建政策列表（用于列表页）
export const policyList = [
  {
    id: policy001.id,
    title: policy001.title,
    issuer: policy001.issuer,
    issueDate: policy001.issueDate,
    category: policy001.category,
    tags: policy001.tags,
    summary: policy001.summary,
    isHighlighted: policy001.isHighlighted
  },
  {
    id: policy002.id,
    title: policy002.title,
    issuer: policy002.issuer,
    issueDate: policy002.issueDate,
    category: policy002.category,
    tags: policy002.tags,
    summary: policy002.summary,
    isHighlighted: policy002.isHighlighted
  },
  // 添加更多政策到列表...
];

// 创建政策详情映射（用于详情页）
export const policyDetails: Record<string, any> = {
  [policy001.id]: policy001,
  [policy002.id]: policy002,
  // 添加更多政策到映射...
};

// 按类别分组政策
export const policiesByCategory = {
  '政策文件': policyList.filter(policy => policy.category === '政策文件'),
  '行业标准': policyList.filter(policy => policy.category === '行业标准'),
  '指南文件': policyList.filter(policy => policy.category === '指南文件'),
  '指导意见': policyList.filter(policy => policy.category === '指导意见'),
  '安全规定': policyList.filter(policy => policy.category === '安全规定'),
};

// 获取最新政策（按发布日期排序）
export const latestPolicies = [...policyList].sort(
  (a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
).slice(0, 5);

// 获取重要政策
export const highlightedPolicies = policyList.filter(policy => policy.isHighlighted);

// 根据标签获取政策
export const getPoliciesByTag = (tag: string) => {
  return policyList.filter(policy => policy.tags.includes(tag));
};

export const policyInterpretations = [
  interpretation001,
  interpretation002
]; 