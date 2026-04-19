import Image from 'next/image';

export function StrategicRecommendations() {
  return (
    <section className="py-24 px-4 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <span className="text-emerald-400 text-sm font-medium">Chapter 3</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Strategic Recommendations & Product Performance
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            The shift from <span className="text-orange-400 font-semibold">'Volume' to 'Value'</span> represents 
            a fundamental strategic pivot toward <span className="text-emerald-400 font-semibold">profit-based decision making</span>. 
            What generates the most 'Noise' (Revenue) often differs from what generates the most 'Money' (Profit).
          </p>
        </div>

        {/* Full-width Market Recommendation */}
        <div className="mb-12 bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
          <div className="relative w-full h-96 md:h-[500px]">
            <Image
              src="/images/Market Recommendation.png"
              alt="Market Recommendation Strategic Dashboard"
              fill
              className="object-contain bg-slate-800"
              priority
            />
          </div>
          <div className="p-6 bg-slate-900/50">
            <p className="text-slate-300 text-sm">
              Market Recommendation Dashboard: Strategic positioning and opportunity sizing for maximizing profit capture across product categories and customer segments.
            </p>
          </div>
        </div>

        {/* Two-column comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Top 5 Products by Profit */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-200">
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src="/images/Top 5 Products by Profit.png"
                alt="Top 5 Products by Profit"
                fill
                className="object-contain bg-slate-800"
              />
            </div>
            <div className="p-6 bg-slate-900/50">
              <h3 className="text-lg font-semibold text-white mb-3">Profit-Leading Products</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                These are the true profit drivers and the most reliable candidates for strategic investment.
                The graph itself is cropped to remove the image footer, while key insight text remains clearly visible below.
              </p>
            </div>
          </div>

          {/* Top 5 Products by Revenue */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-200">
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src="/images/Top 5 Products by Revenue .png"
                alt="Top 5 Products by Revenue"
                fill
                className="object-contain bg-slate-800"
              />
            </div>
            <div className="p-6 bg-slate-900/50">
              <h3 className="text-lg font-semibold text-white mb-3">Revenue-Focused Products</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                This chart shows which products generate the most topline revenue, even if they are not the best profit contributors.
                The visual is cropped to focus on the chart area and reduce image annotations.
              </p>
            </div>
          </div>
        </div>

        {/* Single column below */}
        <div className="mb-12">
          {/* Top 5 Customers by Revenue */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-200 max-w-2xl mx-auto">
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src="/images/Top 5 Customers by Revenue.png"
                alt="Top 5 Customers by Revenue"
                fill
                className="object-contain bg-slate-800"
              />
            </div>
            <div className="p-6 bg-slate-900/50">
              <h3 className="text-lg font-semibold text-white mb-3">Top Customers by Revenue</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                This view identifies the highest-revenue customer accounts. Use this insight to align account strategy with profit-based segmentation.
              </p>
            </div>
          </div>
        </div>

        {/* Volume vs Value Comparison */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Volume-First Trap */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-8">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-red-400">❌</span> Traditional: Volume-First Thinking
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex gap-3">
                <span className="text-red-400 flex-shrink-0">•</span>
                <span>Maximize unit sales at any margin cost</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 flex-shrink-0">•</span>
                <span>Higher discounts = more volume (not always true)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 flex-shrink-0">•</span>
                <span>Revenue metrics drive decision-making</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 flex-shrink-0">•</span>
                <span>Market share becomes the obsession</span>
              </li>
            </ul>
          </div>

          {/* Value-First Approach */}
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-8">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Strategic: Value-First Thinking
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex gap-3">
                <span className="text-emerald-400 flex-shrink-0">•</span>
                <span>Maximize profit per unit (margin first)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 flex-shrink-0">•</span>
                <span>Disciplined pricing discipline protects margins</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 flex-shrink-0">•</span>
                <span>Profit metrics drive strategic decisions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 flex-shrink-0">•</span>
                <span>Profitability becomes the ultimate measure</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
            <span className="text-emerald-400">→</span> Immediate Action Items
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">1️⃣</span>
              <div>
                <p className="text-white font-medium mb-1">Audit Top 5 Products</p>
                <p className="text-slate-400 text-sm">Compare profit vs revenue rankings. Reallocate resources to profit leaders.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">2️⃣</span>
              <div>
                <p className="text-white font-medium mb-1">Implement Margin-Based KPIs</p>
                <p className="text-slate-400 text-sm">Shift sales incentives from revenue to profit targets by Q3 2024.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">3️⃣</span>
              <div>
                <p className="text-white font-medium mb-1">Strategic Pricing Review</p>
                <p className="text-slate-400 text-sm">Conduct category-by-category discount audit, especially Professional Touring Bikes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">4️⃣</span>
              <div>
                <p className="text-white font-medium mb-1">Customer Segmentation</p>
                <p className="text-slate-400 text-sm">Treat top 5 customers as VIP accounts with dedicated account managers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="mt-12 pt-12 border-t border-slate-700/50 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-400 mb-2">44,498</p>
            <p className="text-slate-400">Units (München Peak)</p>
            <p className="text-slate-500 text-xs mt-1">Proof of urban-hub scalability</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-400 mb-2">15,790</p>
            <p className="text-slate-400">Units (June Record)</p>
            <p className="text-slate-500 text-xs mt-1">Seasonal peak opportunity</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-400 mb-2">[R - C]</p>
            <p className="text-slate-400">The Profit Formula</p>
            <p className="text-slate-500 text-xs mt-1">Revenue minus Costs equals Profit</p>
          </div>
        </div>
      </div>
    </section>
  );
}
