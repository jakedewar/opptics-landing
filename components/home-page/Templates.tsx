interface Template {
  icon: string;
  title: string;
  examples: Array<{
    original: string;
    replacement: string;
  }>;
  features: string;
  context: string;
}

const templates: Template[] = [
  {
    icon: "🏥",
    title: "Wellness",
    examples: [
      { original: "Users", replacement: "Members" },
      { original: "Sessions", replacement: "Classes" }
    ],
    features: "Industry-specific terminology",
    context: "Pre-configured for wellness industry workflows"
  },
  {
    icon: "✨",
    title: "Custom",
    examples: [
      { original: "Your terms", replacement: "Their terms" },
      { original: "Any word", replacement: "Perfect match" }
    ],
    features: "Fully customizable",
    context: "Create your own custom terminology mappings"
  },
  {
    icon: "🏃",
    title: "Athletic",
    examples: [
      { original: "Schedule", replacement: "Training plan" },
      { original: "Progress", replacement: "Performance tracking" }
    ],
    features: "Industry-specific terminology",
    context: "Pre-configured for athletic industry workflows"
  }
];

export default function Templates() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent mb-4">
            Industry Templates
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Pre-configured terminology mappings for your industry
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              AI Suggestions Coming Soon
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{template.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{template.title}</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  {template.examples.map((example, idx) => (
                    <div key={idx} className="text-sm">
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 line-through">
                        <span>{example.original}</span>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span>{example.replacement}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{template.features}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {template.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  