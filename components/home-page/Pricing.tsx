import { CheckIcon } from '@heroicons/react/20/solid'

interface PricingTier {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  description: string;
  features: string[];
  featured: boolean;
  limit?: string;
}

const tiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-free',
    href: '#',
    priceMonthly: '$0',
    description: 'Try Opptics risk-free',
    features: [
      '1 sales rep seat',
      'Basic AI suggestions',
      '3 industry templates',
      '5 custom mappings',
      '7-day history',
      'Community support'
    ],
    featured: false,
    limit: 'Free forever'
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    priceMonthly: '$39',
    description: 'For serious sales professionals',
    features: [
      '1 sales rep seat',
      'Advanced AI suggestions',
      'All industry templates',
      'Unlimited mappings',
      'Unlimited history',
      'Priority support',
      'Meeting recordings'
    ],
    featured: true,
    limit: 'Single rep license'
  },
  {
    name: 'Team',
    id: 'tier-team',
    href: '#',
    priceMonthly: '$29',
    description: 'Perfect for small sales teams',
    features: [
      '3+ sales rep seats',
      'Everything in Pro',
      'Team sharing & collaboration',
      'Admin dashboard',
      'Usage analytics',
      'Dedicated support',
      'Training session'
    ],
    featured: false,
    limit: 'Per seat/month, 3 seat minimum'
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose the plan that's right for your team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border ${
                tier.featured 
                  ? 'border-indigo-500 dark:border-indigo-400 scale-105' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-3 py-2 text-sm font-medium text-white text-center">
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tier.name}</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{tier.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{tier.priceMonthly}</span>
                {tier.priceMonthly !== '$0' && (
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                )}
                {tier.limit && (
                  <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {tier.limit}
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-indigo-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.name === 'Team' ? "/contact" : "/signup"}
                className={`inline-flex justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:opacity-90 focus-visible:outline-indigo-600'
                    : 'bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {tier.name === 'Team' ? "Contact Sales" : "Get Started"}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
          Need more than 10 seats? Contact us for enterprise pricing.
        </div>
      </div>
    </section>
  )
}

