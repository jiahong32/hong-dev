import InteractiveCanvas from './InteractiveCanvas';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language, t } = useLanguage();
  const isEn = language === 'en';

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white select-none">
      {/* Layer 1: Interactive Canvas Background */}
      <InteractiveCanvas />

      {/* Layer 2: White Gradient Overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none z-10" />

      {/* Layer 3: Content */}
      <div className="relative z-20 h-full flex flex-col justify-end px-6 sm:px-10 md:px-16 lg:px-20 pb-12 md:pb-16 lg:pb-20">
        {/* A) Label */}
        <p className={`text-slate-400 text-[10px] sm:text-xs uppercase font-light mb-8 md:mb-12 animate-hero-label ${
          isEn ? 'tracking-[0.3em]' : 'tracking-[0.15em] font-medium'
        }`}>
          {t.hero.label}
        </p>

        {/* B) Two-column Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20">
          {/* LEFT COLUMN */}
          <div className="flex flex-col items-start">
            {/* Headline */}
            <h1 className={`text-slate-900 font-bold text-[clamp(2.5rem,8vw,5rem)] uppercase animate-hero-title ${
              isEn ? 'leading-[0.9] tracking-[-0.06em]' : 'leading-[1.15] tracking-[0.05em]'
            }`}>
              {t.hero.title.map((word, i) => (
                <span key={i}>
                  {word}
                  {i < t.hero.title.length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Meta Line */}
            <div className="mt-6 flex items-center gap-4 sm:gap-6 text-slate-500 text-[10px] sm:text-xs tracking-wider uppercase font-light animate-hero-meta">
              <span>{t.hero.metaSchool}</span>
              <span className="w-8 h-[1.5px] bg-blue-500/30 inline-block animate-hero-divider" />
              <span>{t.hero.metaFocus}</span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8 lg:max-w-md">
            {/* Description Paragraph */}
            <p className={`text-slate-600 text-xs sm:text-sm leading-relaxed font-light animate-hero-description normal-case ${
              isEn ? 'text-justify' : ''
            }`}>
              {t.hero.description}
            </p>

            {/* Stats Row */}
            <div className="flex items-end gap-8 sm:gap-12 w-full">
              {/* Stat 1 */}
              <div className="flex flex-col gap-1 animate-hero-stat-1 flex-1 border-t border-blue-500/20 pt-3">
                <span className="text-slate-900 text-xl sm:text-2xl font-bold tracking-tight font-mono">
                  {t.hero.stats.stat1.value}
                </span>
                <span className="text-blue-500/70 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">
                  {t.hero.stats.stat1.label}
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col gap-1 animate-hero-stat-2 flex-1 border-t border-blue-500/20 pt-3">
                <span className="text-slate-900 text-xl sm:text-2xl font-bold tracking-tight font-mono">
                  {t.hero.stats.stat2.value}
                </span>
                <span className="text-blue-500/70 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">
                  {t.hero.stats.stat2.label}
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col gap-1 animate-hero-stat-3 flex-1 border-t border-blue-500/20 pt-3">
                <span className="text-slate-900 text-xl sm:text-2xl font-bold tracking-tight font-mono">
                  {t.hero.stats.stat3.value}
                </span>
                <span className="text-blue-500/70 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">
                  {t.hero.stats.stat3.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
