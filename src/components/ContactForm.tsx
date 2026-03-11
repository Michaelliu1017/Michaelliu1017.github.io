import { useState, useEffect, type FormEvent } from 'react';

type Lang = 'en' | 'zh';

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

const copy: Record<Lang, {
  nameLabel: string; emailLabel: string; messageLabel: string;
  namePh: string; emailPh: string; msgPh: string;
  submit: string; sending: string; success: string;
}> = {
  en: {
    nameLabel: 'Name', emailLabel: 'Email', messageLabel: 'Message',
    namePh: 'Your name', emailPh: 'your@email.com',
    msgPh: 'Tell me about your project or idea...',
    submit: 'Send Message', sending: 'Sending...',
    success: "Message sent successfully! I'll get back to you soon.",
  },
  zh: {
    nameLabel: '姓名', emailLabel: '邮箱', messageLabel: '留言',
    namePh: '您的姓名', emailPh: '您的邮箱',
    msgPh: '介绍您的项目或想法...',
    submit: '发送消息', sending: '发送中...',
    success: '消息发送成功！我会尽快回复您。',
  },
};

const inputClasses = "w-full px-4 py-3 rounded-lg bg-[#0B0A09] border border-white/10 text-[#F5F0EB] placeholder-[#6B6560] focus:outline-none focus:border-[#E8621A]/50 focus:shadow-[0_0_10px_rgba(232,98,26,0.18)] transition-all duration-300 text-sm";

export default function ContactForm() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('gl-lang') as Lang) || 'en';
    }
    return 'en';
  });

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handler = (e: Event) => setLang((e as CustomEvent).detail.lang as Lang);
    window.addEventListener('gl-langchange', handler);
    return () => window.removeEventListener('gl-langchange', handler);
  }, []);

  const t = copy[lang];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    setStatus('loading');
    setErrorMessage('');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: formData.honeypot,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message || 'Failed to send message');
      setStatus('success');
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="website" value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="name" className="block text-xs font-medium text-[#B5A99A] uppercase tracking-wider mb-2">
          {t.nameLabel}
        </label>
        <input type="text" id="name" required
          placeholder={t.namePh}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClasses} />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-medium text-[#B5A99A] uppercase tracking-wider mb-2">
          {t.emailLabel}
        </label>
        <input type="email" id="email" required
          placeholder={t.emailPh}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClasses} />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#B5A99A] uppercase tracking-wider mb-2">
          {t.messageLabel}
        </label>
        <textarea id="message" required rows={5}
          placeholder={t.msgPh}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClasses} resize-none`} />
      </div>

      <button type="submit" disabled={status === 'loading'}
        className="w-full px-6 py-3 rounded-lg font-medium text-sm tracking-wide bg-gradient-to-r from-[#E8621A]/40 to-[#C45A28]/35 border border-[#E8621A]/50 text-[#FAF7F2] hover:from-[#E8621A]/55 hover:to-[#C45A28]/50 hover:border-[#E8621A] hover:shadow-[0_0_10px_rgba(232,98,26,0.45),0_0_30px_rgba(232,98,26,0.18)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]">
        {status === 'loading' ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {t.sending}
          </span>
        ) : t.submit}
      </button>

      {status === 'success' && (
        <div className="p-4 rounded-lg border border-[#7A9E6B]/20 bg-[#7A9E6B]/5 text-[#7A9E6B] text-sm">
          {t.success}
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] text-sm">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
