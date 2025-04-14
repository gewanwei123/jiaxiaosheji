'use client';

import React from 'react';
import Header from '@/app/home/components/Header';
import Footer from '@/app/home/components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">服务条款</h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              请仔细阅读以下条款，使用我们的服务即表示您同意这些条款
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                最后更新日期：{new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. 服务说明</h2>
              <p className="text-gray-600 mb-6">
                驾校设计规划服务（以下简称"我们"）提供驾校设计规划相关的咨询、设计和规划服务。我们的服务旨在帮助客户规划和设计符合标准的驾校设施，包括但不限于场地规划、设施布局、安全设计等。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 用户责任</h2>
              <p className="text-gray-600 mb-4">
                使用我们的服务时，您同意：
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2">提供真实、准确、完整的个人信息</li>
                <li className="mb-2">遵守所有适用的法律法规</li>
                <li className="mb-2">不得利用我们的服务从事任何违法或不当活动</li>
                <li className="mb-2">保护您的账户安全，对账户下的所有活动负责</li>
                <li className="mb-2">及时更新您的联系信息，以确保我们能与您有效沟通</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 知识产权</h2>
              <p className="text-gray-600 mb-6">
                我们的服务中包含的所有内容，包括但不限于文本、图形、标志、按钮图标、图像、音频片段、数字下载、数据编译和软件，均为我们或我们的内容提供商的财产，受中国和国际版权法的保护。未经我们明确书面许可，不得复制、修改、分发、销售或出租这些内容。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 免责声明</h2>
              <p className="text-gray-600 mb-4">
                我们的服务按"现状"提供，不提供任何明示或暗示的保证，包括但不限于：
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2">服务将满足您的特定要求</li>
                <li className="mb-2">服务将不间断、及时、安全或无错误</li>
                <li className="mb-2">通过服务获得的结果将准确或可靠</li>
                <li className="mb-2">服务中的任何错误将被纠正</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. 服务变更</h2>
              <p className="text-gray-600 mb-6">
                我们保留随时修改或终止服务的权利，恕不另行通知。我们不对服务的修改、暂停或终止承担任何责任。我们可能会不时更新这些条款，更新后的条款将在网站上公布。继续使用我们的服务即表示您接受更新后的条款。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. 法律适用</h2>
              <p className="text-gray-600 mb-6">
                这些条款受中华人民共和国法律管辖并按其解释。任何因这些条款引起的争议应提交至我们所在地有管辖权的人民法院解决。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 争议解决</h2>
              <p className="text-gray-600 mb-6">
                如果您对我们的服务有任何疑问或投诉，请首先通过以下联系方式与我们联系，我们将尽最大努力解决您的问题。如果无法通过协商解决，双方同意将争议提交至我们所在地有管辖权的人民法院解决。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. 联系我们</h2>
              <p className="text-gray-600 mb-6">
                如果您对这些服务条款有任何疑问或建议，请通过以下方式联系我们：
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