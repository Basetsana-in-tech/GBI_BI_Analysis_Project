import Image from 'next/image';

export function MarketComposition() {
  return (
    <section className="py-24 px-4 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <span className="text-emerald-400 text-sm font-medium">Chapter 1</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Global Market Composition & Fundamentals
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            GBI operates with a <span className="text-emerald-400 font-semibold">balanced international footprint</span>:
            <span className="text-emerald-400 font-semibold"> 52% Germany / 48% USA</span>.
            This strategic diversification across two mature markets ensures resilience and growth opportunity.
            Understanding the relationship between Revenue and Costs reveals consistent profit scaling over the past decade.
          </p>
        </div>

        {/* Full-width Dashboard */}
        <div className="mb-12 bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
          <div className="relative w-full h-96 md:h-[500px]">
            <Image
              src="/images/Market Research.png"
              alt="Global Market Research Dashboard"
              fill
              className="object-contain bg-slate-800"
              priority
            />
          </div>
          <div className="p-6 bg-slate-900/50">
            <p className="text-slate-300 text-sm">
              Market Research Dashboard: Comprehensive overview of global market dynamics, competitive positioning, and strategic opportunities across all regions.
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Quantity by Country */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-200">
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src="/images/uantity by Country.png"
                alt="Quantity by Country Distribution"
                fill
                className="object-contain bg-slate-800"
              />
            </div>
            <div className="p-6 bg-slate-900/50">
              <h3 className="text-lg font-semibold text-white mb-3">Country Quantity Breakdown</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The graph shows how unit quantity is distributed across countries, with city-level detail filtered to show AS and BI divisions.
                München leads in volume, supporting the 52% Germany / 48% USA footprint and reinforcing the regional hub strategy.
              </p>
            </div>
          </div>

          {/* Revenue, Cost, Profit Trends */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-200">
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src="/images/Yearly Revenue, Cost and Profit Trends.png"
                alt="Yearly Revenue, Cost and Profit Trends"
                fill
                className="object-contain bg-slate-800"
              />
            </div>
            <div className="p-6 bg-slate-900/50">
              <h3 className="text-lg font-semibold text-white mb-3">Revenue, Cost and Profit View</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The chart illustrates the decade-long relationship between revenue and cost, with the profit line scaling consistently.
                The bottom section of the original image is cropped here so the discussion is provided in text rather than in the graph footer.
              </p>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-8">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="text-emerald-400">→</span> Key Insights
          </h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-emerald-400 flex-shrink-0">•</span>
              <span>Global footprint provides market resilience and reduces single-market dependency risk</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 flex-shrink-0">•</span>
              <span>Profit margins remain stable across the decade, indicating operational efficiency</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 flex-shrink-0">•</span>
              <span>Urban-hub concentration (München model) demonstrates the power of geographic focus</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
