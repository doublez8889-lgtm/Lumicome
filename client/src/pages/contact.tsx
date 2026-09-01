import { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

// ── Validation helpers ──────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormErrors {
  name?: string;
  email?: string;
  project_type?: string;
  message?: string;
}

function validate(
  fields: { name: string; email: string; project_type: string; message: string },
  lang: string
): FormErrors {
  const errors: FormErrors = {};

  if (!fields.name.trim()) {
    errors.name = lang === 'zh' ? '请输入您的姓名' : 'Name is required';
  } else if (fields.name.trim().length < 2) {
    errors.name = lang === 'zh' ? '姓名至少需要 2 个字符' : 'Name must be at least 2 characters';
  }

  if (!fields.email.trim()) {
    errors.email = lang === 'zh' ? '请输入您的邮箱' : 'Email is required';
  } else if (!EMAIL_REGEX.test(fields.email.trim())) {
    errors.email = lang === 'zh' ? '请输入有效的邮箱格式（如 name@example.com）' : 'Please enter a valid email address (e.g. name@example.com)';
  }

  if (!fields.project_type) {
    errors.project_type = lang === 'zh' ? '请选择项目类型' : 'Please select a project type';
  }

  if (!fields.message.trim()) {
    errors.message = lang === 'zh' ? '请输入留言内容' : 'Message is required';
  } else if (fields.message.trim().length < 10) {
    errors.message = lang === 'zh' ? '留言至少需要 10 个字符' : 'Message must be at least 10 characters';
  }

  return errors;
}

// ── Field Error Component ───────────────────────────────────────────────────
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
      <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      {message}
    </p>
  );
}

// ── Contact Form ────────────────────────────────────────────────────────────
function ContactForm() {
  const { lang } = useLanguage();
  const [state, handleFormspreeSubmit] = useForm('mojbnaqg');

  const [fields, setFields] = useState({ name: '', email: '', project_type: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validate a single field on blur
  const handleBlur = (field: keyof typeof fields) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const fieldErrors = validate(fields, lang);
    setErrors(prev => ({ ...prev, [field]: fieldErrors[field] }));
  };

  // Update field value and clear error if now valid
  const handleChange = (field: keyof typeof fields, value: string) => {
    const updated = { ...fields, [field]: value };
    setFields(updated);
    if (touched[field]) {
      const fieldErrors = validate(updated, lang);
      setErrors(prev => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  // On submit: validate all, block if errors
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, project_type: true, message: true };
    setTouched(allTouched);
    const fieldErrors = validate(fields, lang);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return; // block submission
    handleFormspreeSubmit(e);
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-2 border text-black placeholder-gray-400 focus:outline-none transition ${
      touched[field] && errors[field]
        ? 'border-red-400 focus:border-red-500 bg-red-50'
        : touched[field] && !errors[field]
        ? 'border-green-400 focus:border-green-500'
        : 'border-gray-300 focus:border-yellow-600'
    }`;

  if (state.succeeded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="relative bg-white shadow-2xl p-8 md:p-12 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-light text-center mb-3 text-black">
            {lang === 'zh' ? '感谢您的留言' : 'Thank you'}
          </h2>
          <p className="text-center text-gray-600 mb-8 leading-relaxed">
            {lang === 'zh'
              ? '我们已收到您的信息，通常会在两个工作日内回复。'
              : 'We have received your message and will contact you within 48 hours.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-yellow-600 text-white py-3 font-light hover:bg-yellow-700 transition"
          >
            {lang === 'zh' ? '关闭' : 'Close'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Formspree server-side errors */}
      <ValidationError errors={state.errors} className="text-red-600 text-sm" />

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-light mb-2 text-black">
          {lang === 'zh' ? '姓名' : 'Name'} <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={fields.name}
          onChange={e => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          className={inputClass('name')}
          placeholder={lang === 'zh' ? '您的姓名' : 'Your name'}
          autoComplete="name"
        />
        <FieldError message={errors.name} />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-light mb-2 text-black">
          {lang === 'zh' ? '邮箱' : 'Email'} <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={fields.email}
          onChange={e => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          className={inputClass('email')}
          placeholder="your@email.com"
          autoComplete="email"
        />
        <FieldError message={errors.email} />
        <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-600 text-xs mt-1" />
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="project_type" className="block text-sm font-light mb-2 text-black">
          {lang === 'zh' ? '项目类型' : 'Project Type'} <span className="text-red-500">*</span>
        </label>
        <select
          id="project_type"
          name="project_type"
          value={fields.project_type}
          onChange={e => handleChange('project_type', e.target.value)}
          onBlur={() => handleBlur('project_type')}
          className={inputClass('project_type')}
        >
          <option value="">{lang === 'zh' ? '请选择' : 'Please select'}</option>
          <option value="Brand Visual">{lang === 'zh' ? '品牌视觉' : 'Brand Visual'}</option>
          <option value="Content Production">{lang === 'zh' ? '内容制作' : 'Content Production'}</option>
          <option value="Creative Strategy">{lang === 'zh' ? '创意策划' : 'Creative Strategy'}</option>
          <option value="Other">{lang === 'zh' ? '其他' : 'Other'}</option>
        </select>
        <FieldError message={errors.project_type} />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-light mb-2 text-black">
          {lang === 'zh' ? '留言' : 'Message'} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={fields.message}
          onChange={e => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          rows={6}
          className={inputClass('message')}
          placeholder={lang === 'zh' ? '请告诉我们您的项目信息' : 'Tell us about your project'}
        />
        <FieldError message={errors.message} />
        <ValidationError field="message" prefix="Message" errors={state.errors} className="text-red-600 text-xs mt-1" />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-yellow-600 text-white py-3 font-light hover:bg-yellow-700 disabled:bg-gray-400 transition"
      >
        {state.submitting
          ? (lang === 'zh' ? '发送中...' : 'Sending...')
          : (lang === 'zh' ? '发送' : 'Send')}
      </button>
    </form>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function Contact() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = 'Contact — LUMICOME';
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F4EF' }}>
      <Navbar />
      <main className="pt-32 pb-32">
        {/* ── PAGE HEADER ── */}
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-20">
          <p className="text-xs tracking-[0.28em] uppercase mb-6 font-light" style={{ color: '#3a3028' }}>
            {lang === 'zh' ? '联系' : 'CONTACT'}
          </p>
          <h1
            className="font-display mb-8 leading-[1.0]"
            style={{ fontSize: 'clamp(3rem, 5.5vw, 5.2rem)', fontWeight: 700, color: '#1a1510', letterSpacing: '-0.03em' }}
          >
            {lang === 'zh' ? '联系。' : 'Contact.'}
          </h1>
          <p className="text-base font-light leading-relaxed max-w-2xl" style={{ color: '#3a3028' }}>
            {lang === 'zh'
              ? '请通过下方邮箱或表单提供项目背景、预计时间与合作需求。我们通常会在两个工作日内回复。'
              : 'Please reach out to the relevant inbox below. We respond within two weeks.'}
          </p>
        </div>

        {/* ── CONTACT INFO ── */}
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16" style={{ borderTop: '1px solid #e0d9d0' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-12" style={{ borderBottom: '1px solid #e0d9d0' }}>
            <div>
              <p className="text-xs tracking-[0.24em] uppercase font-light mb-4" style={{ color: '#3a3028' }}>
                {lang === 'zh' ? '邮箱' : 'EMAIL'}
              </p>
              <a href="mailto:hello@atelieryf.com" className="font-display transition-opacity hover:opacity-50" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: 700, color: '#1a1510', letterSpacing: '-0.01em' }}>
                hello@atelieryf.com
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.24em] uppercase font-light mb-4" style={{ color: '#3a3028' }}>
                {lang === 'zh' ? '地址' : 'LOCATION'}
              </p>
              <p className="font-display" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: 700, color: '#1a1510', letterSpacing: '-0.01em' }}>
                Paris, France
              </p>
            </div>
          </div>
        </div>

        {/* ── FORM ── */}
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 mt-16">
          <p className="text-xs tracking-[0.24em] uppercase font-light mb-10" style={{ color: '#3a3028' }}>
            {lang === 'zh' ? '发送消息' : 'SEND A MESSAGE'}
          </p>
          <div className="max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
