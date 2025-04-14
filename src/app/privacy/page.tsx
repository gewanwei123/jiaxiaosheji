'use client';

import React from 'react';
import Header from '@/app/home/components/Header';
import Footer from '@/app/home/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">隐私政策</h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              我们重视您的隐私，并致力于保护您的个人信息
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                最后更新日期：{new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. 引言</h2>
              <p className="text-gray-600 mb-6">
                驾校设计规划服务（以下简称"我们"）尊重并保护所有用户的个人隐私权。为了给您提供更准确、更有个性化的服务，我们会按照本隐私政策的规定使用和披露您的个人信息。但我们将以高度的勤勉、审慎义务对待这些信息。除本隐私政策另有规定外，在未征得您事先许可的情况下，我们不会将这些信息对外披露或向第三方提供。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 信息收集</h2>
              <p className="text-gray-600 mb-4">
                我们收集的信息包括但不限于：
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2">您提供的个人信息，如姓名、电话号码、电子邮件地址等</li>
                <li className="mb-2">您在使用我们的服务时自动收集的信息，如IP地址、浏览器类型、访问日期和时间等</li>
                <li className="mb-2">来自第三方的信息，如您授权我们访问的第三方账户信息</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 信息使用</h2>
              <p className="text-gray-600 mb-4">
                我们使用收集的信息用于：
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2">提供、维护和改进我们的服务</li>
                <li className="mb-2">响应您的请求和提供客户支持</li>
                <li className="mb-2">发送服务通知和更新</li>
                <li className="mb-2">防止欺诈和提升安全性</li>
                <li className="mb-2">进行研究和分析，以改进我们的服务</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 信息共享和披露</h2>
              <p className="text-gray-600 mb-4">
                我们不会出售、出租或以其他方式提供您的个人信息给第三方，但以下情况除外：
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2">获得您的明确同意</li>
                <li className="mb-2">为完成合并、分立、收购或资产转让而转移</li>
                <li className="mb-2">法律法规规定的其他情形</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. 信息安全</h2>
              <p className="text-gray-600 mb-6">
                我们使用各种安全技术和程序，以防信息的丢失、不当使用、未经授权阅览或披露。例如，我们会使用加密技术对数据进行保护，使用受信赖的保护机制防止数据遭到恶意攻击，部署访问控制机制，确保只有授权人员才可访问个人信息。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookie的使用</h2>
              <p className="text-gray-600 mb-6">
                我们使用Cookie和类似技术来记住您的偏好设置，了解您如何使用我们的服务，并改进您的体验。您可以通过浏览器设置拒绝Cookie，但这可能会影响您使用我们服务的某些功能。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 您的权利</h2>
              <p className="text-gray-600 mb-4">
                根据适用的数据保护法律，您可能拥有以下权利：
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2">访问您的个人信息</li>
                <li className="mb-2">更正不准确的个人信息</li>
                <li className="mb-2">删除您的个人信息</li>
                <li className="mb-2">限制或反对处理您的个人信息</li>
                <li className="mb-2">数据可携带性</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. 儿童隐私</h2>
              <p className="text-gray-600 mb-6">
                我们的服务不面向13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。如果您发现我们可能收集了13岁以下儿童的个人信息，请立即联系我们，我们将采取措施删除这些信息。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. 政策更新</h2>
              <p className="text-gray-600 mb-6">
                我们可能会不时更新本隐私政策。当我们进行重大更改时，我们会在网站上发布通知。我们鼓励您定期查看本隐私政策，以了解我们如何保护您的信息。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. 联系我们</h2>
              <p className="text-gray-600 mb-6">
                如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-600 mb-2"><strong>地址：</strong>郑州市中原区嵩山北路 299 号郑州市创业孵化园 3 号楼 2 楼 23 号</p>
                <p className="text-gray-600 mb-2"><strong>电话：</strong>135-2552-0521</p>
                <p className="text-gray-600"><strong>邮箱：</strong>876261867@qq.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 