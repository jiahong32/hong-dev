import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollReveal from './components/ScrollReveal';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-slate-50/50 px-6 sm:px-10 md:px-16 lg:px-20 py-24 border-t border-slate-100"
        >
          <ScrollReveal className="max-w-2xl text-center">
            <h2 className="text-slate-900 text-lg sm:text-xl font-bold tracking-[0.2em] uppercase mb-8 relative inline-block">
              {t.sections.aboutTitle}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-blue-500" />
            </h2>
            <p className="text-slate-600 text-sm font-light leading-relaxed mt-4">
              {t.sections.aboutDesc}
            </p>
          </ScrollReveal>
        </section>
        
        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex flex-col items-center justify-center bg-white px-6 sm:px-10 md:px-16 lg:px-20 py-24 border-t border-slate-100"
        >
          <ScrollReveal className="max-w-2xl text-center mb-12">
            <h2 className="text-slate-900 text-lg sm:text-xl font-bold tracking-[0.2em] uppercase mb-8 relative inline-block">
              {t.sections.projectsTitle}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-blue-500" />
            </h2>
            <p className="text-slate-600 text-sm font-light leading-relaxed mt-4">
              {t.sections.projectsDesc}
            </p>
          </ScrollReveal>

          {/* Project Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl text-left">
            {t.projectsList.map((project, index) => (
              <ScrollReveal
                key={index}
                delay={index * 100}
                className="border border-blue-50 p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300 bg-white"
              >
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] sm:text-[10px] font-semibold text-blue-600 bg-blue-50/50 px-2 py-0.5 uppercase tracking-wider font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-slate-900 text-base sm:text-lg font-bold tracking-tight mb-2 uppercase">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <p className="text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider font-medium mb-4">
                    {project.role}
                  </p>
                  
                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="min-h-screen flex flex-col items-center justify-center bg-slate-50/50 px-6 sm:px-10 md:px-16 lg:px-20 py-24 border-t border-slate-100"
        >
          <ScrollReveal className="max-w-2xl text-center mb-12">
            <h2 className="text-slate-900 text-lg sm:text-xl font-bold tracking-[0.2em] uppercase mb-8 relative inline-block">
              {t.sections.experienceTitle}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-blue-500" />
            </h2>
            <p className="text-slate-600 text-sm font-light leading-relaxed mt-4">
              {t.sections.experienceDesc}
            </p>
          </ScrollReveal>

          {/* Vertical Timeline */}
          <div className="relative border-l-2 border-blue-50 ml-4 md:ml-8 max-w-3xl text-left pl-8 space-y-12">
            {t.experiencesList.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 100} className="relative">
                {/* Dot on the timeline line */}
                <span className="absolute -left-[39px] top-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
                
                {/* Period */}
                <span className="text-[10px] sm:text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 uppercase tracking-wider font-mono">
                  {exp.period}
                </span>
                
                {/* Title & Institution */}
                <h3 className="text-slate-900 text-base sm:text-lg font-bold tracking-tight mt-3">
                  {exp.title}
                </h3>
                <p className="text-slate-500 text-xs font-medium tracking-wide uppercase mt-1 mb-4">
                  {exp.institution}
                </p>
                
                {/* Details */}
                <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-10 md:px-16 lg:px-20 py-24 border-t border-slate-100"
        >
          <ScrollReveal className="max-w-2xl text-center">
            <h2 className="text-slate-900 text-lg sm:text-xl font-bold tracking-[0.2em] uppercase mb-8 relative inline-block">
              {t.sections.contactTitle}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-blue-500" />
            </h2>
            <p className="text-slate-600 text-sm font-light leading-relaxed mt-4 mb-8">
              {t.sections.contactDesc}
            </p>
            <a
              href="mailto:hello@hong.dev"
              className="px-8 py-3.5 bg-blue-600 text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-blue-700 shadow-sm shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-200"
            >
              {t.sections.contactBtn}
            </a>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
