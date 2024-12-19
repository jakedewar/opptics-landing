"use client"

import { useEffect, useRef } from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Instant Personalization',
    description: "Create and apply custom terminology mappings in real-time to perfectly match your prospect's industry and preferences.",
    benefits: [
      'Zero setup needed',
      'Instant changes',
      'Custom mappings'
    ]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'No-Code Browser Extension',
    description: 'Install and start personalizing demos in minutes. No engineering resources, no platform modifications, no hassle.',
    benefits: [
      'Install in 2 minutes',
      'Works with any web platform',
      'Zero backend changes'
    ]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: 'Full Manual Control',
    description: 'Complete control over your terminology mappings with easy review and edit workflow. Your demos stay on-brand and accurate.',
    benefits: [
      'Review before applying',
      'Edit instantly',
      'Save custom mappings'
    ]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Persistent Personalization',
    description: 'Set up once, use everywhere. Your mappings persist across sessions and pages, making every demo consistently personalized.',
    benefits: [
      'Cross-page consistency',
      'Multiple saved profiles',
      'Easy profile switching'
    ]
  }
];

export default function Features() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(99, 102, 241, 0.4)');
    gradient.addColorStop(0.5, 'rgba(129, 140, 248, 0.6)');
    gradient.addColorStop(1, 'rgba(99, 102, 241, 0.4)');

    const drawConnectingLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.0005;
      gradient = ctx.createLinearGradient(
        Math.cos(time) * canvas.width * 0.5,
        Math.sin(time) * canvas.height * 0.5,
        canvas.width - Math.cos(time) * canvas.width * 0.5,
        canvas.height - Math.sin(time) * canvas.height * 0.5
      );
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.4)');
      gradient.addColorStop(0.5, 'rgba(129, 140, 248, 0.6)');
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0.4)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 4;
      ctx.setLineDash([8, 8]);
      ctx.lineDashOffset = -time * 15;

      const cards = document.querySelectorAll('.feature-card');
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          const rect1 = card.getBoundingClientRect();
          const rect2 = cards[index + 1].getBoundingClientRect();
          const containerRect = canvas.getBoundingClientRect();

          ctx.shadowColor = 'rgba(99, 102, 241, 0.5)';
          ctx.shadowBlur = 10;
          
          ctx.beginPath();
          ctx.moveTo(
            rect1.right - containerRect.left,
            rect1.top + rect1.height / 2 - containerRect.top
          );
          ctx.bezierCurveTo(
            rect1.right - containerRect.left + 60,
            rect1.top + rect1.height / 2 - containerRect.top,
            rect2.left - containerRect.left - 60,
            rect2.top + rect2.height / 2 - containerRect.top,
            rect2.left - containerRect.left,
            rect2.top + rect2.height / 2 - containerRect.top
          );
          ctx.stroke();

          ctx.shadowBlur = 0;
        }
      });

      requestAnimationFrame(drawConnectingLines);
    };

    drawConnectingLines();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="features" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent mb-4">
            Demo Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Smart personalization for your product demos
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              AI Features Coming Soon
            </span>
          </p>
        </div>

        <div className="relative">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
          />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card relative p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-transparent to-transparent dark:from-indigo-900/20 rounded-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-24 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent mb-4">
            Highlight & Map Any Text
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Simply highlight text, right-click, and instantly create or apply terminology mappings.
          </p>
        </div>

        <div className="relative p-4 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          {/* Browser chrome */}
          <div className="relative">
            <div className="bg-gray-100 dark:bg-gray-900 px-3 sm:px-4 py-2 sm:py-3 rounded-xl flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="flex gap-1.5">
                {['bg-red-400', 'bg-yellow-400', 'bg-green-400'].map((color, i) => (
                  <div key={i} className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full ${color}`} />
                ))}
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/50 dark:bg-gray-800/50 rounded-md flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21l-8-9h6v-9h4v9h6l-8 9z" />
                  </svg>
                  <span className="hidden sm:inline">demo.opptics.co/dashboard</span>
                  <span className="sm:hidden">demo.opptics.co</span>
                </div>
              </div>
            </div>
            
            {/* Content area */}
            <div className="relative bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 sm:p-8">
              <div className="max-w-3xl mx-auto">
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg flex flex-wrap items-center gap-1 sm:gap-1.5">
                  <span>Personalize your demo by replacing</span>
                  <span className="relative group">
                    <span className="bg-yellow-200/40 dark:bg-yellow-500/20 px-2 py-0.5 rounded-md cursor-pointer border border-yellow-300/30 dark:border-yellow-500/30">
                      customer success metrics
                    </span>
                    <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 text-sm">
                      <div className="text-gray-900 dark:text-gray-100 font-medium mb-2">Mapped to:</div>
                      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        account health score
                      </div>
                    </div>
                  </span>
                  <span>and</span>
                  <span className="relative group">
                    <span className="bg-green-200/40 dark:bg-green-500/20 px-2 py-0.5 rounded-md cursor-pointer border border-green-300/30 dark:border-green-500/30">
                      product terminology
                    </span>
                    <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 text-sm">
                      <div className="text-gray-900 dark:text-gray-100 font-medium mb-2">Mapped to:</div>
                      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        industry terms
                      </div>
                    </div>
                  </span>
                  <span>instantly.</span>
                </div>
              </div>

              {/* Context menu - hide on very small screens */}
              <div className="hidden sm:block absolute right-8 sm:right-16 top-8 sm:top-12 w-56 sm:w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-2 text-sm">
                <div className="px-3 py-2 text-gray-500 dark:text-gray-400 text-xs font-medium border-b border-gray-100 dark:border-gray-700">
                  Right-click
                </div>
                <div className="px-3 py-2 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-md cursor-pointer text-gray-700 dark:text-gray-200">
                  <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add to Opptics
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: "🎯",
              title: "Quick Selection",
              description: "Highlight any text to start mapping terminology instantly"
            },
            {
              icon: "🔄",
              title: "Smart Context Menu",
              description: "Right-click to access mapping options and quick actions"
            },
            {
              icon: "👁️",
              title: "Visual Feedback",
              description: "Hover over mapped text to see relationships and details"
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  