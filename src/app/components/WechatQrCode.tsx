'use client';

import React from 'react';
import Image from 'next/image';

interface WechatQrCodeProps {
  width?: number;      // 二维码宽度（像素）
  height?: number;     // 二维码高度（像素）
  containerClassName?: string;  // 容器自定义类名
  hasBorder?: boolean; // 是否显示边框
  borderColor?: string; // 边框颜色
  altText?: string;    // 图片alt文本
  showTitle?: boolean; // 是否显示标题
  titleText?: string;  // 自定义标题文本
  description?: string; // 自定义描述文本
  titlePosition?: 'top' | 'bottom'; // 标题位置
  titleColor?: string; // 标题文本颜色
  descriptionColor?: string; // 描述文本颜色
}

/**
 * 可复用的微信二维码组件
 * 用于在网站各处统一显示微信二维码
 */
const WechatQrCode: React.FC<WechatQrCodeProps> = ({
  width = 128,
  height = 128,
  containerClassName = "",
  hasBorder = true,
  borderColor = "gray-200", 
  altText = "微信二维码",
  showTitle = true,
  titleText = "添加微信咨询",
  description = "扫码添加，获取专业解答",
  titlePosition = 'top',
  titleColor = "text-gray-800",
  descriptionColor = "text-gray-500"
}) => {
  // 二维码图片路径 - 统一管理，修改时只需更改此处
  const qrCodePath = "/images/contact/wechat-qrcode.png";
  
  return (
    <div className="flex flex-col items-center">
      {/* 标题放在顶部 */}
      {showTitle && titlePosition === 'top' && (
        <h4 className={`text-lg font-medium ${titleColor} mb-2`}>{titleText}</h4>
      )}
      
      <div 
        className={`
          bg-white p-2 rounded-md 
          ${hasBorder ? `border border-${borderColor}` : ''} 
          flex items-center justify-center
          ${containerClassName}
        `}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {/* 使用Next.js的Image组件以获得更好的性能 */}
        <div className="relative w-full h-full">
          <Image
            src={qrCodePath}
            alt={altText}
            fill
            sizes={`${Math.max(width, height)}px`}
            style={{objectFit: 'contain'}}
            priority
          />
        </div>
      </div>
      
      {/* 标题放在底部 */}
      {showTitle && titlePosition === 'bottom' && (
        <h4 className={`text-lg font-medium ${titleColor} mt-2 mb-1`}>{titleText}</h4>
      )}
      
      <p className={`text-sm mt-1 ${descriptionColor}`}>{description}</p>
    </div>
  );
};

export default WechatQrCode; 