import { useLocation, useRoute } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import { ChevronLeft } from 'lucide-react';
import { useEffect } from 'react';
import { ARCHIVE_DATA } from './archive';

export default function ProjectDetail() {
  const { lang } = useLanguage();
  const [match, params] = useRoute('/project/:id');
  const [, navigate] = useLocation();

  // Find the project by ID
  const projectId = params?.id ? parseInt(params.id) : -1;
  const project = ARCHIVE_DATA.items[projectId];
  const categoryLabel = project
    ? ({
        campaigns: { en: 'Campaign', zh: '品牌项目' },
        editorials: { en: 'Editorial', zh: '编辑项目' },
        bts: { en: 'Behind the Scenes', zh: '幕后纪实' },
      } as const)[project.category]
    : undefined;

  useEffect(() => {
    document.title = project
      ? `${project.client} — ${lang === 'en' ? project.title.en : project.title.zh}`
      : 'Project';
  }, [project, lang]);

  if (!match || !project) {
    return (
      <div className="min-h-screen bg-[oklch(0.98_0.001_50)]">
        <Navbar />
        <main className="container pt-32">
          <div className="text-center">
            <p className="text-lg text-[#7a6f65]">
              {lang === 'en' ? 'Project not found' : '项目未找到'}
            </p>
            <button
              onClick={() => navigate('/projects')}
              className="mt-6 text-[#1a1510] hover:opacity-60 transition-opacity"
            >
              {lang === 'en' ? '← Back to Projects' : '← 返回项目'}
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[oklch(0.98_0.001_50)]">
      <Navbar />

      <main className="container pt-32 pb-20">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-[#7a6f65] hover:text-[#1a1510] transition-colors mb-12"
        >
          <ChevronLeft size={18} />
          <span className="text-sm tracking-wider uppercase">
            {lang === 'en' ? 'Back' : '返回'}
          </span>
        </button>

        {/* Project Header */}
        <div className="mb-16">
          <div className="mb-6">
            <p className="text-xs tracking-widest uppercase text-[#7a6f65] mb-3">
              {project.client}
            </p>
            <h1 className="text-5xl md:text-6xl font-display text-[#1a1510] mb-4">
              {lang === 'en' ? project.title.en : project.title.zh}
            </h1>
            <p className="text-lg text-[#7a6f65]">
              {lang === 'en' ? project.sub.en : project.sub.zh}
            </p>
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#1a1510]/10">
            <div>
              <p className="text-xs tracking-widest uppercase text-[#7a6f65] mb-2">
                {lang === 'en' ? 'Year' : '年份'}
              </p>
              <p className="text-sm text-[#1a1510]">{project.year}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-[#7a6f65] mb-2">
                {lang === 'en' ? 'Location' : '拍摄地'}
              </p>
              <p className="text-sm text-[#1a1510]">
                {lang === 'en' ? project.location.en : project.location.zh}
              </p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-[#7a6f65] mb-2">
                {lang === 'en' ? 'Format' : '形式'}
              </p>
              <p className="text-sm text-[#1a1510]">
                {lang === 'en' ? project.format.en : project.format.zh}
              </p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-[#7a6f65] mb-2">
                {lang === 'en' ? 'Category' : '类别'}
              </p>
              <p className="text-sm text-[#1a1510]">{categoryLabel ? categoryLabel[lang] : project.category}</p>
            </div>
            {project.credit && (
              <div>
                <p className="text-xs tracking-widest uppercase text-[#7a6f65] mb-2">
                  {lang === 'en' ? 'Credit' : '制作'}
                </p>
                <p className="text-sm text-[#1a1510]">
                  {lang === 'en' ? project.credit.en : project.credit.zh}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Project Visual */}
        <div className="mb-16">
          {project.video ? (
            <div className="w-full bg-[#111] rounded-sm overflow-hidden py-4">
              <video
                src={project.video}
                controls
                preload="metadata"
                poster={project.image ?? ''}
                className="max-h-[80vh] max-w-full w-auto mx-auto object-contain"
              />
            </div>
          ) : project.image ? (
            <div className="w-full aspect-video bg-[#1a1510]/5 rounded-sm overflow-hidden">
              <img
                src={project.image}
                alt={lang === 'en' ? project.title.en : project.title.zh}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-video w-full flex-col justify-between rounded-sm bg-[#eee8df] p-8 md:p-12">
              <p className="text-xs font-light uppercase tracking-[0.24em] text-[#8a7f74]">
                {project.client}
              </p>
              <div>
                <p className="mb-4 text-xs font-light uppercase tracking-[0.22em] text-[#8a7f74]">
                  {lang === 'en' ? project.sub.en : project.sub.zh}
                </p>
                <p
                  className="font-display leading-tight text-[#1a1510]"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 700 }}
                >
                  {lang === 'en' ? project.title.en : project.title.zh}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Project Description */}
        {(project.desc.zh || project.desc.en) && (
          <div className="max-w-3xl">
            <p
              className="font-body leading-relaxed text-[#1a1510]"
              style={{ fontSize: 'clamp(1rem, 1.2vw, 1.1rem)' }}
            >
              {lang === 'en' ? project.desc.en : project.desc.zh}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
