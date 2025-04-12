import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '备案资料制作服务 - 驾校设计规划服务',
  description: '专业的驾校备案资料制作服务，提供高质量的备案文件编制、整理和申报服务，确保顺利通过审批，降低驾校申请和运营的合规风险。',
};

export default function RecordMaterialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 