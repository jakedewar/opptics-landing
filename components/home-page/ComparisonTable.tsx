export default function ComparisonTable() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent mb-4">
            Why Teams Choose Opptics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See how we compare to traditional demo personalization tools
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          {/* Header - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-t-2xl">
            <div className="col-span-1"></div>
            <div className="col-span-1 text-center">
              <div className="font-semibold text-gray-500 dark:text-gray-400">Basic Tools</div>
            </div>
            <div className="col-span-1 text-center">
              <div className="font-semibold text-gray-500 dark:text-gray-400 italic">Others...</div>
            </div>
            <div className="col-span-1 text-center">
              <div className="font-semibold text-indigo-600 dark:text-indigo-400">Opptics</div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden grid grid-cols-3 gap-2 p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-t-2xl">
            <div className="text-center">
              <div className="font-semibold text-gray-500 dark:text-gray-400 text-sm">Basic Tools</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-500 dark:text-gray-400 italic text-sm">Others...</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-indigo-600 dark:text-indigo-400 text-sm">Opptics</div>
            </div>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {[
              {
                feature: "Implementation",
                basic: "Manual setup",
                competitors: "Complex integration",
                opptics: "2-minute extension install"
              },
              {
                feature: "Platform Changes",
                basic: "Requires modifications",
                competitors: "Backend integration",
                opptics: "Zero platform changes"
              },
              {
                feature: "Customization",
                basic: "Limited options",
                competitors: "Complex rules",
                opptics: "Simple mappings"
              },
              {
                feature: "User Control",
                basic: "Manual only",
                competitors: "Automated changes",
                opptics: "Human-in-the-loop"
              },
              {
                feature: "Persistence",
                basic: "Single session",
                competitors: "Limited profiles",
                opptics: "Cross-session profiles"
              },
              {
                feature: "Setup Time",
                basic: "Hours",
                competitors: "Days/Weeks",
                opptics: "Minutes"
              }
            ].map((row, index) => (
              <div key={index}>
                {/* Mobile Layout */}
                <div className="md:hidden p-4">
                  <div className="font-medium text-base mb-3">{row.feature}</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center text-gray-600 dark:text-gray-300 text-sm">{row.basic}</div>
                    <div className="text-center text-gray-600 dark:text-gray-300 text-sm">{row.competitors}</div>
                    <div className="text-center text-indigo-600 dark:text-indigo-400 font-medium text-sm">{row.opptics}</div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-4 gap-4 p-6">
                  <div className="col-span-1 font-medium">{row.feature}</div>
                  <div className="col-span-1 text-center text-gray-600 dark:text-gray-300">{row.basic}</div>
                  <div className="col-span-1 text-center text-gray-600 dark:text-gray-300">{row.competitors}</div>
                  <div className="col-span-1 text-center text-indigo-600 dark:text-indigo-400 font-medium">{row.opptics}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 