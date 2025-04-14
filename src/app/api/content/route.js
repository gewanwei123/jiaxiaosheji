import { 
  getPolicies, 
  getStandards, 
  getPolicyById, 
  getStandardById 
} from '@/utils/contentLoader';
import { NextResponse } from 'next/server';

// GET /api/content
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // 如果指定了策略ID，则返回单个策略
    const policyId = searchParams.get('policyId');
    if (policyId) {
      const policy = getPolicyById(policyId);
      if (!policy) {
        return NextResponse.json({ error: 'Policy not found' }, { status: 404 });
      }
      return NextResponse.json({ policy });
    }
    
    // 如果指定了标准ID，则返回单个标准
    const standardId = searchParams.get('standardId');
    if (standardId) {
      const standard = getStandardById(standardId);
      if (!standard) {
        return NextResponse.json({ error: 'Standard not found' }, { status: 404 });
      }
      return NextResponse.json({ standard });
    }
    
    // 否则返回所有内容
    const policies = getPolicies();
    const standards = getStandards();
    
    return NextResponse.json({ 
      policies,
      standards
    });
  } catch (error) {
    console.error('API错误:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 