import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '政策法规 - 驾校设计规划',
  description: '驾校相关政策文件、法规解读、审批要求和行业标准，为用户提供权威的政策指导，帮助了解驾校设立、运营过程中需要遵循的各项法规和标准。',
};

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 