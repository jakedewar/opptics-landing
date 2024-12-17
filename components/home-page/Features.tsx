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
    title: 'Instant AI Analysis',
    description: "Our AI instantly analyzes both your demo environment and prospect's content to suggest perfect terminology mappings in real-time.",
    benefits: [
      'Zero setup or configuration needed',
      'Immediate contextual suggestions',
      'Industry-aware recommendations'
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
    title: 'Human-in-the-Loop Control',
    description: 'Full control over AI suggestions with easy review, edit, and approval workflow. Your demos stay on-brand and accurate.',
    benefits: [
      'Review before applying',
      'Edit suggestions instantly',
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
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent mb-4">
            AI-Powered Demo Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Intelligent personalization that understands your prospect's context
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
    </section>
  );
}
  