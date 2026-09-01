import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Legal() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = 'Legal — LUMICOME';
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F4EF' }}>
      <Navbar />

      <main className="pt-32 pb-32">
        {/* ── PAGE HEADER ── */}
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-20">
          <p className="text-xs tracking-[0.28em] uppercase mb-6 font-light" style={{ color: '#3a3028' }}>
            {lang === 'zh' ? '法务' : 'LEGAL'}
          </p>
          <h1
            className="font-display mb-8 leading-[1.0]"
            style={{ fontSize: 'clamp(3rem, 5.5vw, 5.2rem)', fontWeight: 700, color: '#1a1510', letterSpacing: '-0.03em' }}
          >
            {lang === 'zh' ? '法务。' : 'Legal.'}
          </h1>
        </div>

        {/* ── LEGAL CONTENT ── */}
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16" style={{ borderTop: '1px solid #e0d9d0' }}>
          {[
            {
              titleZh: '隐私政策', titleEn: 'Privacy Policy',
              bodyZh: '通过联系或作品提交表单提供的姓名、邮箱、项目资料及附件，仅用于回复咨询、评估合作与管理相关沟通。除完成网站托管、文件存储或法律义务所必需的服务方外，我们不会向无关第三方披露上述信息。',
              bodyEn: 'Lumicome respects and protects user privacy. Any personal information we collect is used solely to improve our services and will not be shared with third parties.',
            },
            {
              titleZh: '使用条款', titleEn: 'Terms of Use',
              bodyZh: '本网站内容仅供了解 Lumicome 的业务与项目。未经书面许可，不得复制、改编、发布或将网站中的文字、图像及影像用于商业用途；第三方品牌与作品权利仍归各自权利人所有。',
              bodyEn: 'By using this website, you agree to comply with these terms of use. All content is copyrighted by Lumicome.',
            },
            {
              titleZh: 'Cookie 政策', titleEn: 'Cookie Policy',
              bodyZh: '本网站可能使用必要的浏览器存储或技术性 Cookie，以保存语言偏好并维持基础功能。您可在浏览器设置中查看、限制或清除相关数据。',
              bodyEn: 'This website uses cookies to improve user experience. You can control cookie usage through your browser settings.',
            },
            {
              titleZh: '版权声明', titleEn: 'Copyright Notice',
              bodyZh: '© 2026 Lumicome。网站原创文字、版式与自有视觉内容受适用版权法保护；项目中出现的品牌名称、商标及受授权素材归相应权利人所有。',
              bodyEn: '© 2026 Lumicome. All rights reserved. All content, design, and code on this website are protected by copyright.',
            },
          ].map((section, idx) => (
            <div key={idx} className="py-10" style={{ borderBottom: '1px solid #e0d9d0' }}>
              <h2
                className="font-display mb-4 leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 700, color: '#1a1510', letterSpacing: '-0.01em' }}
              >
                {lang === 'zh' ? section.titleZh : section.titleEn}
              </h2>
              <p className="text-base font-light leading-relaxed" style={{ color: '#3a3028' }}>
                {lang === 'zh' ? section.bodyZh : section.bodyEn}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
