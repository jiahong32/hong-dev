import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const isEn = language === 'en';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: t.navLinks.about, path: '#about', number: '01' },
    { name: t.navLinks.projects, path: '#projects', number: '02' },
    { name: t.navLinks.experience, path: '#experience', number: '03' },
    { name: t.navLinks.contact, path: '#contact', number: '04' },
  ];

  const handleLanguageToggle = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 ${
          isScrolled ? 'h-16 md:h-20 bg-white/70 backdrop-blur-md border-b border-blue-50/50' : 'h-16 md:h-20 bg-transparent'
        }`}
      >
        {/* Left - Logo */}
        <a
          href="#"
          className="text-slate-900 text-sm md:text-base uppercase tracking-[0.25em] font-semibold z-50 select-none hover:text-blue-600 transition-colors duration-200"
        >
          Hong.dev
        </a>

        {/* Center Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`text-slate-600 uppercase hover:text-blue-600 transition-colors duration-200 ${
                isEn
                  ? 'text-xs tracking-[0.18em] font-medium'
                  : 'text-sm tracking-[0.05em] font-semibold'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Buttons + i18n Switcher (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#projects"
            className={`px-4 py-2 border border-blue-200 text-slate-700 uppercase hover:border-blue-500 hover:text-blue-600 transition-all duration-200 ${
              isEn ? 'text-xs tracking-[0.1em] font-medium' : 'text-sm tracking-[0.05em] font-semibold'
            }`}
          >
            {t.navButtons.viewProjects}
          </a>
          <a
            href="#contact"
            className={`px-4 py-2 bg-blue-600 text-white uppercase hover:bg-blue-700 shadow-sm shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-200 ${
              isEn ? 'text-xs tracking-[0.1em] font-medium' : 'text-sm tracking-[0.05em] font-semibold'
            }`}
          >
            {t.navButtons.contactMe}
          </a>
          
          {/* i18n Toggle */}
          <button
            onClick={handleLanguageToggle}
            className={`ml-1 px-3 py-2 border border-slate-200 text-slate-500 hover:border-blue-500 hover:text-blue-600 transition-colors uppercase font-mono rounded-none ${
              isEn ? 'text-xs tracking-[0.05em] font-medium' : 'text-sm font-semibold'
            }`}
            aria-label="Toggle Language"
          >
            {language === 'zh' ? 'EN' : '繁中'}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-50 flex flex-col gap-1.5 justify-center items-center w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-[1.5px] bg-slate-900 transition-all duration-300 ease-out ${
              isOpen ? 'rotate-45 translate-y-[4.5px]' : ''
            }`}
          />
          <div
            className={`w-6 h-[1.5px] bg-slate-900 transition-all duration-300 ease-out ${
              isOpen ? 'opacity-0 scale-0' : ''
            }`}
          />
          <div
            className={`w-6 h-[1.5px] bg-slate-900 transition-all duration-300 ease-out ${
              isOpen ? '-rotate-45 -translate-y-[4.5px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-between px-6 sm:px-10 md:px-16 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Navigation Links container */}
        <div className="flex-grow flex flex-col justify-center gap-2 mt-20">
          {navLinks.map((link, i) => (
            <a
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`flex justify-between items-center w-full border-b border-blue-50 py-5 transform transition-all duration-500 ease-out ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-slate-950 text-xl sm:text-2xl font-light tracking-normal uppercase hover:text-blue-600 transition-colors">
                {link.name}
              </span>
              <span className="text-blue-600 text-xs font-semibold tracking-widest font-mono">
                {link.number}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom Buttons + Mobile i18n switcher */}
        <div
          className={`flex flex-col gap-3 pb-12 transform transition-all duration-500 ease-out ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: `${navLinks.length * 100}ms` }}
        >
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 border border-blue-200 text-slate-700 text-xs uppercase tracking-[0.15em] font-light hover:border-blue-500 hover:text-blue-600 transition-all duration-200 text-center"
          >
            {t.navButtons.viewProjects}
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-blue-600 text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-blue-700 transition-all duration-200 text-center"
          >
            {t.navButtons.contactMe}
          </a>
          
          {/* Mobile Language Selector */}
          <button
            onClick={() => {
              handleLanguageToggle();
              setIsOpen(false);
            }}
            className="w-full py-3.5 border border-slate-200 text-slate-500 text-xs uppercase tracking-[0.15em] font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-200 text-center font-mono rounded-none"
          >
            {language === 'zh' ? 'Switch to English' : '切換至 繁體中文'}
          </button>
        </div>
      </div>
    </>
  );
}
