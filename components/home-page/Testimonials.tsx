import Image from 'next/image'

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  metric?: string;
  previousTool?: string;
  impact?: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "We switched from basic tools because Opptics' AI actually understands industry context. It doesn't just swap words - it provides real-time insights about regulatory compliance and industry trends.",
      author: "Sarah Chen",
      role: "VP of Sales",
      company: "TechScale Solutions",
      image: "/assets/testimonials/sarah.jpg",
      metric: "89% win rate against competitors",
      previousTool: "Basic demo tools"
    },
    {
      quote: "The zero-code implementation was a game-changer. While other solutions required weeks of setup and engineering resources, we were up and running with Opptics in minutes.",
      author: "Michael Torres",
      role: "Enterprise Sales Director",
      company: "FinServ Global",
      image: "/assets/testimonials/michael.jpg",
      metric: "2.8x faster deal velocity",
      previousTool: "Complex demo platforms"
    },
    {
      quote: "The AI-powered personalization is incredible. Opptics learns from successful demos across our team and automatically suggests the most effective terminology for each prospect's industry.",
      author: "Rachel Kim",
      role: "Sales Engineering Lead",
      company: "CloudSecure",
      image: "/assets/testimonials/rachel.jpg",
      metric: "93% demo-to-meeting conversion",
      impact: "Doubled close rate in 30 days"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent mb-4">
            Real Results, Real Fast
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See why sales teams are switching to Opptics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="ml-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</div>
                </div>
              </div>

              <blockquote className="text-gray-600 dark:text-gray-300 mb-4">
                "{testimonial.quote}"
              </blockquote>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {testimonial.metric}
                </div>
                {testimonial.previousTool && (
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Previously using: {testimonial.previousTool}
                  </div>
                )}
                {testimonial.impact && (
                  <div className="mt-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    {testimonial.impact}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
