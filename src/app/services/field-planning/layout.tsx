import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '场地规划设计服务 - 驾校设计规划服务',
  description: '专业的驾校场地规划设计服务，提供合规高效的场地布局规划和设计方案，满足审批要求，提升运营效率。',
};

export default function FieldPlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 