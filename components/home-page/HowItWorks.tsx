"use client"

// Move steps array outside the component to keep it stable
const steps = [
  {
    number: 1,
    icon: (
      <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'One-Click Setup',
    description: 'Install Opptics and start personalizing your demos in seconds with our pre-built templates.'
  },
  {
    number: 2,
    icon: (
      <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Smart Personalization',
    description: 'Choose from our industry-specific templates or create your own custom terminology mappings.'
  },
  {
    number: 3,
    icon: (
      <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Real-Time Updates',
    description: 'See your personalized terminology instantly applied across your entire demo environment.'
  }
] as const; // Make the array immutable

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Simple setup, powerful results
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              AI Features Coming Soon
            </span>
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 dark:from-indigo-900 dark:via-indigo-700 dark:to-indigo-900 transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-transparent to-transparent dark:from-indigo-900/20 rounded-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/70 transition-colors">
                      {step.icon}
                    </div>
                    <span className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-medium ring-4 ring-white dark:ring-gray-800">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  