import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '案例详情 | 驾校设计规划服务',
  description: '查看我们为驾校提供的场地规划设计、备案资料制作和政策咨询服务的成功案例详情。了解我们如何帮助客户解决实际问题，提升运营效率。',
};

export default function CaseDetailLayout({
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